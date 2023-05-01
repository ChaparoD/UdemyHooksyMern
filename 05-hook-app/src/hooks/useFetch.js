import { useEffect, useState } from 'react'

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data = await resp.json();
        console.log(data);

        setState({
            data: data,
            isLoading: false,
            hasError: null,
        })

    }

    useEffect(() => {
        getFetch();
        //recordar que el return cierra la instancia, acá queremos que el useFetch quede atento a cambios de url
        
    }, [url])
    


  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError,

  };
}
