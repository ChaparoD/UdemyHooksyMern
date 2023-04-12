import { getGifs } from "../helpers/getGifs";
import { useState, useEffect } from 'react';

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);

    };
  

    // getGifs se exporta como helper (igual a a dejarla afuera pero + ordenado) evitar renderiza  muchas veces
    useEffect(() => {
        getImages(); 
    }, [ ])

    return {
        images,
        isLoading
    }
}
