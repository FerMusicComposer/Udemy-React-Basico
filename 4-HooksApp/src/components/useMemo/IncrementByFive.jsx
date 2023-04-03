import React from 'react';

const IncrementByFive = React.memo(({ incrementByFive }) => {
    console.log('I just rendered again :(');
    return (
        <button
            className="btn"
            onClick={() => {
                incrementByFive(5);
            }}
        >
            Increment by 5
        </button>
    );
});

export default IncrementByFive;
