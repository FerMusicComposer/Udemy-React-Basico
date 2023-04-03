import React from 'react';
import Child from './Child';
import ResetCounter from '../useMemo/ResetCounter';
import { useState, useCallback } from 'react';

const Parent = () => {
    const numbers = [2, 4, 6, 8, 10];
    const [value, setValue] = useState(0);

    const onIncrement = useCallback(num => {
        setValue(prevValue => prevValue + num);
    }, []);
    const onReset = useCallback(() => {
        setValue(prevValue => prevValue - prevValue);
    }, []);
    // const onIncrement = num => {
    //     setValue(value + num);
    // };

    return (
        <div className="item9">
            <h3>Memo Homework Parent Component</h3>
            <p> Total: {value} </p>

            <hr />

            {numbers.map((number, index) => (
                <Child key={`${index}-${number}`} number={number} increment={onIncrement} />
            ))}
            {/* <Child /> */}
            <ResetCounter reset={onReset} />
        </div>
    );
};

export default Parent;
