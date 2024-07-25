/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.3
 * source: common/circuit_data.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as pb_1 from "google-protobuf";
export class AppCircuitInfo extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        output_commitment?: string;
        vk?: string;
        input_commitments?: string[];
        toggles_commitment?: string;
        toggles?: boolean[];
        use_callback?: boolean;
        output?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 5], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("output_commitment" in data && data.output_commitment != undefined) {
                this.output_commitment = data.output_commitment;
            }
            if ("vk" in data && data.vk != undefined) {
                this.vk = data.vk;
            }
            if ("input_commitments" in data && data.input_commitments != undefined) {
                this.input_commitments = data.input_commitments;
            }
            if ("toggles_commitment" in data && data.toggles_commitment != undefined) {
                this.toggles_commitment = data.toggles_commitment;
            }
            if ("toggles" in data && data.toggles != undefined) {
                this.toggles = data.toggles;
            }
            if ("use_callback" in data && data.use_callback != undefined) {
                this.use_callback = data.use_callback;
            }
            if ("output" in data && data.output != undefined) {
                this.output = data.output;
            }
        }
    }
    get output_commitment() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set output_commitment(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get vk() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set vk(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get input_commitments() {
        return pb_1.Message.getFieldWithDefault(this, 3, []) as string[];
    }
    set input_commitments(value: string[]) {
        pb_1.Message.setField(this, 3, value);
    }
    get toggles_commitment() {
        return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
    }
    set toggles_commitment(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    get toggles() {
        return pb_1.Message.getFieldWithDefault(this, 5, []) as boolean[];
    }
    set toggles(value: boolean[]) {
        pb_1.Message.setField(this, 5, value);
    }
    get use_callback() {
        return pb_1.Message.getFieldWithDefault(this, 6, false) as boolean;
    }
    set use_callback(value: boolean) {
        pb_1.Message.setField(this, 6, value);
    }
    get output() {
        return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
    }
    set output(value: string) {
        pb_1.Message.setField(this, 7, value);
    }
    static fromObject(data: {
        output_commitment?: string;
        vk?: string;
        input_commitments?: string[];
        toggles_commitment?: string;
        toggles?: boolean[];
        use_callback?: boolean;
        output?: string;
    }): AppCircuitInfo {
        const message = new AppCircuitInfo({});
        if (data.output_commitment != null) {
            message.output_commitment = data.output_commitment;
        }
        if (data.vk != null) {
            message.vk = data.vk;
        }
        if (data.input_commitments != null) {
            message.input_commitments = data.input_commitments;
        }
        if (data.toggles_commitment != null) {
            message.toggles_commitment = data.toggles_commitment;
        }
        if (data.toggles != null) {
            message.toggles = data.toggles;
        }
        if (data.use_callback != null) {
            message.use_callback = data.use_callback;
        }
        if (data.output != null) {
            message.output = data.output;
        }
        return message;
    }
    toObject() {
        const data: {
            output_commitment?: string;
            vk?: string;
            input_commitments?: string[];
            toggles_commitment?: string;
            toggles?: boolean[];
            use_callback?: boolean;
            output?: string;
        } = {};
        if (this.output_commitment != null) {
            data.output_commitment = this.output_commitment;
        }
        if (this.vk != null) {
            data.vk = this.vk;
        }
        if (this.input_commitments != null) {
            data.input_commitments = this.input_commitments;
        }
        if (this.toggles_commitment != null) {
            data.toggles_commitment = this.toggles_commitment;
        }
        if (this.toggles != null) {
            data.toggles = this.toggles;
        }
        if (this.use_callback != null) {
            data.use_callback = this.use_callback;
        }
        if (this.output != null) {
            data.output = this.output;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.output_commitment.length)
            writer.writeString(1, this.output_commitment);
        if (this.vk.length)
            writer.writeString(2, this.vk);
        if (this.input_commitments.length)
            writer.writeRepeatedString(3, this.input_commitments);
        if (this.toggles_commitment.length)
            writer.writeString(4, this.toggles_commitment);
        if (this.toggles.length)
            writer.writePackedBool(5, this.toggles);
        if (this.use_callback != false)
            writer.writeBool(6, this.use_callback);
        if (this.output.length)
            writer.writeString(7, this.output);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AppCircuitInfo {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AppCircuitInfo();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.output_commitment = reader.readString();
                    break;
                case 2:
                    message.vk = reader.readString();
                    break;
                case 3:
                    pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                    break;
                case 4:
                    message.toggles_commitment = reader.readString();
                    break;
                case 5:
                    message.toggles = reader.readPackedBool();
                    break;
                case 6:
                    message.use_callback = reader.readBool();
                    break;
                case 7:
                    message.output = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AppCircuitInfo {
        return AppCircuitInfo.deserialize(bytes);
    }
}
export class AppCirucitInfoWithProof extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        output_commitment?: string;
        vk_hash?: string;
        input_commitments?: string[];
        toggles_commitment?: string;
        toggles?: boolean[];
        output?: string;
        proof?: string;
        callback_addr?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [3, 5], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("output_commitment" in data && data.output_commitment != undefined) {
                this.output_commitment = data.output_commitment;
            }
            if ("vk_hash" in data && data.vk_hash != undefined) {
                this.vk_hash = data.vk_hash;
            }
            if ("input_commitments" in data && data.input_commitments != undefined) {
                this.input_commitments = data.input_commitments;
            }
            if ("toggles_commitment" in data && data.toggles_commitment != undefined) {
                this.toggles_commitment = data.toggles_commitment;
            }
            if ("toggles" in data && data.toggles != undefined) {
                this.toggles = data.toggles;
            }
            if ("output" in data && data.output != undefined) {
                this.output = data.output;
            }
            if ("proof" in data && data.proof != undefined) {
                this.proof = data.proof;
            }
            if ("callback_addr" in data && data.callback_addr != undefined) {
                this.callback_addr = data.callback_addr;
            }
        }
    }
    get output_commitment() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set output_commitment(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    get vk_hash() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set vk_hash(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get input_commitments() {
        return pb_1.Message.getFieldWithDefault(this, 3, []) as string[];
    }
    set input_commitments(value: string[]) {
        pb_1.Message.setField(this, 3, value);
    }
    get toggles_commitment() {
        return pb_1.Message.getFieldWithDefault(this, 4, "") as string;
    }
    set toggles_commitment(value: string) {
        pb_1.Message.setField(this, 4, value);
    }
    get toggles() {
        return pb_1.Message.getFieldWithDefault(this, 5, []) as boolean[];
    }
    set toggles(value: boolean[]) {
        pb_1.Message.setField(this, 5, value);
    }
    get output() {
        return pb_1.Message.getFieldWithDefault(this, 6, "") as string;
    }
    set output(value: string) {
        pb_1.Message.setField(this, 6, value);
    }
    get proof() {
        return pb_1.Message.getFieldWithDefault(this, 7, "") as string;
    }
    set proof(value: string) {
        pb_1.Message.setField(this, 7, value);
    }
    get callback_addr() {
        return pb_1.Message.getFieldWithDefault(this, 8, "") as string;
    }
    set callback_addr(value: string) {
        pb_1.Message.setField(this, 8, value);
    }
    static fromObject(data: {
        output_commitment?: string;
        vk_hash?: string;
        input_commitments?: string[];
        toggles_commitment?: string;
        toggles?: boolean[];
        output?: string;
        proof?: string;
        callback_addr?: string;
    }): AppCirucitInfoWithProof {
        const message = new AppCirucitInfoWithProof({});
        if (data.output_commitment != null) {
            message.output_commitment = data.output_commitment;
        }
        if (data.vk_hash != null) {
            message.vk_hash = data.vk_hash;
        }
        if (data.input_commitments != null) {
            message.input_commitments = data.input_commitments;
        }
        if (data.toggles_commitment != null) {
            message.toggles_commitment = data.toggles_commitment;
        }
        if (data.toggles != null) {
            message.toggles = data.toggles;
        }
        if (data.output != null) {
            message.output = data.output;
        }
        if (data.proof != null) {
            message.proof = data.proof;
        }
        if (data.callback_addr != null) {
            message.callback_addr = data.callback_addr;
        }
        return message;
    }
    toObject() {
        const data: {
            output_commitment?: string;
            vk_hash?: string;
            input_commitments?: string[];
            toggles_commitment?: string;
            toggles?: boolean[];
            output?: string;
            proof?: string;
            callback_addr?: string;
        } = {};
        if (this.output_commitment != null) {
            data.output_commitment = this.output_commitment;
        }
        if (this.vk_hash != null) {
            data.vk_hash = this.vk_hash;
        }
        if (this.input_commitments != null) {
            data.input_commitments = this.input_commitments;
        }
        if (this.toggles_commitment != null) {
            data.toggles_commitment = this.toggles_commitment;
        }
        if (this.toggles != null) {
            data.toggles = this.toggles;
        }
        if (this.output != null) {
            data.output = this.output;
        }
        if (this.proof != null) {
            data.proof = this.proof;
        }
        if (this.callback_addr != null) {
            data.callback_addr = this.callback_addr;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.output_commitment.length)
            writer.writeString(1, this.output_commitment);
        if (this.vk_hash.length)
            writer.writeString(2, this.vk_hash);
        if (this.input_commitments.length)
            writer.writeRepeatedString(3, this.input_commitments);
        if (this.toggles_commitment.length)
            writer.writeString(4, this.toggles_commitment);
        if (this.toggles.length)
            writer.writePackedBool(5, this.toggles);
        if (this.output.length)
            writer.writeString(6, this.output);
        if (this.proof.length)
            writer.writeString(7, this.proof);
        if (this.callback_addr.length)
            writer.writeString(8, this.callback_addr);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): AppCirucitInfoWithProof {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new AppCirucitInfoWithProof();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.output_commitment = reader.readString();
                    break;
                case 2:
                    message.vk_hash = reader.readString();
                    break;
                case 3:
                    pb_1.Message.addToRepeatedField(message, 3, reader.readString());
                    break;
                case 4:
                    message.toggles_commitment = reader.readString();
                    break;
                case 5:
                    message.toggles = reader.readPackedBool();
                    break;
                case 6:
                    message.output = reader.readString();
                    break;
                case 7:
                    message.proof = reader.readString();
                    break;
                case 8:
                    message.callback_addr = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): AppCirucitInfoWithProof {
        return AppCirucitInfoWithProof.deserialize(bytes);
    }
}
