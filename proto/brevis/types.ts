/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.3
 * source: brevis/types.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class ReceiptInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        transaction_hash?: string;
        log_extract_infos?: LogExtractInfo[];
        blk_num?: number;
        receipt_index?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("transaction_hash" in data && data.transaction_hash != undefined) {
                this.transaction_hash = data.transaction_hash;
            }
            if ("log_extract_infos" in data && data.log_extract_infos != undefined) {
                this.log_extract_infos = data.log_extract_infos;
            }
            if ("blk_num" in data && data.blk_num != undefined) {
                this.blk_num = data.blk_num;
            }
            if ("receipt_index" in data && data.receipt_index != undefined) {
                this.receipt_index = data.receipt_index;
            }
        }
    }
    get transaction_hash() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set transaction_hash(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get log_extract_infos() {
        return pb_1.Message.getRepeatedWrapperField(this, LogExtractInfo, 2) as LogExtractInfo[];
    }
    set log_extract_infos(value: LogExtractInfo[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get blk_num() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set blk_num(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get receipt_index() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set receipt_index(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        transaction_hash?: string;
        log_extract_infos?: ReturnType<typeof LogExtractInfo.prototype.toObject>[];
        blk_num?: number;
        receipt_index?: number;
    }): ReceiptInfo {
        const message = new ReceiptInfo({});
        if (data.transaction_hash != null) {
            message.transaction_hash = data.transaction_hash;
        }
        if (data.log_extract_infos != null) {
            message.log_extract_infos = data.log_extract_infos.map(item => LogExtractInfo.fromObject(item));
        }
        if (data.blk_num != null) {
            message.blk_num = data.blk_num;
        }
        if (data.receipt_index != null) {
            message.receipt_index = data.receipt_index;
        }
        return message;
    }
    toObject() {
        const data: {
            transaction_hash?: string;
            log_extract_infos?: ReturnType<typeof LogExtractInfo.prototype.toObject>[];
            blk_num?: number;
            receipt_index?: number;
        } = {};
        if (this.transaction_hash != null) {
            data.transaction_hash = this.transaction_hash;
        }
        if (this.log_extract_infos != null) {
            data.log_extract_infos = this.log_extract_infos.map((item: LogExtractInfo) => item.toObject());
        }
        if (this.blk_num != null) {
            data.blk_num = this.blk_num;
        }
        if (this.receipt_index != null) {
            data.receipt_index = this.receipt_index;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.transaction_hash.length)
            writer.writeString(1, this.transaction_hash);
        if (this.log_extract_infos.length)
            writer.writeRepeatedMessage(2, this.log_extract_infos, (item: LogExtractInfo) => item.serialize(writer));
        if (this.blk_num != 0)
            writer.writeUint64(3, this.blk_num);
        if (this.receipt_index != 0)
            writer.writeUint64(4, this.receipt_index);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ReceiptInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ReceiptInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.transaction_hash = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.log_extract_infos, () => pb_1.Message.addToRepeatedWrapperField(message, 2, LogExtractInfo.deserialize(reader), LogExtractInfo));
                    break;
                case 3:
                    message.blk_num = reader.readUint64();
                    break;
                case 4:
                    message.receipt_index = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ReceiptInfo {
        return ReceiptInfo.deserialize(bytes);
    }
}
export class LogExtractInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        contract_address?: string;
        log_pos?: number;
        log_topic0?: string;
        value_from_topic?: boolean;
        value_index?: number;
        value?: string;
        topics_length?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("contract_address" in data && data.contract_address != undefined) {
                this.contract_address = data.contract_address;
            }
            if ("log_pos" in data && data.log_pos != undefined) {
                this.log_pos = data.log_pos;
            }
            if ("log_topic0" in data && data.log_topic0 != undefined) {
                this.log_topic0 = data.log_topic0;
            }
            if ("value_from_topic" in data && data.value_from_topic != undefined) {
                this.value_from_topic = data.value_from_topic;
            }
            if ("value_index" in data && data.value_index != undefined) {
                this.value_index = data.value_index;
            }
            if ("value" in data && data.value != undefined) {
                this.value = data.value;
            }
            if ("topics_length" in data && data.topics_length != undefined) {
                this.topics_length = data.topics_length;
            }
        }
    }
    get contract_address() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set contract_address(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get log_pos() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set log_pos(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get log_topic0() {
        return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
    }
    set log_topic0(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get value_from_topic() {
        return pb_1.Message.getFieldWithDefault(this, 4, false) as boolean;
    }
    set value_from_topic(value: boolean) {
        pb_1.Message.setField(this, 4, value);
    }
    get value_index() {
        return pb_1.Message.getFieldWithDefault(this, 5, 0) as number;
    }
    set value_index(value: number) {
        pb_1.Message.setField(this, 5, value);
    }
    get value() {
        return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
    }
    set value(value: string) {
        pb_1.Message.setField(this, 6, value);
    }
    get topics_length() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set topics_length(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        contract_address?: string;
        log_pos?: number;
        log_topic0?: string;
        value_from_topic?: boolean;
        value_index?: number;
        value?: string;
        topics_length?: number;
    }): LogExtractInfo {
        const message = new LogExtractInfo({});
        if (data.contract_address != null) {
            message.contract_address = data.contract_address;
        }
        if (data.log_pos != null) {
            message.log_pos = data.log_pos;
        }
        if (data.log_topic0 != null) {
            message.log_topic0 = data.log_topic0;
        }
        if (data.value_from_topic != null) {
            message.value_from_topic = data.value_from_topic;
        }
        if (data.value_index != null) {
            message.value_index = data.value_index;
        }
        if (data.value != null) {
            message.value = data.value;
        }
        if (data.topics_length != null) {
            message.topics_length = data.topics_length;
        }
        return message;
    }
    toObject() {
        const data: {
            contract_address?: string;
            log_pos?: number;
            log_topic0?: string;
            value_from_topic?: boolean;
            value_index?: number;
            value?: string;
            topics_length?: number;
        } = {};
        if (this.contract_address != null) {
            data.contract_address = this.contract_address;
        }
        if (this.log_pos != null) {
            data.log_pos = this.log_pos;
        }
        if (this.log_topic0 != null) {
            data.log_topic0 = this.log_topic0;
        }
        if (this.value_from_topic != null) {
            data.value_from_topic = this.value_from_topic;
        }
        if (this.value_index != null) {
            data.value_index = this.value_index;
        }
        if (this.value != null) {
            data.value = this.value;
        }
        if (this.topics_length != null) {
            data.topics_length = this.topics_length;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.contract_address.length)
            writer.writeString(1, this.contract_address);
        if (this.log_pos != 0)
            writer.writeUint64(2, this.log_pos);
        if (this.log_topic0.length)
            writer.writeString(3, this.log_topic0);
        if (this.value_from_topic != false)
            writer.writeBool(4, this.value_from_topic);
        if (this.value_index != 0)
            writer.writeUint64(5, this.value_index);
        if (this.value.length)
            writer.writeString(6, this.value);
        if (this.topics_length != 0)
            writer.writeUint64(7, this.topics_length);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): LogExtractInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new LogExtractInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.contract_address = reader.readString();
                    break;
                case 2:
                    message.log_pos = reader.readUint64();
                    break;
                case 3:
                    message.log_topic0 = reader.readString();
                    break;
                case 4:
                    message.value_from_topic = reader.readBool();
                    break;
                case 5:
                    message.value_index = reader.readUint64();
                    break;
                case 6:
                    message.value = reader.readString();
                    break;
                case 7:
                    message.topics_length = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): LogExtractInfo {
        return LogExtractInfo.deserialize(bytes);
    }
}
export class StorageQueryInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        account?: string;
        storage_keys?: string[];
        blk_num?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [2], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("account" in data && data.account != undefined) {
                this.account = data.account;
            }
            if ("storage_keys" in data && data.storage_keys != undefined) {
                this.storage_keys = data.storage_keys;
            }
            if ("blk_num" in data && data.blk_num != undefined) {
                this.blk_num = data.blk_num;
            }
        }
    }
    get account() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set account(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get storage_keys() {
        return pb_1.Message.getFieldWithDefault(this, 2, []) as string[];
    }
    set storage_keys(value: string[]) {
        pb_1.Message.setField(this, 2, value);
    }
    get blk_num() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set blk_num(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    static fromObject(data: {
        account?: string;
        storage_keys?: string[];
        blk_num?: number;
    }): StorageQueryInfo {
        const message = new StorageQueryInfo({});
        if (data.account != null) {
            message.account = data.account;
        }
        if (data.storage_keys != null) {
            message.storage_keys = data.storage_keys;
        }
        if (data.blk_num != null) {
            message.blk_num = data.blk_num;
        }
        return message;
    }
    toObject() {
        const data: {
            account?: string;
            storage_keys?: string[];
            blk_num?: number;
        } = {};
        if (this.account != null) {
            data.account = this.account;
        }
        if (this.storage_keys != null) {
            data.storage_keys = this.storage_keys;
        }
        if (this.blk_num != null) {
            data.blk_num = this.blk_num;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.account.length)
            writer.writeString(1, this.account);
        if (this.storage_keys.length)
            writer.writeRepeatedString(2, this.storage_keys);
        if (this.blk_num != 0)
            writer.writeUint64(3, this.blk_num);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StorageQueryInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StorageQueryInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.account = reader.readString();
                    break;
                case 2:
                    pb_1.Message.addToRepeatedField(message, 2, reader.readString());
                    break;
                case 3:
                    message.blk_num = reader.readUint64();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): StorageQueryInfo {
        return StorageQueryInfo.deserialize(bytes);
    }
}
export class TransactionInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        transaction_hash?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("transaction_hash" in data && data.transaction_hash != undefined) {
                this.transaction_hash = data.transaction_hash;
            }
        }
    }
    get transaction_hash() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set transaction_hash(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        transaction_hash?: string;
    }): TransactionInfo {
        const message = new TransactionInfo({});
        if (data.transaction_hash != null) {
            message.transaction_hash = data.transaction_hash;
        }
        return message;
    }
    toObject() {
        const data: {
            transaction_hash?: string;
        } = {};
        if (this.transaction_hash != null) {
            data.transaction_hash = this.transaction_hash;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.transaction_hash.length)
            writer.writeString(1, this.transaction_hash);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TransactionInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TransactionInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.transaction_hash = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TransactionInfo {
        return TransactionInfo.deserialize(bytes);
    }
}
