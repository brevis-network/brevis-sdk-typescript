import { ProveRequest } from '../proto/sdk/prover';
import {
    CustomInput as CustomInputPb,
    IndexedReceipt,
    IndexedStorage,
    IndexedTransaction,
    type CustomInput,
    type ReceiptData,
    type StorageData,
    type TransactionData,
} from '../proto/sdk/types';

export class ProofRequest {
    private readonly receipts: IndexedReceipt[] = [];
    private readonly storages: IndexedStorage[] = [];
    private readonly transactions: IndexedTransaction[] = [];
    private customInput?: CustomInputPb;

    public getReceipts(): IndexedReceipt[] {
        return this.receipts;
    }

    public getStorages(): IndexedStorage[] {
        return this.storages;
    }

    public getTransactions(): IndexedTransaction[] {
        return this.transactions;
    }

    public addReceipt(data: ReceiptData, index?: number): void {
        this.receipts.push(new IndexedReceipt({ index, data }));
    }

    public addStorage(data: StorageData, index?: number): void {
        this.storages.push(new IndexedStorage({ index, data }));
    }

    public addTransaction(data: TransactionData, index?: number): void {
        this.transactions.push(new IndexedTransaction({ index, data }));
    }

    public setCustomInput(data: CustomInput): void {
        this.customInput = new CustomInputPb({
            json_bytes: JSON.stringify(data),
        });
    }

    public build(): ProveRequest {
        if (this.customInput === undefined) {
            this.customInput = new CustomInputPb({ json_bytes: '{}' });
        }
        const req = new ProveRequest({
            receipts: this.receipts,
            storages: this.storages,
            transactions: this.transactions,
            custom_input: this.customInput,
        });
        return req;
    }
}
