import React, { useState } from 'react';
import PropTypes from 'prop-types';



const CounterApp = ( {numero} ) => {

    const [ counter, setCounter]   = useState(numero);
    
    //handle Add counter
    const handleAdd = () => {
        setCounter(counter + 1);
        //setCounter((c) => c + 1) se necesitará cuando no tengamos el 
        //setFunction
    }
    // const handleReset = () => {
    //     setCounter(numero);
    // }
    const handleSub = () => setCounter(counter - 1);




    return (
        <>
            <h1> CounterApp </h1>
             <p>  Your number is: { counter } </p>
             <button onClick={ handleAdd }>  +1 </button>
             <button onClick={ () => {setCounter(numero)} }>  Reset </button>
             <button onClick={ handleSub}>  -1 </button>
        </>
    );

};

CounterApp.propTypes = {
    numero: PropTypes.number.isRequired
};

CounterApp.defaultProps = {
        numero: 0
}

export default CounterApp;

