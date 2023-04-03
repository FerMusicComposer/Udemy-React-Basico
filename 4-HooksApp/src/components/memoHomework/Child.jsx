import React from 'react';

const Child = React.memo(({ number, increment }) => {
    console.log('  I just rendered again :(  ');

    return (
        <button className="btn" onClick={() => increment(number)}>
            {number}
        </button>
    );
});

export default Child;
