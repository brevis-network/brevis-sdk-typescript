import { credentials } from '@grpc/grpc-js';
import {
    GatewayClient,
    GetQueryStatusRequest,
    PrepareQueryRequest,
    QueryStatus,
    SubmitAppCircuitProofRequest,
    type GetQueryStatusResponse,
    type PrepareQueryResponse,
    type SubmitAppCircuitProofResponse,
} from '../proto/brevis/gateway';
import { LogExtractInfo, ReceiptInfo, StorageQueryInfo, TransactionInfo } from '../proto/brevis/types';
import { type ProveResponse } from '../proto/sdk/prover';
import { type ReceiptData, type StorageData, type TransactionData } from './../proto/sdk/types';
import { type ProofRequest } from './request';

export interface SubmitResponse {
    // the id of the request. use this id when calling BrevisRequest.sendRequest
    id: string;

    // amount of the fee to pay to BrevisRequest, in wei
    fee: string;
}

export interface FinalResult {
    // the request id
    id: string;

    // the tx where the final proof is submitted on-chain and the app contract is called
    tx?: string;

    // whether the final proof submission tx succeeded
    success: boolean;
}

export class BrevisClient {
    private readonly client: GatewayClient;

    public constructor(url: string) {
        const cred = credentials.createSsl();
        this.client = new GatewayClient(url, cred);
    }

    public async submit(
        request: ProofRequest,
        proof: ProveResponse,
        srcChainId: number,
        dstChainId: number,
    ): Promise<SubmitResponse> {
        try {
            const res1 = await this.prepareQuery(request, proof, srcChainId, dstChainId);
            console.log('brevis request id', res1.query_hash);
            await this.submitAppCircuitProof(res1.query_hash, dstChainId, proof.proof);

            return {
                id: res1.query_hash,
                fee: res1.fee,
            };
        } catch (err: any) {
            throw new Error(`failed to submit: ${err}`);
        }
    }

    // wait untill the final proof is submitted on-chain and the app contract is called
    public async wait(id: string, dstChainId: number): Promise<FinalResult> {
        const interval = 10000;
        const count = 50;

        for (let i = 0; i < count; i++) {
            const res = await this.getQueryStatus(id, dstChainId);
            switch (res.status) {
                case QueryStatus.QS_COMPLETE:
                    console.log(`request ${id} success, tx ${res.tx_hash}`);
                    return { id, tx: res.tx_hash, success: true };
                case QueryStatus.QS_FAILED:
                    console.log(`request ${id} failed`);
                    return { id, success: false };
                case QueryStatus.QS_TO_BE_PAID:
                    console.log(
                        `request ${id} waiting for payment. call BrevisRequest.sendRequest to initiate the payment`,
                    );
                    break;
                default:
                    console.log(`request ${id} waiting for final tx`);
            }
            await new Promise(resolve => setTimeout(resolve, interval));
        }
        console.log(`request ${id} timed out after ${interval * count} seconds`);
        return { id, success: false };
    }

    private async prepareQuery(
        request: ProofRequest,
        proof: ProveResponse,
        srcChainId: number,
        dstChainId: number,
    ): Promise<PrepareQueryResponse> {
        const req = new PrepareQueryRequest({
            chain_id: srcChainId,
            target_chain_id: dstChainId,
            receipt_infos: request.getReceipts().map(r => this.buildReceiptInfo(r.data)),
            storage_query_infos: request.getStorages().map(s => this.buildStorageInfo(s.data)),
            transaction_infos: request.getTransactions().map(t => this.buildTransactionInfo(t.data)),
            use_app_circuit_info: true,
            app_circuit_info: proof.circuit_info,
        });
        const res = await this.client.PrepareQuery(req);
        if (res.has_err) {
            throw new Error(`error while preparing query: ${res.err.msg}`);
        }
        return res;
    }

    private async submitAppCircuitProof(
        id: string,
        dstChainId: number,
        proof: string,
    ): Promise<SubmitAppCircuitProofResponse> {
        const req = new SubmitAppCircuitProofRequest({
            query_hash: id,
            target_chain_id: dstChainId,
            proof,
        });
        const res = await this.client.SubmitAppCircuitProof(req);
        if (res.has_err) {
            throw new Error(`error while submitting proof to brevis: ${res.err.msg}`);
        }
        return res;
    }

    private async getQueryStatus(id: string, dstChainId: number): Promise<GetQueryStatusResponse> {
        const req = new GetQueryStatusRequest({ query_hash: id, target_chain_id: dstChainId });
        const res = await this.client.GetQueryStatus(req);
        if (res.has_err) {
            throw new Error(`error while waiting for final result: ${res.err.msg}`);
        }
        return res;
    }

    private buildReceiptInfo(data: ReceiptData): ReceiptInfo {
        return new ReceiptInfo({
            blk_num: data.block_num,
            transaction_hash: data.tx_hash,
            log_extract_infos: data.fields.map(f => {
                return new LogExtractInfo({
                    contract_address: f.contract,
                    log_index: f.log_index,
                    log_topic0: f.event_id,
                    value_from_topic: f.is_topic,
                    value_index: f.field_index,
                    value: f.value,
                });
            }),
        });
    }

    private buildStorageInfo(data: StorageData): StorageQueryInfo {
        return new StorageQueryInfo({
            account: data.address,
            storage_keys: [data.slot],
            blk_num: data.block_num,
        });
    }

    private buildTransactionInfo(data: TransactionData): TransactionInfo {
        return new TransactionInfo({ transaction_hash: data.hash });
    }
}
