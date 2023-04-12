import React from 'react';
import { render } from '@testing-library/react';
import  PrimeraApp  from '../PrimeraApp';


describe('', () => { 

    test('debe mostrar el mensaje , "Lo logramos"', () => { 
        
        const saludo = "Lo logramos";

        const {getByText} = render(<PrimeraApp saludo={ saludo }/> );
        //Hay otras formas de validar datos mejor (Enzine) pero luego actualizaran render
        
        expect(getByText(saludo).toBeInTheDocument());    
        //To be in document no es una funtionc, hay que crear archive stuptest
        // en la carpeta test y estos se importaran para todos los test
    })

 })