import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from '../../data/heroes';

describe('Heroes DB functions', () => {

    test('debe retornar heroe por id', () => {
        
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(heroe => heroe.id === id);

        expect(heroeData).toEqual(heroe);

        
    });

    test('debe retornar undefined si heroe por id no existe', () => {

    const id = 10;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find(heroe => heroe.id === id);

    expect(heroeData).toBe( undefined );

    
    });

    test('debe retornar arreglo con heroes DC', () => {

        const owner = 'DC';
        const heroes = getHeroesByOwner(owner);
    
        const heroeOwners = heroes.filter(heroe => heroe.owner === owner);
    
        expect(heroes).toEqual( heroeOwners );
    
        
    });

    test('debe retornar arreglo con heroes Marvel y check lenght 2', () => {

        const owner = 'Marvel';
        const heroes = getHeroesByOwner(owner);
        console.log(heroes);
        
        expect( heroes.length ).toBe( 2 )
    
        
    });




});