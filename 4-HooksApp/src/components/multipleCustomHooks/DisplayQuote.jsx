import React from 'react';

const DisplayQuote = ({ quote, author }) => {
    return (
        <blockquote>
            <p>{quote}</p>
            <footer>{`-${author}`}</footer>
        </blockquote>
    );
};

export default DisplayQuote;
