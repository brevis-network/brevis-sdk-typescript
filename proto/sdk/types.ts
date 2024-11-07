/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.3
 * source: sdk/types.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./../common/circuit_data";
import * as pb_1 from "google-protobuf";
export class ReceiptData extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        block_num?: number;
        tx_hash?: string;
        fields?: Field[];
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("block_num" in data && data.block_num != undefined) {
                this.block_num = data.block_num;
            }
            if ("tx_hash" in data && data.tx_hash != undefined) {
                this.tx_hash = data.tx_hash;
            }
            if ("fields" in data && data.fields != undefined) {
                this.fields = data.fields;
            }
        }
    }
    get block_num() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set block_num(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get tx_hash() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set tx_hash(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get fields() {
        return pb_1.Message.getRepeatedWrapperField(this, Field, 3) as Field[];
    }
    set fields(value: Field[]) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    static fromObject(data: {
        block_num?: number;
        tx_hash?: string;
        fields?: ReturnType<typeof Field.prototype.toObject>[];
    }): ReceiptData {
        const message = new ReceiptData({});
        if (data.block_num != null) {
            message.block_num = data.block_num;
        }
        if (data.tx_hash != null) {
            message.tx_hash = data.tx_hash;
        }
        if (data.fields != null) {
            message.fields = data.fields.map(item => Field.fromObject(item));
        }
        return message;
    }
    toObject() {
        const data: {
            block_num?: number;
            tx_hash?: string;
            fields?: ReturnType<typeof Field.prototype.toObject>[];
        } = {};
        if (this.block_num != null) {
            data.block_num = this.block_num;
        }
        if (this.tx_hash != null) {
            data.tx_hash = this.tx_hash;
        }
        if (this.fields != null) {
            data.fields = this.fields.map((item: Field) => item.toObject());
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.block_num != 0)
            writer.writeUint64(1, this.block_num);
        if (this.tx_hash.length)
            writer.writeString(2, this.tx_hash);
        if (this.fields.length)
            writer.writeRepeatedMessage(3, this.fields, (item: Field) => item.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ReceiptData {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ReceiptData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.block_num = reader.readUint64();
                    break;
                case 2:
                    message.tx_hash = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.fields, () => pb_1.Message.addToRepeatedWrapperField(message, 3, Field.deserialize(reader), Field));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ReceiptData {
        return ReceiptData.deserialize(bytes);
    }
}
export class Field extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        contract?: string;
        log_pos?: number;
        event_id?: string;
        value?: string;
        is_topic?: boolean;
        field_index?: number;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("contract" in data && data.contract != undefined) {
                this.contract = data.contract;
            }
            if ("log_pos" in data && data.log_pos != undefined) {
                this.log_pos = data.log_pos;
            }
            if ("event_id" in data && data.event_id != undefined) {
                this.event_id = data.event_id;
            }
            if ("value" in data && data.value != undefined) {
                this.value = data.value;
            }
            if ("is_topic" in data && data.is_topic != undefined) {
                this.is_topic = data.is_topic;
            }
            if ("field_index" in data && data.field_index != undefined) {
                this.field_index = data.field_index;
            }
        }
    }
    get contract() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set contract(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get log_pos() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set log_pos(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get event_id() {
        return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
    }
    set event_id(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get value() {
        return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
    }
    set value(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    get is_topic() {
        return pb_1.Message.getFieldWithDefault(this, 5, false) as boolean;
    }
    set is_topic(value: boolean) {
        pb_1.Message.setField(this, 5, value);
    }
    get field_index() {
        return pb_1.Message.getFieldWithDefault(this, 6, 0) as number;
    }
    set field_index(value: number) {
        pb_1.Message.setField(this, 6, value);
    }
    static fromObject(data: {
        contract?: string;
        log_pos?: number;
        event_id?: string;
        value?: string;
        is_topic?: boolean;
        field_index?: number;
    }): Field {
        const message = new Field({});
        if (data.contract != null) {
            message.contract = data.contract;
        }
        if (data.log_pos != null) {
            message.log_pos = data.log_pos;
        }
        if (data.event_id != null) {
            message.event_id = data.event_id;
        }
        if (data.value != null) {
            message.value = data.value;
        }
        if (data.is_topic != null) {
            message.is_topic = data.is_topic;
        }
        if (data.field_index != null) {
            message.field_index = data.field_index;
        }
        return message;
    }
    toObject() {
        const data: {
            contract?: string;
            log_pos?: number;
            event_id?: string;
            value?: string;
            is_topic?: boolean;
            field_index?: number;
        } = {};
        if (this.contract != null) {
            data.contract = this.contract;
        }
        if (this.log_pos != null) {
            data.log_pos = this.log_pos;
        }
        if (this.event_id != null) {
            data.event_id = this.event_id;
        }
        if (this.value != null) {
            data.value = this.value;
        }
        if (this.is_topic != null) {
            data.is_topic = this.is_topic;
        }
        if (this.field_index != null) {
            data.field_index = this.field_index;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.contract.length)
            writer.writeString(1, this.contract);
        if (this.log_pos != 0)
            writer.writeUint32(2, this.log_pos);
        if (this.event_id.length)
            writer.writeString(3, this.event_id);
        if (this.value.length)
            writer.writeString(4, this.value);
        if (this.is_topic != false)
            writer.writeBool(5, this.is_topic);
        if (this.field_index != 0)
            writer.writeUint32(6, this.field_index);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Field {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Field();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.contract = reader.readString();
                    break;
                case 2:
                    message.log_pos = reader.readUint32();
                    break;
                case 3:
                    message.event_id = reader.readString();
                    break;
                case 4:
                    message.value = reader.readString();
                    break;
                case 5:
                    message.is_topic = reader.readBool();
                    break;
                case 6:
                    message.field_index = reader.readUint32();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Field {
        return Field.deserialize(bytes);
    }
}
export class StorageData extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        block_num?: number;
        address?: string;
        slot?: string;
        value?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("block_num" in data && data.block_num != undefined) {
                this.block_num = data.block_num;
            }
            if ("address" in data && data.address != undefined) {
                this.address = data.address;
            }
            if ("slot" in data && data.slot != undefined) {
                this.slot = data.slot;
            }
            if ("value" in data && data.value != undefined) {
                this.value = data.value;
            }
        }
    }
    get block_num() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set block_num(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get address() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set address(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get slot() {
        return pb_1.Message.getFieldWithDefault(this, 3, "") as string;
    }
    set slot(value: string) {
        pb_1.Message.setField(this, 3, value);
    }
    get value() {
        return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
    }
    set value(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    static fromObject(data: {
        block_num?: number;
        address?: string;
        slot?: string;
        value?: string;
    }): StorageData {
        const message = new StorageData({});
        if (data.block_num != null) {
            message.block_num = data.block_num;
        }
        if (data.address != null) {
            message.address = data.address;
        }
        if (data.slot != null) {
            message.slot = data.slot;
        }
        if (data.value != null) {
            message.value = data.value;
        }
        return message;
    }
    toObject() {
        const data: {
            block_num?: number;
            address?: string;
            slot?: string;
            value?: string;
        } = {};
        if (this.block_num != null) {
            data.block_num = this.block_num;
        }
        if (this.address != null) {
            data.address = this.address;
        }
        if (this.slot != null) {
            data.slot = this.slot;
        }
        if (this.value != null) {
            data.value = this.value;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.block_num != 0)
            writer.writeUint64(1, this.block_num);
        if (this.address.length)
            writer.writeString(2, this.address);
        if (this.slot.length)
            writer.writeString(3, this.slot);
        if (this.value.length)
            writer.writeString(4, this.value);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): StorageData {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new StorageData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.block_num = reader.readUint64();
                    break;
                case 2:
                    message.address = reader.readString();
                    break;
                case 3:
                    message.slot = reader.readString();
                    break;
                case 4:
                    message.value = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): StorageData {
        return StorageData.deserialize(bytes);
    }
}
export class TransactionData extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        hash?: string;
        chain_id?: number;
        block_num?: number;
        nonce?: number;
        gas_tip_cap_or_gas_price?: string;
        gas_fee_cap?: string;
        gas_limit?: number;
        from?: string;
        to?: string;
        value?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("hash" in data && data.hash != undefined) {
                this.hash = data.hash;
            }
            if ("chain_id" in data && data.chain_id != undefined) {
                this.chain_id = data.chain_id;
            }
            if ("block_num" in data && data.block_num != undefined) {
                this.block_num = data.block_num;
            }
            if ("nonce" in data && data.nonce != undefined) {
                this.nonce = data.nonce;
            }
            if ("gas_tip_cap_or_gas_price" in data && data.gas_tip_cap_or_gas_price != undefined) {
                this.gas_tip_cap_or_gas_price = data.gas_tip_cap_or_gas_price;
            }
            if ("gas_fee_cap" in data && data.gas_fee_cap != undefined) {
                this.gas_fee_cap = data.gas_fee_cap;
            }
            if ("gas_limit" in data && data.gas_limit != undefined) {
                this.gas_limit = data.gas_limit;
            }
            if ("from" in data && data.from != undefined) {
                this.from = data.from;
            }
            if ("to" in data && data.to != undefined) {
                this.to = data.to;
            }
            if ("value" in data && data.value != undefined) {
                this.value = data.value;
            }
        }
    }
    get hash() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set hash(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get chain_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, 0) as number;
    }
    set chain_id(value: number) {
        pb_1.Message.setField(this, 2, value);
    }
    get block_num() {
        return pb_1.Message.getFieldWithDefault(this, 3, 0) as number;
    }
    set block_num(value: number) {
        pb_1.Message.setField(this, 3, value);
    }
    get nonce() {
        return pb_1.Message.getFieldWithDefault(this, 4, 0) as number;
    }
    set nonce(value: number) {
        pb_1.Message.setField(this, 4, value);
    }
    get gas_tip_cap_or_gas_price() {
        return pb_1.Message.getFieldWithDefault(this, 5, "") as string;
    }
    set gas_tip_cap_or_gas_price(value: string) {
        pb_1.Message.setField(this, 5, value);
    }
    get gas_fee_cap() {
        return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
    }
    set gas_fee_cap(value: string) {
        pb_1.Message.setField(this, 6, value);
    }
    get gas_limit() {
        return pb_1.Message.getFieldWithDefault(this, 7, 0) as number;
    }
    set gas_limit(value: number) {
        pb_1.Message.setField(this, 7, value);
    }
    get from() {
        return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
    }
    set from(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    get to() {
        return pb_1.Message.getFieldWithDefault(this, 9, "") as string;
    }
    set to(value: string) {
        pb_1.Message.setField(this, 9, value);
    }
    get value() {
        return pb_1.Message.getFieldWithDefault(this, 10, "") as string;
    }
    set value(value: string) {
        pb_1.Message.setField(this, 10, value);
    }
    static fromObject(data: {
        hash?: string;
        chain_id?: number;
        block_num?: number;
        nonce?: number;
        gas_tip_cap_or_gas_price?: string;
        gas_fee_cap?: string;
        gas_limit?: number;
        from?: string;
        to?: string;
        value?: string;
    }): TransactionData {
        const message = new TransactionData({});
        if (data.hash != null) {
            message.hash = data.hash;
        }
        if (data.chain_id != null) {
            message.chain_id = data.chain_id;
        }
        if (data.block_num != null) {
            message.block_num = data.block_num;
        }
        if (data.nonce != null) {
            message.nonce = data.nonce;
        }
        if (data.gas_tip_cap_or_gas_price != null) {
            message.gas_tip_cap_or_gas_price = data.gas_tip_cap_or_gas_price;
        }
        if (data.gas_fee_cap != null) {
            message.gas_fee_cap = data.gas_fee_cap;
        }
        if (data.gas_limit != null) {
            message.gas_limit = data.gas_limit;
        }
        if (data.from != null) {
            message.from = data.from;
        }
        if (data.to != null) {
            message.to = data.to;
        }
        if (data.value != null) {
            message.value = data.value;
        }
        return message;
    }
    toObject() {
        const data: {
            hash?: string;
            chain_id?: number;
            block_num?: number;
            nonce?: number;
            gas_tip_cap_or_gas_price?: string;
            gas_fee_cap?: string;
            gas_limit?: number;
            from?: string;
            to?: string;
            value?: string;
        } = {};
        if (this.hash != null) {
            data.hash = this.hash;
        }
        if (this.chain_id != null) {
            data.chain_id = this.chain_id;
        }
        if (this.block_num != null) {
            data.block_num = this.block_num;
        }
        if (this.nonce != null) {
            data.nonce = this.nonce;
        }
        if (this.gas_tip_cap_or_gas_price != null) {
            data.gas_tip_cap_or_gas_price = this.gas_tip_cap_or_gas_price;
        }
        if (this.gas_fee_cap != null) {
            data.gas_fee_cap = this.gas_fee_cap;
        }
        if (this.gas_limit != null) {
            data.gas_limit = this.gas_limit;
        }
        if (this.from != null) {
            data.from = this.from;
        }
        if (this.to != null) {
            data.to = this.to;
        }
        if (this.value != null) {
            data.value = this.value;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.hash.length)
            writer.writeString(1, this.hash);
        if (this.chain_id != 0)
            writer.writeUint64(2, this.chain_id);
        if (this.block_num != 0)
            writer.writeUint64(3, this.block_num);
        if (this.nonce != 0)
            writer.writeUint64(4, this.nonce);
        if (this.gas_tip_cap_or_gas_price.length)
            writer.writeString(5, this.gas_tip_cap_or_gas_price);
        if (this.gas_fee_cap.length)
            writer.writeString(6, this.gas_fee_cap);
        if (this.gas_limit != 0)
            writer.writeUint64(7, this.gas_limit);
        if (this.from.length)
            writer.writeString(8, this.from);
        if (this.to.length)
            writer.writeString(9, this.to);
        if (this.value.length)
            writer.writeString(10, this.value);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): TransactionData {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new TransactionData();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.hash = reader.readString();
                    break;
                case 2:
                    message.chain_id = reader.readUint64();
                    break;
                case 3:
                    message.block_num = reader.readUint64();
                    break;
                case 4:
                    message.nonce = reader.readUint64();
                    break;
                case 5:
                    message.gas_tip_cap_or_gas_price = reader.readString();
                    break;
                case 6:
                    message.gas_fee_cap = reader.readString();
                    break;
                case 7:
                    message.gas_limit = reader.readUint64();
                    break;
                case 8:
                    message.from = reader.readString();
                    break;
                case 9:
                    message.to = reader.readString();
                    break;
                case 10:
                    message.value = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): TransactionData {
        return TransactionData.deserialize(bytes);
    }
}
export class CustomInput extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        json_bytes?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("json_bytes" in data && data.json_bytes != undefined) {
                this.json_bytes = data.json_bytes;
            }
        }
    }
    get json_bytes() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set json_bytes(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        json_bytes?: string;
    }): CustomInput {
        const message = new CustomInput({});
        if (data.json_bytes != null) {
            message.json_bytes = data.json_bytes;
        }
        return message;
    }
    toObject() {
        const data: {
            json_bytes?: string;
        } = {};
        if (this.json_bytes != null) {
            data.json_bytes = this.json_bytes;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.json_bytes.length)
            writer.writeString(1, this.json_bytes);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): CustomInput {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new CustomInput();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.json_bytes = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): CustomInput {
        return CustomInput.deserialize(bytes);
    }
}
export class IndexedReceipt extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        index?: number;
        data?: ReceiptData;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("index" in data && data.index != undefined) {
                this.index = data.index;
            }
            if ("data" in data && data.data != undefined) {
                this.data = data.data;
            }
        }
    }
    get index() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set index(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get data() {
        return pb_1.Message.getWrapperField(this, ReceiptData, 2) as ReceiptData;
    }
    set data(value: ReceiptData) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_data() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data: {
        index?: number;
        data?: ReturnType<typeof ReceiptData.prototype.toObject>;
    }): IndexedReceipt {
        const message = new IndexedReceipt({});
        if (data.index != null) {
            message.index = data.index;
        }
        if (data.data != null) {
            message.data = ReceiptData.fromObject(data.data);
        }
        return message;
    }
    toObject() {
        const data: {
            index?: number;
            data?: ReturnType<typeof ReceiptData.prototype.toObject>;
        } = {};
        if (this.index != null) {
            data.index = this.index;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.index != 0)
            writer.writeUint32(1, this.index);
        if (this.has_data)
            writer.writeMessage(2, this.data, () => this.data.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IndexedReceipt {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IndexedReceipt();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.index = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.data, () => message.data = ReceiptData.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): IndexedReceipt {
        return IndexedReceipt.deserialize(bytes);
    }
}
export class IndexedStorage extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        index?: number;
        data?: StorageData;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("index" in data && data.index != undefined) {
                this.index = data.index;
            }
            if ("data" in data && data.data != undefined) {
                this.data = data.data;
            }
        }
    }
    get index() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set index(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get data() {
        return pb_1.Message.getWrapperField(this, StorageData, 2) as StorageData;
    }
    set data(value: StorageData) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_data() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data: {
        index?: number;
        data?: ReturnType<typeof StorageData.prototype.toObject>;
    }): IndexedStorage {
        const message = new IndexedStorage({});
        if (data.index != null) {
            message.index = data.index;
        }
        if (data.data != null) {
            message.data = StorageData.fromObject(data.data);
        }
        return message;
    }
    toObject() {
        const data: {
            index?: number;
            data?: ReturnType<typeof StorageData.prototype.toObject>;
        } = {};
        if (this.index != null) {
            data.index = this.index;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.index != 0)
            writer.writeUint32(1, this.index);
        if (this.has_data)
            writer.writeMessage(2, this.data, () => this.data.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IndexedStorage {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IndexedStorage();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.index = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.data, () => message.data = StorageData.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): IndexedStorage {
        return IndexedStorage.deserialize(bytes);
    }
}
export class IndexedTransaction extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        index?: number;
        data?: TransactionData;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("index" in data && data.index != undefined) {
                this.index = data.index;
            }
            if ("data" in data && data.data != undefined) {
                this.data = data.data;
            }
        }
    }
    get index() {
        return pb_1.Message.getFieldWithDefault(this, 1, 0) as number;
    }
    set index(value: number) {
        pb_1.Message.setField(this, 1, value);
    }
    get data() {
        return pb_1.Message.getWrapperField(this, TransactionData, 2) as TransactionData;
    }
    set data(value: TransactionData) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_data() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data: {
        index?: number;
        data?: ReturnType<typeof TransactionData.prototype.toObject>;
    }): IndexedTransaction {
        const message = new IndexedTransaction({});
        if (data.index != null) {
            message.index = data.index;
        }
        if (data.data != null) {
            message.data = TransactionData.fromObject(data.data);
        }
        return message;
    }
    toObject() {
        const data: {
            index?: number;
            data?: ReturnType<typeof TransactionData.prototype.toObject>;
        } = {};
        if (this.index != null) {
            data.index = this.index;
        }
        if (this.data != null) {
            data.data = this.data.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.index != 0)
            writer.writeUint32(1, this.index);
        if (this.has_data)
            writer.writeMessage(2, this.data, () => this.data.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): IndexedTransaction {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new IndexedTransaction();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.index = reader.readUint32();
                    break;
                case 2:
                    reader.readMessage(message.data, () => message.data = TransactionData.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): IndexedTransaction {
        return IndexedTransaction.deserialize(bytes);
    }
}
export class Proof extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        proof?: string;
        circuit_info?: dependency_1.AppCircuitInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("proof" in data && data.proof != undefined) {
                this.proof = data.proof;
            }
            if ("circuit_info" in data && data.circuit_info != undefined) {
                this.circuit_info = data.circuit_info;
            }
        }
    }
    get proof() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set proof(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get circuit_info() {
        return pb_1.Message.getWrapperField(this, dependency_1.AppCircuitInfo, 2) as dependency_1.AppCircuitInfo;
    }
    set circuit_info(value: dependency_1.AppCircuitInfo) {
        pb_1.Message.setWrapperField(this, 2, value);
    }
    get has_circuit_info() {
        return pb_1.Message.getField(this, 2) != null;
    }
    static fromObject(data: {
        proof?: string;
        circuit_info?: ReturnType<typeof dependency_1.AppCircuitInfo.prototype.toObject>;
    }): Proof {
        const message = new Proof({});
        if (data.proof != null) {
            message.proof = data.proof;
        }
        if (data.circuit_info != null) {
            message.circuit_info = dependency_1.AppCircuitInfo.fromObject(data.circuit_info);
        }
        return message;
    }
    toObject() {
        const data: {
            proof?: string;
            circuit_info?: ReturnType<typeof dependency_1.AppCircuitInfo.prototype.toObject>;
        } = {};
        if (this.proof != null) {
            data.proof = this.proof;
        }
        if (this.circuit_info != null) {
            data.circuit_info = this.circuit_info.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.proof.length)
            writer.writeString(1, this.proof);
        if (this.has_circuit_info)
            writer.writeMessage(2, this.circuit_info, () => this.circuit_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Proof {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Proof();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.proof = reader.readString();
                    break;
                case 2:
                    reader.readMessage(message.circuit_info, () => message.circuit_info = dependency_1.AppCircuitInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Proof {
        return Proof.deserialize(bytes);
    }
}
