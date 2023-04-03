import React from 'react';
import { DisplayQuote, LoadingQuote } from '../multipleCustomHooks';
import { useCounter, useFetch } from '../../hooks';

const MultipleCustomHooks = () => {
    const { counter, incrementCount, resetCount } = useCounter(1);
    const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
    const { data, isLoading, hasError } = useFetch(url);

    // checks if data is null or undefined, and if it isn't, takes the values from index 0
    const { author, quote } = !!data && data[0];

    return (
        <>
            <div className="bbAPI">
                <h2 className="bbHeader">Breaking Bad Quotes</h2>

                {isLoading ? <LoadingQuote /> : <DisplayQuote quote={quote} author={author} />}

                <div className="bbBtnContainer">
                    <button className="bbBtn" onClick={incrementCount} disabled={isLoading}>
                        Get Quote
                    </button>
                    <button className="bbBtn" onClick={resetCount} disabled={isLoading}>
                        Reset
                    </button>
                </div>
            </div>
        </>
    );
};

export default MultipleCustomHooks;
