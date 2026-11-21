export enum GEMINI_MODELS {
    GEMINI_FLASH_3_LITE = 'gemini-3.5-flash-lite',
    GEMINI_FLASH_2_LITE = 'gemini-2.5-flash-lite'
}
export enum GEMINI_CONTENT {
    GENERATE_CONTENT = 'generateContent',
    STREAM_GENERATE_CONTENT = 'streamGenerateContent'
}

export const API_TIMEOUT = 30000;

export const NETWORK_CONFIG = {
    GEMINI_BASE_URL: 'https://generativelanguage.googleapis.com/v1beta',
};

export const GEMINI_API_ENDPOINT = `${NETWORK_CONFIG.GEMINI_BASE_URL}/models/${GEMINI_MODELS.GEMINI_FLASH_3_LITE}:${GEMINI_CONTENT.GENERATE_CONTENT}`;