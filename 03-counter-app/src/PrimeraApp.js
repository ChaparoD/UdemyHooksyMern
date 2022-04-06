// Functional components
import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';




const PrimeraApp = ( {saludo, subtitulo } ) => {


    return (
        <>
            <h1> { saludo  } </h1>
             <p>  { subtitulo } </p>
        </>
    );

};

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
};

PrimeraApp.defaultProps = {
    subtitulo: "por defecto defaultprops"
}

export default PrimeraApp;