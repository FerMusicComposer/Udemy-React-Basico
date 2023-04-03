import React, { useRef } from 'react';

const FocusScreen = () => {
    const inputRef = useRef();

    const onBtnCLick = () => {
        inputRef.current.select();
    };
    return (
        <div className="item5">
            <h2>Focus Screen</h2>
            <hr />

            <input ref={inputRef} type="text" placeholder="Type your name" />

            <button className="btn" onClick={onBtnCLick}>
                Set Focus
            </button>
        </div>
    );
};

export default FocusScreen;
