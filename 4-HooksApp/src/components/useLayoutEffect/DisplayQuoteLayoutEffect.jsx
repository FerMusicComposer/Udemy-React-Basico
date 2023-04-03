import React, { useLayoutEffect, useRef, useState } from 'react';

const DisplayQuoteLayoutEffect = ({ quote, author }) => {
    const pRef = useRef();
    const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { height, width } = pRef.current.getBoundingClientRect();
        setBoxSize({ height, width });
    }, [quote]);

    return (
        <blockquote style={{ display: 'flex' }}>
            <p ref={pRef}>{quote}</p>
            <footer style={{ alignSelf: 'flex-end' }}>{`-${author}`}</footer>
        </blockquote>
    );
};

export default DisplayQuoteLayoutEffect;
