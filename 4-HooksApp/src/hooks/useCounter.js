import { useState } from 'react';

export const useCounter = initialValue => {
    const [counter, setCounter] = useState(initialValue);

    const incrementCount = () => {
        setCounter(counter + 1);
    };

    const decrementCount = () => {
        if (counter === 0) return;
        setCounter(counter - 1);
    };

    const resetCount = () => {
        setCounter(initialValue);
    };

    return {
        counter,
        incrementCount,
        decrementCount,
        resetCount,
    };
};
