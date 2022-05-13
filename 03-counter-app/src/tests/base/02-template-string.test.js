import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas 02-template-string.js', () => {

    test('get saludo debe retornar hola fernando', () => {
        
        const nombre = "fernando"
        const saludo  = getSaludo(nombre)  
        
        expect( saludo ).toBe('Hola '+ nombre);
     });

     test(' getSaludo = hola Carlos sin attr', () => {
        
        const nombre = "fernando";
        const defecto = "Carlos";
        const saludo  = getSaludo()  ;
        
        expect( saludo ).toBe('Hola '+ defecto);
     });


});