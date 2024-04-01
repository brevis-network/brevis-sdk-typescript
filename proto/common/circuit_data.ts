/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.23.4
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
