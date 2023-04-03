import { useState, useEffect } from 'react';
import { getGifs } from '../../helpers';

export const useFetchGif = category => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getGifsData = async () => {
        const newGifs = await getGifs(category);
        setGifs(newGifs);
        setIsLoading(false);
    };

    useEffect(() => {
        getGifsData();
    }, []);
    return {
        gifs,
        isLoading,
    };
};
