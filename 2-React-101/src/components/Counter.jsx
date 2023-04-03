import React from 'react';
import { useState } from 'react';
import IncrementDecrementBtn from '../utilities/IncrementDecrementBtn';

const Counter = () => {
    let [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(++count);
    };

    const handleDecrement = () => {
        if (count > 0) setCount(--count);
        else count = 0;
    };

    const handleReset = () => {
        setCount(0);
    };

    return (
        <>
            <h1>{count}</h1>
            <IncrementDecrementBtn operand="add" setCount={handleIncrement} />
            <IncrementDecrementBtn operand="substract" setCount={handleDecrement} />
            <button onClick={handleReset}>Reset Count</button>
        </>
    );
};

export default Counter;
