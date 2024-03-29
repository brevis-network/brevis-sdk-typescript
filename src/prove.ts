import { type ProofRequest, type ProofResponse } from './data';

export async function prove(
    proverUrl: string,
    request: ProofRequest,
): Promise<ProofResponse> {
    const url = formatPath(proverUrl, '/internal/prove');
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(request),
    });
    if (!res.ok) {
        throw new Error(
            `prover service returned with status ${res.status} ${res.statusText}`,
        );
    }
    const body = (await res.json()) as ProofResponse;
    if (!body.success) {
        throw new Error(`prover service returned error: ${body.message}`);
    }

    return body;
}

function formatPath(url: string, path: string): string {
    let res = url;
    if (res.charAt(url.length - 1) === '/') {
        res = res.substring(0, url.length - 1);
    }
    return res + path;
}
