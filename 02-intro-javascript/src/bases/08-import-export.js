//import { heroes} from './data/heroes'
import heroes , {owners} from '../data/heroes'

// console.log(heroes);

export const getHeroeById = (id) => { 
    return heroes.find((hero) => hero.id === id);
 };



//const heroe3 = getHeroeById(3);
// console.log(heroe3);

// const getHeroeByOwner = (owner) => { 
//     return heroes.filter((hero) => hero.owner === owner);
// };

//console.log(getHeroeByOwner('DC')


//console.log(heroes, owners);
