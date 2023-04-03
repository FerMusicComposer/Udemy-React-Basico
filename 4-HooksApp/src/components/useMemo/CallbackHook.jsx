import React, { useCallback, useState } from 'react';
import IncrementByFive from './IncrementByFive';
import ResetCounter from './ResetCounter';
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {
    const [counter, setCounter] = useState(0);

    const onIncrement = useCallback(() => {
        setCounter(prevCount => prevCount + 1);
    }, []);

    const onReset = useCallback(() => {
        setCounter(prevCount => prevCount - prevCount);
    }, []);

    const onIncrementByFive = useCallback(value => {
        setCounter(prevCount => prevCount + value);
    }, []);

    // Using these functions as they are, triggers the rerendering of the components that call them
    // which in this case has no impact, but if such components had any heavy process running, this
    // process would be executed each time the components rerender, and this can cause serious
    // performance issues.
    // To avoid this, we call the setState functions from within a useCallback hook, and pass the
    // components functions to the React.memo() function.

    // const onIncrement = () => {
    //     setCounter(counter + 1);
    // };

    // const onReset = () => {
    //     setCounter(0);
    // };

    return (
        <div className="item8">
            <h2>useCallback Hook</h2>
            <p>{counter}</p>
            <hr />

            <ShowIncrement increment={onIncrement} />
            <ResetCounter reset={onReset} />
            <IncrementByFive incrementByFive={onIncrementByFive} />
        </div>
    );
};

export default CallbackHook;
