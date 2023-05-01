import { useCounter } from '../hooks'
import { useState, useMemo } from 'react';

const heavyStuff = (iterations = 100) => {
    for(let i = 0; i < iterations; i++){
        console.log('ahi vamos');
    }

    return `${iterations} iteraciones realizadas`
}


export const MemoHook = () => {

    //ahora usamos useMemo para no volver a renderizar heavy Stuff, cuando existen
    //acciones en un un componente externo. 

    const {counter, increment} = useCounter(4000);
    const [show, setShow] = useState(true);

    //guarda el valor recibido por la primera variable (funcion), y se actuliza segun dep de []
    const memorizeValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <div>
        <h1> Counter: <small> { counter }</small> </h1>
        <hr></hr>
        <h4>{memorizeValue}</h4>
        <button
            className='btn btn-primary'
            onClick={ () => increment() }
        >
            +1
        </button>
        <button
            className='btn btn-outline-primary'
            onClick={ () => setShow(!show) }
        >
            hide/show {JSON.stringify(show)}
        </button>
    </div>
  )
}
