import React from 'react';

const ResetCounter = React.memo(({ reset }) => {
    console.log('I just rendered again :(');
    return (
        <button
            className="btn"
            onClick={() => {
                reset();
            }}
        >
            Reset Counter
        </button>
    );
});

export default ResetCounter;
