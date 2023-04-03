import React, { useState } from 'react';
import { useCounter } from '../../hooks';
import Paragraph from './Paragraph';

const Memorize = () => {
    const { counter, incrementCount, decrementCount, resetCount } = useCounter(0);
    const [show, setShow] = useState(true);

    return (
        <div className="item6">
            <h3>Counter With React.memo() Function</h3>
            <Paragraph value={counter} />
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

export default Memorize;
