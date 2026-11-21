import { API_TIMEOUT, GEMINI_API_ENDPOINT } from "../network/config";
import { getGeminiHeaders } from "../network/headers";

export const geminiPostRequest = async<TRequest, TResponse>(payload: TRequest, signal?: AbortSignal): Promise<TResponse> => {
    const res = await fetch(GEMINI_API_ENDPOINT, {
        method: 'POST',
        headers: getGeminiHeaders(),
        signal: signal ? AbortSignal.any([AbortSignal.timeout(API_TIMEOUT), signal]) : AbortSignal.timeout(API_TIMEOUT),
        body: JSON.stringify(payload)
    });
    if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
    }
    return res.json() as Promise<TResponse>;
}