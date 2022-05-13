
// test y tab para bse code 
//test('should first', () => { second })

describe('Testing demo ', () => {
    //Poner "Titulo al cjto de pruebas"

    test('debe ser True', () => { 
    
        const isActive = true;
    
        if (!isActive){
            throw new Error('No está activo');
            //lanzamos error que hace que falle nuestro test
        }
    
    });
    
    test('strings deben ser iguales', () => {
            // 1. inicializacion
            const msj = 'Hola Mundo!';
            // 2. Estimulo
            const msj2 = 'Hola Mundo!';
            // 3. Observar el comportamiento
            expect(msj).toBe(msj2);
    });
    


});


