import React from 'react';

const ShowIncrement = React.memo(({ increment }) => {
    console.log('I just rendered again :(');
    return (
        <button
            className="btn"
            onClick={() => {
                increment();
            }}
        >
            Increment
        </button>
    );
});

export default ShowIncrement;
