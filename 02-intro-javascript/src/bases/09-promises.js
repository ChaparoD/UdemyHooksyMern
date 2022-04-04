import { getHeroeById } from './bases/08-import-export'
// son asincronas 
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
       //resolve()
       const p1 = getHeroeById(15);
       //console.log(heroe);
       resolve(p1);
    }, 2000)
});

// promesa.then((heroe)=> {
//     console.log('Heore', heroe.id);
// })
// .catch(err => console.warn(err));

const getHeroeByIdAync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           //resolve()
           const p1 = getHeroeById(id);
           //console.log(heroe);
           if (p1){
            resolve(p1);
           } else {
               reject( 'No se pudo encontrar heroe')
           }
           
        }, 2000)
    })
};

getHeroeByIdAync(4)
    .then(console.log)
    .catch( err => console.warn(err));

