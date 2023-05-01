import { useCounter } from '../hooks'
import { Small } from './Small';
import { useState } from 'react';


export const Memorize = () => {

    //se vuelven a cargar componentes siempre, sean o no relacionados con valores enviados al valor 
    //cambiante, entonces la idea es usar Memo, es que solo se ejecute el componente cuando sus componentes
    //cambian este lo utilizamos directamente en el componente a optimizar

    const {counter, increment} = useCounter();
    const [show, setShow] = useState(true);

  return (
    <div>
        <h1> Counter: <Small value = { counter }/> </h1>
        <hr></hr>
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
