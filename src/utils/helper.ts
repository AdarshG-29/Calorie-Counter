import { GeminiResponseType } from "@/services/types/geminiApiTypes";

export const extractGeminiResponseText = (res: GeminiResponseType): string | null=> {
        const contentParts = res?.candidates?.[0]?.content?.parts ?? null;
        return contentParts ? contentParts.map((part) => part?.text ?? null).join('') : null;
}