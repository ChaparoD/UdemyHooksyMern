import React from 'react'
import { useState } from 'react';

export const AddCategory = ( {onNewCategory} ) => {

    const [ inputValue, setInputValue ] = useState('');

    const onInputChange = ({target}) => {
        // console.log(target.value)  event.target , en props de funcion desestructuramos el target.
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {
        event.preventDefault(); //detener la recarga de la pag (Auto de onSubmit)
        //console.log(inputValue);
        if (inputValue.trim().length <= 1) return;
        //setCategories( categories =>[ inputValue, ...categories]); 
        //usamos info del padre, y actualizamos, abajo solo mandamos nuevo valor y se actualiza en el padre
        onNewCategory( inputValue.trim() ); //.trim = > 1, solo mando el nuevo input al padre
        setInputValue('');
        
    }

    return (
        <form onSubmit={ onSubmit }> 
            <input
                type = "text"
                placeholder='buscar Gif'
                value = {inputValue}
                onChange ={ onInputChange  }
            
            />
        </form>
    )
}
