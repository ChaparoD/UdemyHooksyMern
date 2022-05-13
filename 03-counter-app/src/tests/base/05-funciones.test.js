import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";


describe('Testing 05-Functions ', () => {

    test('getUser Debe retorna un objeto', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

         const user = getUser();
         console.log(user);

        //  expect(user).toBe(userTest);
         // Evaluacion muy básica {} === {} : false
         // toEqual nos evalua attr a attr
         expect(user).toEqual(userTest);
        
     }); 

     test('getUserActivo Debe retorna un objeto =', () => {
        
        const userTest = {
            uid: 'ABC567',
            username: 'Byron'
        }

        const user = getUsuarioActivo('Byron');
        console.log(user);

        //  expect(user).toBe(userTest);
         // Evaluacion muy básica {} === {} : false
         // toEqual nos evalua attr a attr
         expect(user).toEqual(userTest);
        
     })

});