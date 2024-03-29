import { PrepareQueryResponse, type SubmitResponse } from './data';

export async function submit(
    brevisUrl: string,
    proof: string,
    srcChainId: number,
    dstChainId: number,
): Promise<SubmitResponse> {
    // TODO
}

async function prepareQuery(url: string): Promise<PrepareQueryResponse> {
    const path = formatPath(url, '/zk/prepareQuery');
}

async function submitAppCircuitProof(url: string) Promise<SubmitAppCircuitProofResponse> {
    const path = formatPath(url, '/zk/submitAppCircuitProof');
}