import { ethers } from 'ethers';

export type CircuitDataType = 'Uint248' | 'Uint521' | 'Int248' | 'Bytes32';

export interface CircuitValue {
    type: CircuitDataType;
    data: string;
}

export function asUint248(base10: string): CircuitValue {
    ethers.getBigInt(base10); // check number validity
    return { type: 'Uint248', data: base10 };
}

export function asUint521(base10: string): CircuitValue {
    ethers.getBigInt(base10); // check number validity
    return { type: 'Uint521', data: base10 };
}

export function asInt248(base10: string): CircuitValue {
    ethers.getBigInt(base10); // check number validity
    return { type: 'Int248', data: base10 };
}

export function asBytes32(bytes32: string): CircuitValue {
    if (!ethers.isHexString(bytes32)) {
        throw new Error(`value ${bytes32} is not bytes32`);
    }
    return { type: 'Bytes32', data: bytes32 };
}
