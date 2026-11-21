export type partType = {
    parts: {
        text: string;
        thoughtSignature?: string;
    }[];
    role?: string;
}

export type GeminiRequestType = { contents: partType[] };

export type GeminiResponseType = {
    candidates: ({ content: partType } & {
        finishReason?: string;
        index?: number;
    })[];
}