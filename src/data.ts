import { type CircuitValue } from './circuit-types';

export interface ReceiptData {
    block_num: number;
    txHash: string;
    fields: Field[];
}

export interface Field {
    contract: string;
    logIndex: number;
    eventId: string;
    value: string;
    isTopic: boolean;
    fieldIndex: number;
}

export interface StorageData {
    blockNum: string;
    address: string;
    slot: string;
    value: string;
}

export interface TransactionData {
    hash: string;
    chainId: number;
    blockNum: number;
    nonce: number;
    gasTipCapOrGasPrice: string;
    gasFeeCap: string;
    gasLimit: number;
    from: string;
    to: string;
    value: string;
}

export interface IndexedReceiptData {
    receipt: ReceiptData;
    index: number;
}

export interface IndexedStorageData {
    receipt: StorageData;
    index: number;
}

export interface IndexedTransactionData {
    receipt: TransactionData;
    index: number;
}

export type CustomInput = Record<string, CircuitValue | CircuitValue[]>;

export interface ProofRequest {
    receipts: IndexedReceiptData[];
    storages: IndexedStorageData[];
    transactions: IndexedTransactionData[];
    customInput: CustomInput;
}

export interface CircuitInfo {
    output_commitment: string;
    vk: string;
    input_commitment: string;
    toggles_commitment: string;
    toggles: boolean[];
    use_callback: boolean;
    output: string;
}

export interface ProverResponse {
    success: boolean;
    message: string;
    data: any;
}

export interface ProofResponse extends ProverResponse {
    data: {
        proof: string;
        circuitInfo: CircuitInfo;
    };
}

export interface SubmitResponse extends ProverResponse {
    data: {
        requestId: string;
        fee: string;
    };
}

export interface ErrMsg {
    code: number;
    msg: string;
}

export interface GatewayResponse {
    err: ErrMsg;
}

export interface PrepareQueryResponse extends GatewayResponse {
    query_hash: string;
    fee: string;
}

export interface SubmitAppCircuitProofResponse extends GatewayResponse {
    success: boolean;
}
