export const baseHeaders = {
    'Content-Type': 'application/json',
    'Accept': '*/*'
}

export const getGeminiHeaders = () => {
    return {
        ...baseHeaders,
        'X-goog-api-key': process.env.EXPO_PUBLIC_GEMINI_API_KEY ?? ''
    }
}