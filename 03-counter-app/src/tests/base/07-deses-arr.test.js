import { retornaArreglo } from "../../base-pruebas/07-deses-arr"


describe('Pruebas en desestructuracion', () => {
    
    test('debe retornar string y numero', () => { 
        // const arr = retornaArreglo();

        // expect( arr ).toEqual(["ABC", 123])

        const [ letras, numeros] = retornaArreglo();
        console.log(typeof letras);

        expect(letras ).toEqual("ABC")
        expect(typeof letras ).toEqual("string")
        expect(typeof numeros ).toEqual("number")

     })    
    
})