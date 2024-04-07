import { describe, it } from 'mocha';
import { asBytes32, asInt248, asUint248, asUint521, type CustomInput } from './circuit-types';

describe('custom input marshalling', () => {
    const basic: CustomInput = {
        u248Var: asUint248('0'),
        u521Var: asUint521('1'),
        i248Var: asInt248('-2'),
        b32Var: asBytes32('0x3333333333333333333333333333333333333333333333333333333333333333'),
    };
    const array: CustomInput = {
        ...basic,
        u248Arr: [asUint248('1'), asUint248('2'), asUint248('3')],
        u521Arr: [asUint521('11'), asUint521('22'), asUint521('33')],
        i248Arr: [asInt248('111'), asInt248('-222'), asInt248('333')],
        b32Arr: [
            asBytes32('0x1111111111111111111111111111111111111111111111111111111111111111'),
            asBytes32('0x2222222222222222222222222222222222222222222222222222222222222222'),
        ],
    };
    it('marshals correctly', () => {
        console.log(JSON.stringify(array, null, 4));
    });
});

// describe('ProofRequest', () => {
//     const basicCustom: CustomInput = {
//         u248Var: asUint248('0'),
//         u521Var: asUint521('1'),
//         i248Var: asInt248('-2'),
//         b32Var: asBytes32('0x3333333333333333333333333333333333333333333333333333333333333333'),
//     };
//     const array: CustomInput = {
//         ...basicCustom,
//         u248Arr: [asUint248('1'), asUint248('2'), asUint248('3')],
//         u521Arr: [asUint521('11'), asUint521('22'), asUint521('33')],
//         i248Arr: [asInt248('111'), asInt248('-222'), asInt248('333')],
//         b32Arr: [
//             asBytes32('0x1111111111111111111111111111111111111111111111111111111111111111'),
//             asBytes32('0x2222222222222222222222222222222222222222222222222222222222222222'),
//         ],
//     };
//     let requestBasic: ProofRequest;

//     beforeEach(() => {
//         requestBasic = new ProofRequest();
//         generateReceipts(1).forEach(receipt => requestBasic.addReceipt(receipt));
//         generateStorages(1).forEach(storage => requestBasic.addStorage(storage));
//         generateTransaction(1).forEach(tx => requestBasic.addTransaction(tx));
//         requestBasic.setCustomInput(basicCustom);
//     });

//     it('marshals valid data correctly', () => {
//         requestBasic.build();
//     });
// });

// function generateReceipts(count: number): ReceiptData[] {
//     const receipts: ReceiptData[] = [];
//     for (let i = 0; i < count; i++) {
//         receipts.push(
//             new ReceiptData({
//                 block_num: 123,
//                 tx_hash: randomBytes(32),
//                 fields: [
//                     new Field({
//                         contract: randomBytes(20),
//                         event_id: randomBytes(32),
//                         field_index: 0,
//                         is_topic: true,
//                         log_index: 1,
//                         value: randomNum().toString(),
//                     }),
//                     new Field({
//                         contract: randomBytes(20),
//                         event_id: randomBytes(32),
//                         field_index: 1,
//                         is_topic: false,
//                         log_index: 2,
//                         value: randomNum.toString(),
//                     }),
//                 ],
//             }),
//         );
//     }
//     return receipts;
// }

// function generateStorages(count: number): StorageData[] {
//     const storages: StorageData[] = [];
//     for (let i = 0; i < count; i++) {
//         storages.push(
//             new StorageData({
//                 address: randomBytes(20),
//                 block_num: randomNum(),
//                 slot: randomBytes(32),
//                 value: randomNum().toString(),
//             }),
//         );
//     }
//     return storages;
// }

// function generateTransaction(count: number): TransactionData[] {
//     const txs: TransactionData[] = [];
//     for (let i = 0; i < count; i++) {
//         txs.push(
//             new TransactionData({
//                 block_num: randomNum(),
//                 chain_id: randomNum(),
//                 from: randomBytes(20),
//                 to: randomBytes(20),
//                 gas_fee_cap: randomNum().toString(),
//                 gas_tip_cap_or_gas_price: randomNum().toString(),
//                 gas_limit: randomNum(),
//                 hash: randomBytes(32),
//                 nonce: randomNum(),
//                 value: randomNum().toString(),
//             }),
//         );
//     }
//     return txs;
// }

// function randomNum(): number {
//     return Math.floor(Math.random() * 10000000);
// }

// function randomBytes(n: number): string {
//     return ethers.hexlify(ethers.randomBytes(n));
// }
