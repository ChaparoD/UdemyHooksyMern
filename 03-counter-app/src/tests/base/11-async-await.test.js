import { getImagen }  from '../../base-pruebas/11-async-await'


describe('Testing Async Api request', () => { 

    test('Retornar url de la imagen', async() => {

        const url = await getImagen();
        console.log(url);
        expect(url.includes('https')).toBe(true);


    })



 })