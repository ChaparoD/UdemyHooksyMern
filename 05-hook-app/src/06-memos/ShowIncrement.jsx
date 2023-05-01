import React from "react";

export const ShowIncrement = React.memo(({ increment }) => {
    // se volvera a generar pq se le mandan objetos diferentes desde callBack y estos estan en != pos en 
    //memoria. podemos usar useCallback, q es similar al useMemo, pero sirve para memorizar funciones
    // es decir, volvemos a realizar funciones cuando cambien las dependencias asimiladas. 
    //sin dependencias, se genera solo una vez
    //con React.memo, guardamos la dir de esa funcion especifica. ahora en Callback debemos asegurar
    //de que la funcion no se vuelva a generar, es decir, programar un proceso a repetir
    console.log('me volvi a generar :(');
  return (
    <button
        className='btn btn-primary'
        onClick={() => { increment(5);
        }}>
            Incrementar
    </button>  
    
    )
})
