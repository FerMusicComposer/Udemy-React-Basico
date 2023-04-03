import React, { useState, useMemo } from 'react';
import { useCounter } from '../../hooks';

const heavyProcess = iterations => {
    for (let i = 0; i < iterations; i++) {
        console.log('iteration/s completed');
    }

    return `${iterations} iterations completed`;
};

const MemoHook = () => {
    const { counter, incrementCount, decrementCount, resetCount } = useCounter(200);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyProcess(counter), [counter]);

    return (
        <div className="item7">
            <h3>Counter With useMemo Hook</h3>
            <p>{counter}</p>
            <hr />
            <h5>{memorizedValue}</h5>
            <button className="btn" onClick={incrementCount}>
                +1
            </button>
            <button className="btn" onClick={decrementCount}>
                -1
            </button>

            <button className="btn" onClick={resetCount}>
                Reset
            </button>
            <button
                className="btn"
                onClick={() => {
                    setShow(!show);
                }}
            >
                Show/Hide: {JSON.stringify(show)}
            </button>
        </div>
    );
};

export default MemoHook;
