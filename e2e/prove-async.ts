import { QueryOption } from '../proto/brevis/gateway';
import { ErrCode } from '../proto/sdk/prover';
import { Field, ReceiptData, StorageData, TransactionData } from '../proto/sdk/types';
import { Brevis } from '../src/brevis-client';
import { asBytes32, asInt248, asUint248, asUint521 } from '../src/circuit-types';
import { Prover } from '../src/prover-client';
import { ProofRequest } from '../src/request';

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    const prover = new Prover('localhost:33247');
    const brevis = new Brevis('appsdkv2.brevis.network:9094');

    const proofReq = new ProofRequest();
    proofReq.addReceipt(
        new ReceiptData({
            tx_hash: '0xd45d48f608a3418a64ca4ecde4acc6e05bfe59335a2c509e11cda9c3d8b39d74',
            fields: [
                new Field({
                    log_pos: 0,
                    is_topic: false,
                    field_index: 0,
                }),
            ],
        }),
    );
    // proofReq.addStorage(
    //     new StorageData({
    //         block_num: 18233760,
    //         address: '0x5427FEFA711Eff984124bFBB1AB6fbf5E3DA1820',
    //         slot: '0x0000000000000000000000000000000000000000000000000000000000000000',
    //         value: '0xf380166f8490f24af32bf47d1aa217fba62b6575',
    //     }),
    // );
    // proofReq.addTransaction(
    //     new TransactionData({
    //         hash: '0x6dc75e61220cc775aafa17796c20e49ac08030020fce710e3e546aa4e003454c',
    //         chain_id: 1,
    //         block_num: 19073244,
    //         nonce: 0,
    //         gas_tip_cap_or_gas_price: '90000000000',
    //         gas_fee_cap: '90000000000',
    //         gas_limit: 21000,
    //         from: '0x6c2843bA78Feb261798be1AAC579d1A4aE2C64b4',
    //         to: '0x2F19E5C3C66C44E6405D4c200fE064ECe9bC253a',
    //         value: '22329290000000000',
    //     }),
    // );
    proofReq.setCustomInput({
        u248Var: asUint248('0'),
        u521Var: asUint521('1'),
        i248Var: asInt248('-2'),
        b32Var: asBytes32('0x3333333333333333333333333333333333333333333333333333333333333333'),
        u248Arr: [asUint248('1'), asUint248('2'), asUint248('3')],
        u521Arr: [asUint521('11'), asUint521('22'), asUint521('33')],
        i248Arr: [asInt248('111'), asInt248('-222'), asInt248('333')],
        b32Arr: [
            asBytes32('0x1111111111111111111111111111111111111111111111111111111111111111'),
            asBytes32('0x2222222222222222222222222222222222222222222222222222222222222222'),
        ],
    });

    const proveRes = await prover.proveAsync(proofReq);
    // error handling
    if (proveRes.has_err) {
        const err = proveRes.err;
        switch (err.code) {
            case ErrCode.ERROR_INVALID_INPUT:
                console.error('invalid receipt/storage/transaction input:', err.msg);
                // handle invalid data input...
                break;

            case ErrCode.ERROR_INVALID_CUSTOM_INPUT:
                console.error('invalid custom input:', err.msg);
                // handle invalid custom input assignment...
                break;
        }
        return;
    }

    console.log('proof id', proveRes.proof_id);

    const prepRes = await brevis.prepareQuery(
        proofReq,
        proveRes.circuit_info,
        1,
        11155111,
        QueryOption.ZK_MODE,
        '',
        '',
    );
    console.log('brevis query key', JSON.stringify(prepRes.query_key));

    let proof = '';
    for (let i = 0; i < 100; i++) {
        const getProofRes = await prover.getProof(proveRes.proof_id);
        if (getProofRes.has_err) {
            console.error(proveRes.err.msg);
            return;
        }
        if (getProofRes.proof) {
            proof = getProofRes.proof;
            console.log('proof', proof);
            break;
        }
        console.log('waiting for proof...');
        await sleep(3000);
    }

    await brevis.submitProof(prepRes.query_key, 11155111, proof);
    console.log('proof submitted to brevis');

    const waitRes = await brevis.wait(prepRes.query_key, 11155111);
    if (waitRes.success) {
        console.log('final tx', waitRes.tx);
    }
}

main();
