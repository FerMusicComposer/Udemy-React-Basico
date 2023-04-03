import React from 'react';
import { useCounter } from '../../hooks/useCounter';

const CounterWithCustomHook = () => {
    const { counter, incrementCount, decrementCount, resetCount } = useCounter(0);

    return (
        <div className="item2">
            <h3>Counter With Custom Hook</h3>
            <p>{counter}</p>
            <hr />
            <button className="btn" onClick={incrementCount}>
                +1
            </button>
            <button className="btn" onClick={decrementCount}>
                -1
            </button>

            <button className="btn" onClick={resetCount}>
                Reset
            </button>
        </div>
    );
};

export default CounterWithCustomHook;
