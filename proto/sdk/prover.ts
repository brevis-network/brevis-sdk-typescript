/**
 * Generated by the protoc-gen-ts.  DO NOT EDIT!
 * compiler version: 4.25.3
 * source: sdk/prover.proto
 * git: https://github.com/thesayyn/protoc-gen-ts */
import * as dependency_1 from "./types";
import * as dependency_2 from "./../common/circuit_data";
import * as dependency_3 from "./../google/api/annotations";
import * as pb_1 from "google-protobuf";
import * as grpc_1 from "@grpc/grpc-js";
export enum ErrCode {
    ERROR_UNDEFINED = 0,
    ERROR_DEFAULT = 1,
    ERROR_INVALID_INPUT = 2,
    ERROR_INVALID_CUSTOM_INPUT = 3,
    ERROR_FAILED_TO_PROVE = 4
}
export class ProveRequest extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        receipts?: dependency_1.IndexedReceipt[];
        storages?: dependency_1.IndexedStorage[];
        transactions?: dependency_1.IndexedTransaction[];
        custom_input?: dependency_1.CustomInput;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [1, 2, 3], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("receipts" in data && data.receipts != undefined) {
                this.receipts = data.receipts;
            }
            if ("storages" in data && data.storages != undefined) {
                this.storages = data.storages;
            }
            if ("transactions" in data && data.transactions != undefined) {
                this.transactions = data.transactions;
            }
            if ("custom_input" in data && data.custom_input != undefined) {
                this.custom_input = data.custom_input;
            }
        }
    }
    get receipts() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.IndexedReceipt, 1) as dependency_1.IndexedReceipt[];
    }
    set receipts(value: dependency_1.IndexedReceipt[]) {
        pb_1.Message.setRepeatedWrapperField(this, 1, value);
    }
    get storages() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.IndexedStorage, 2) as dependency_1.IndexedStorage[];
    }
    set storages(value: dependency_1.IndexedStorage[]) {
        pb_1.Message.setRepeatedWrapperField(this, 2, value);
    }
    get transactions() {
        return pb_1.Message.getRepeatedWrapperField(this, dependency_1.IndexedTransaction, 3) as dependency_1.IndexedTransaction[];
    }
    set transactions(value: dependency_1.IndexedTransaction[]) {
        pb_1.Message.setRepeatedWrapperField(this, 3, value);
    }
    get custom_input() {
        return pb_1.Message.getWrapperField(this, dependency_1.CustomInput, 4) as dependency_1.CustomInput;
    }
    set custom_input(value: dependency_1.CustomInput) {
        pb_1.Message.setWrapperField(this, 4, value);
    }
    get has_custom_input() {
        return pb_1.Message.getField(this, 4) != null;
    }
    static fromObject(data: {
        receipts?: ReturnType<typeof dependency_1.IndexedReceipt.prototype.toObject>[];
        storages?: ReturnType<typeof dependency_1.IndexedStorage.prototype.toObject>[];
        transactions?: ReturnType<typeof dependency_1.IndexedTransaction.prototype.toObject>[];
        custom_input?: ReturnType<typeof dependency_1.CustomInput.prototype.toObject>;
    }): ProveRequest {
        const message = new ProveRequest({});
        if (data.receipts != null) {
            message.receipts = data.receipts.map(item => dependency_1.IndexedReceipt.fromObject(item));
        }
        if (data.storages != null) {
            message.storages = data.storages.map(item => dependency_1.IndexedStorage.fromObject(item));
        }
        if (data.transactions != null) {
            message.transactions = data.transactions.map(item => dependency_1.IndexedTransaction.fromObject(item));
        }
        if (data.custom_input != null) {
            message.custom_input = dependency_1.CustomInput.fromObject(data.custom_input);
        }
        return message;
    }
    toObject() {
        const data: {
            receipts?: ReturnType<typeof dependency_1.IndexedReceipt.prototype.toObject>[];
            storages?: ReturnType<typeof dependency_1.IndexedStorage.prototype.toObject>[];
            transactions?: ReturnType<typeof dependency_1.IndexedTransaction.prototype.toObject>[];
            custom_input?: ReturnType<typeof dependency_1.CustomInput.prototype.toObject>;
        } = {};
        if (this.receipts != null) {
            data.receipts = this.receipts.map((item: dependency_1.IndexedReceipt) => item.toObject());
        }
        if (this.storages != null) {
            data.storages = this.storages.map((item: dependency_1.IndexedStorage) => item.toObject());
        }
        if (this.transactions != null) {
            data.transactions = this.transactions.map((item: dependency_1.IndexedTransaction) => item.toObject());
        }
        if (this.custom_input != null) {
            data.custom_input = this.custom_input.toObject();
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.receipts.length)
            writer.writeRepeatedMessage(1, this.receipts, (item: dependency_1.IndexedReceipt) => item.serialize(writer));
        if (this.storages.length)
            writer.writeRepeatedMessage(2, this.storages, (item: dependency_1.IndexedStorage) => item.serialize(writer));
        if (this.transactions.length)
            writer.writeRepeatedMessage(3, this.transactions, (item: dependency_1.IndexedTransaction) => item.serialize(writer));
        if (this.has_custom_input)
            writer.writeMessage(4, this.custom_input, () => this.custom_input.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProveRequest {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProveRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.receipts, () => pb_1.Message.addToRepeatedWrapperField(message, 1, dependency_1.IndexedReceipt.deserialize(reader), dependency_1.IndexedReceipt));
                    break;
                case 2:
                    reader.readMessage(message.storages, () => pb_1.Message.addToRepeatedWrapperField(message, 2, dependency_1.IndexedStorage.deserialize(reader), dependency_1.IndexedStorage));
                    break;
                case 3:
                    reader.readMessage(message.transactions, () => pb_1.Message.addToRepeatedWrapperField(message, 3, dependency_1.IndexedTransaction.deserialize(reader), dependency_1.IndexedTransaction));
                    break;
                case 4:
                    reader.readMessage(message.custom_input, () => message.custom_input = dependency_1.CustomInput.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ProveRequest {
        return ProveRequest.deserialize(bytes);
    }
}
export class ProveResponse extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        err?: Err;
        proof?: string;
        circuit_info?: dependency_2.AppCircuitInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("err" in data && data.err != undefined) {
                this.err = data.err;
            }
            if ("proof" in data && data.proof != undefined) {
                this.proof = data.proof;
            }
            if ("circuit_info" in data && data.circuit_info != undefined) {
                this.circuit_info = data.circuit_info;
            }
        }
    }
    get err() {
        return pb_1.Message.getWrapperField(this, Err, 1) as Err;
    }
    set err(value: Err) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_err() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get proof() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set proof(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get circuit_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.AppCircuitInfo, 3) as dependency_2.AppCircuitInfo;
    }
    set circuit_info(value: dependency_2.AppCircuitInfo) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_circuit_info() {
        return pb_1.Message.getField(this, 3) != null;
    }
    static fromObject(data: {
        err?: ReturnType<typeof Err.prototype.toObject>;
        proof?: string;
        circuit_info?: ReturnType<typeof dependency_2.AppCircuitInfo.prototype.toObject>;
    }): ProveResponse {
        const message = new ProveResponse({});
        if (data.err != null) {
            message.err = Err.fromObject(data.err);
        }
        if (data.proof != null) {
            message.proof = data.proof;
        }
        if (data.circuit_info != null) {
            message.circuit_info = dependency_2.AppCircuitInfo.fromObject(data.circuit_info);
        }
        return message;
    }
    toObject() {
        const data: {
            err?: ReturnType<typeof Err.prototype.toObject>;
            proof?: string;
            circuit_info?: ReturnType<typeof dependency_2.AppCircuitInfo.prototype.toObject>;
        } = {};
        if (this.err != null) {
            data.err = this.err.toObject();
        }
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
        if (this.has_err)
            writer.writeMessage(1, this.err, () => this.err.serialize(writer));
        if (this.proof.length)
            writer.writeString(2, this.proof);
        if (this.has_circuit_info)
            writer.writeMessage(3, this.circuit_info, () => this.circuit_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProveResponse {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProveResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.err, () => message.err = Err.deserialize(reader));
                    break;
                case 2:
                    message.proof = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.circuit_info, () => message.circuit_info = dependency_2.AppCircuitInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ProveResponse {
        return ProveResponse.deserialize(bytes);
    }
}
export class ProveAsyncResponse extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        err?: Err;
        proof_id?: string;
        circuit_info?: dependency_2.AppCircuitInfo;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("err" in data && data.err != undefined) {
                this.err = data.err;
            }
            if ("proof_id" in data && data.proof_id != undefined) {
                this.proof_id = data.proof_id;
            }
            if ("circuit_info" in data && data.circuit_info != undefined) {
                this.circuit_info = data.circuit_info;
            }
        }
    }
    get err() {
        return pb_1.Message.getWrapperField(this, Err, 1) as Err;
    }
    set err(value: Err) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_err() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get proof_id() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set proof_id(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    get circuit_info() {
        return pb_1.Message.getWrapperField(this, dependency_2.AppCircuitInfo, 3) as dependency_2.AppCircuitInfo;
    }
    set circuit_info(value: dependency_2.AppCircuitInfo) {
        pb_1.Message.setWrapperField(this, 3, value);
    }
    get has_circuit_info() {
        return pb_1.Message.getField(this, 3) != null;
    }
    static fromObject(data: {
        err?: ReturnType<typeof Err.prototype.toObject>;
        proof_id?: string;
        circuit_info?: ReturnType<typeof dependency_2.AppCircuitInfo.prototype.toObject>;
    }): ProveAsyncResponse {
        const message = new ProveAsyncResponse({});
        if (data.err != null) {
            message.err = Err.fromObject(data.err);
        }
        if (data.proof_id != null) {
            message.proof_id = data.proof_id;
        }
        if (data.circuit_info != null) {
            message.circuit_info = dependency_2.AppCircuitInfo.fromObject(data.circuit_info);
        }
        return message;
    }
    toObject() {
        const data: {
            err?: ReturnType<typeof Err.prototype.toObject>;
            proof_id?: string;
            circuit_info?: ReturnType<typeof dependency_2.AppCircuitInfo.prototype.toObject>;
        } = {};
        if (this.err != null) {
            data.err = this.err.toObject();
        }
        if (this.proof_id != null) {
            data.proof_id = this.proof_id;
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
        if (this.has_err)
            writer.writeMessage(1, this.err, () => this.err.serialize(writer));
        if (this.proof_id.length)
            writer.writeString(2, this.proof_id);
        if (this.has_circuit_info)
            writer.writeMessage(3, this.circuit_info, () => this.circuit_info.serialize(writer));
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): ProveAsyncResponse {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new ProveAsyncResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.err, () => message.err = Err.deserialize(reader));
                    break;
                case 2:
                    message.proof_id = reader.readString();
                    break;
                case 3:
                    reader.readMessage(message.circuit_info, () => message.circuit_info = dependency_2.AppCircuitInfo.deserialize(reader));
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): ProveAsyncResponse {
        return ProveAsyncResponse.deserialize(bytes);
    }
}
export class GetProofRequest extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        proof_id?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("proof_id" in data && data.proof_id != undefined) {
                this.proof_id = data.proof_id;
            }
        }
    }
    get proof_id() {
        return pb_1.Message.getFieldWithDefault(this, 1, "") as string;
    }
    set proof_id(value: string) {
        pb_1.Message.setField(this, 1, value);
    }
    static fromObject(data: {
        proof_id?: string;
    }): GetProofRequest {
        const message = new GetProofRequest({});
        if (data.proof_id != null) {
            message.proof_id = data.proof_id;
        }
        return message;
    }
    toObject() {
        const data: {
            proof_id?: string;
        } = {};
        if (this.proof_id != null) {
            data.proof_id = this.proof_id;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.proof_id.length)
            writer.writeString(1, this.proof_id);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetProofRequest {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetProofRequest();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.proof_id = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetProofRequest {
        return GetProofRequest.deserialize(bytes);
    }
}
export class GetProofResponse extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        err?: Err;
        proof?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("err" in data && data.err != undefined) {
                this.err = data.err;
            }
            if ("proof" in data && data.proof != undefined) {
                this.proof = data.proof;
            }
        }
    }
    get err() {
        return pb_1.Message.getWrapperField(this, Err, 1) as Err;
    }
    set err(value: Err) {
        pb_1.Message.setWrapperField(this, 1, value);
    }
    get has_err() {
        return pb_1.Message.getField(this, 1) != null;
    }
    get proof() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set proof(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        err?: ReturnType<typeof Err.prototype.toObject>;
        proof?: string;
    }): GetProofResponse {
        const message = new GetProofResponse({});
        if (data.err != null) {
            message.err = Err.fromObject(data.err);
        }
        if (data.proof != null) {
            message.proof = data.proof;
        }
        return message;
    }
    toObject() {
        const data: {
            err?: ReturnType<typeof Err.prototype.toObject>;
            proof?: string;
        } = {};
        if (this.err != null) {
            data.err = this.err.toObject();
        }
        if (this.proof != null) {
            data.proof = this.proof;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.has_err)
            writer.writeMessage(1, this.err, () => this.err.serialize(writer));
        if (this.proof.length)
            writer.writeString(2, this.proof);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): GetProofResponse {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new GetProofResponse();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    reader.readMessage(message.err, () => message.err = Err.deserialize(reader));
                    break;
                case 2:
                    message.proof = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): GetProofResponse {
        return GetProofResponse.deserialize(bytes);
    }
}
export class Err extends pb_1.Message {
    #one_of_decls: number[][] = [];
    constructor(data?: any[] | {
        code?: ErrCode;
        msg?: string;
    }) {
        super();
        pb_1.Message.initialize(this, Array.isArray(data) ? data : [], 0, -1, [], this.#one_of_decls);
        if (!Array.isArray(data) && typeof data == "object") {
            if ("code" in data && data.code != undefined) {
                this.code = data.code;
            }
            if ("msg" in data && data.msg != undefined) {
                this.msg = data.msg;
            }
        }
    }
    get code() {
        return pb_1.Message.getFieldWithDefault(this, 1, ErrCode.ERROR_UNDEFINED) as ErrCode;
    }
    set code(value: ErrCode) {
        pb_1.Message.setField(this, 1, value);
    }
    get msg() {
        return pb_1.Message.getFieldWithDefault(this, 2, "") as string;
    }
    set msg(value: string) {
        pb_1.Message.setField(this, 2, value);
    }
    static fromObject(data: {
        code?: ErrCode;
        msg?: string;
    }): Err {
        const message = new Err({});
        if (data.code != null) {
            message.code = data.code;
        }
        if (data.msg != null) {
            message.msg = data.msg;
        }
        return message;
    }
    toObject() {
        const data: {
            code?: ErrCode;
            msg?: string;
        } = {};
        if (this.code != null) {
            data.code = this.code;
        }
        if (this.msg != null) {
            data.msg = this.msg;
        }
        return data;
    }
    serialize(): Uint8Array;
    serialize(w: pb_1.BinaryWriter): void;
    serialize(w?: pb_1.BinaryWriter): Uint8Array | void {
        const writer = w || new pb_1.BinaryWriter();
        if (this.code != ErrCode.ERROR_UNDEFINED)
            writer.writeEnum(1, this.code);
        if (this.msg.length)
            writer.writeString(2, this.msg);
        if (!w)
            return writer.getResultBuffer();
    }
    static deserialize(bytes: Uint8Array | pb_1.BinaryReader): Err {
        const reader = bytes instanceof pb_1.BinaryReader ? bytes : new pb_1.BinaryReader(bytes), message = new Err();
        while (reader.nextField()) {
            if (reader.isEndGroup())
                break;
            switch (reader.getFieldNumber()) {
                case 1:
                    message.code = reader.readEnum();
                    break;
                case 2:
                    message.msg = reader.readString();
                    break;
                default: reader.skipField();
            }
        }
        return message;
    }
    serializeBinary(): Uint8Array {
        return this.serialize();
    }
    static deserializeBinary(bytes: Uint8Array): Err {
        return Err.deserialize(bytes);
    }
}
interface GrpcUnaryServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
    (message: P, callback: grpc_1.requestCallback<R>): grpc_1.ClientUnaryCall;
}
interface GrpcStreamServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
    (message: P, options?: grpc_1.CallOptions): grpc_1.ClientReadableStream<R>;
}
interface GrpWritableServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (metadata: grpc_1.Metadata, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (options: grpc_1.CallOptions, callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
    (callback: grpc_1.requestCallback<R>): grpc_1.ClientWritableStream<P>;
}
interface GrpcChunkServiceInterface<P, R> {
    (metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
    (options?: grpc_1.CallOptions): grpc_1.ClientDuplexStream<P, R>;
}
interface GrpcPromiseServiceInterface<P, R> {
    (message: P, metadata: grpc_1.Metadata, options?: grpc_1.CallOptions): Promise<R>;
    (message: P, options?: grpc_1.CallOptions): Promise<R>;
}
export abstract class UnimplementedProverService {
    static definition = {
        Prove: {
            path: "/sdk.Prover/Prove",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: ProveRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => ProveRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: ProveResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => ProveResponse.deserialize(new Uint8Array(bytes))
        },
        ProveAsync: {
            path: "/sdk.Prover/ProveAsync",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: ProveRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => ProveRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: ProveAsyncResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => ProveAsyncResponse.deserialize(new Uint8Array(bytes))
        },
        GetProof: {
            path: "/sdk.Prover/GetProof",
            requestStream: false,
            responseStream: false,
            requestSerialize: (message: GetProofRequest) => Buffer.from(message.serialize()),
            requestDeserialize: (bytes: Buffer) => GetProofRequest.deserialize(new Uint8Array(bytes)),
            responseSerialize: (message: GetProofResponse) => Buffer.from(message.serialize()),
            responseDeserialize: (bytes: Buffer) => GetProofResponse.deserialize(new Uint8Array(bytes))
        }
    };
    [method: string]: grpc_1.UntypedHandleCall;
    abstract Prove(call: grpc_1.ServerUnaryCall<ProveRequest, ProveResponse>, callback: grpc_1.sendUnaryData<ProveResponse>): void;
    abstract ProveAsync(call: grpc_1.ServerUnaryCall<ProveRequest, ProveAsyncResponse>, callback: grpc_1.sendUnaryData<ProveAsyncResponse>): void;
    abstract GetProof(call: grpc_1.ServerUnaryCall<GetProofRequest, GetProofResponse>, callback: grpc_1.sendUnaryData<GetProofResponse>): void;
}
export class ProverClient extends grpc_1.makeGenericClientConstructor(UnimplementedProverService.definition, "Prover", {}) {
    constructor(address: string, credentials: grpc_1.ChannelCredentials, options?: Partial<grpc_1.ChannelOptions>) {
        super(address, credentials, options);
    }
    Prove: GrpcPromiseServiceInterface<ProveRequest, ProveResponse> = (message: ProveRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<ProveResponse> => { if (!metadata) {
        metadata = new grpc_1.Metadata;
    } if (!options) {
        options = {};
    } return new Promise((resolve, reject) => super.Prove(message, metadata, options, (error: grpc_1.ServiceError, response: ProveResponse) => {
        if (error) {
            reject(error);
        }
        else {
            resolve(response);
        }
    })); };
    ProveAsync: GrpcPromiseServiceInterface<ProveRequest, ProveAsyncResponse> = (message: ProveRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<ProveAsyncResponse> => { if (!metadata) {
        metadata = new grpc_1.Metadata;
    } if (!options) {
        options = {};
    } return new Promise((resolve, reject) => super.ProveAsync(message, metadata, options, (error: grpc_1.ServiceError, response: ProveAsyncResponse) => {
        if (error) {
            reject(error);
        }
        else {
            resolve(response);
        }
    })); };
    GetProof: GrpcPromiseServiceInterface<GetProofRequest, GetProofResponse> = (message: GetProofRequest, metadata?: grpc_1.Metadata | grpc_1.CallOptions, options?: grpc_1.CallOptions): Promise<GetProofResponse> => { if (!metadata) {
        metadata = new grpc_1.Metadata;
    } if (!options) {
        options = {};
    } return new Promise((resolve, reject) => super.GetProof(message, metadata, options, (error: grpc_1.ServiceError, response: GetProofResponse) => {
        if (error) {
            reject(error);
        }
        else {
            resolve(response);
        }
    })); };
}
