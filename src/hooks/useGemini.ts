import { geminiPostRequest } from "@/services/apis/geminiApi";
import { GeminiRequestType, GeminiResponseType } from "@/services/types/geminiApiTypes";
import { useEffect, useRef, useState } from "react";

type GeminiResultType = {
    res: GeminiResponseType | null
    error: Error | null
    isLoading: boolean;
}

export const useGemini = () => {
    const [geminiResult, setGeminiResult] = useState<GeminiResultType>({
        res: null,
        error: null,
        isLoading: false
    });
    const controllerRef = useRef<AbortController | null>(null);

    useEffect(() => {
        return () => controllerRef.current?.abort();
    }, []);

    const fetchGeminiResponse = async (text: string) => {
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;

        setGeminiResult(prev => ({ ...prev, isLoading: true }));

        const payload: GeminiRequestType = {
            contents: [{ parts: [{ text }] }]
        };
        try {
            const res = await geminiPostRequest<GeminiRequestType, GeminiResponseType>(payload, controller.signal);
            setGeminiResult({ res, error: null, isLoading: false });
        } catch (error) {
            if (error instanceof DOMException && error.name === 'AbortError') return;
            setGeminiResult({ res: null, error: error as Error, isLoading: false });
        }
    }

    return { ...geminiResult, fetchGeminiResponse };
}