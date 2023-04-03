import React, { useState } from 'react';

const Counter = () => {
    const [state, setState] = useState({
        counter1: 1,
        counter2: 100,
        counter3: 1000,
    });

    const { counter1, counter2, counter3 } = state;

    const onIncrement = () => {
        setState({
            counter1: counter1 + 1,
            counter2: counter2 + 100,
            counter3: counter3 + 1000,
        });
    };
    const onDecrement = () => {
        setState({
            counter1: counter1 - 1,
            counter2: counter2 - 100,
            counter3: counter3 - 1000,
        });
    };

    const onReset = () => {
        setState({
            counter1: 1,
            counter2: 100,
            counter3: 1000,
        });
    };

    const onIncrementCounter2 = () => {
        setState({
            ...state,
            counter2: counter2 + 55,
        });
    };

    return (
        <div className="item">
            <h3>Counter</h3>
            <p>{counter1}</p>
            <p>{counter2}</p>
            <p>{counter3}</p>
            <hr />
            <button className="btn" onClick={onIncrement}>
                +1
            </button>
            <button className="btn" onClick={onDecrement}>
                -1
            </button>

            <button className="btn" onClick={onReset}>
                Reset
            </button>
            <button className="btn" onClick={onIncrementCounter2}>
                Counter 2 + 55
            </button>
        </div>
    );
};

export default Counter;
