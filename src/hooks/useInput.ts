import { useState } from 'react';

export const useInput = () => {
    const [value, setValue] = useState('');

    const handleChange = (input: string) => {
        setValue(input);
    }

    return { value, handleChange };
}