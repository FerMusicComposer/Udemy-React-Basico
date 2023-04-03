import React from 'react';
import GifItem from './GifItem';
import { useFetchGif } from '../hooks';

const GifGrid = ({ category }) => {
    //Custom hook that includes all the logic to consume the GIFs API
    const { gifs, isLoading } = useFetchGif(category);

    return (
        <>
            <h3>{category}</h3>

            {isLoading && <h2>Loading...</h2>}

            <div className="card-grid">
                {gifs.map(gif => (
                    <GifItem key={gif.id} {...gif} />
                ))}
            </div>
        </>
    );
};

export default GifGrid;
