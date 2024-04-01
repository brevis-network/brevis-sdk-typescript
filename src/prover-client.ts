import { credentials } from '@grpc/grpc-js';
import { ProverClient, type ProveResponse } from '../proto/sdk/prover';
import { type ProofRequest } from './request';

export class Prover {
    private readonly client: ProverClient;

    public constructor(url: string) {
        const cred = credentials.createInsecure();
        this.client = new ProverClient(url, cred);
    }

    public async prove(request: ProofRequest): Promise<ProveResponse> {
        const res = await this.client.Prove(request.build());
        if (res.has_err) {
            throw new Error(`prover returned error: ${res.err.msg}`);
        }
        return res;
    }
}
