// Variables y constantes 
// var no se usa más

const nombre = " daniel";
let valorDado = 5;
valorDado = 3;

console.log( nombre,  valorDado);

if (true){
    let valorDado = 6; //si la vuelvo a 
    //instanciar no modifico la global, sin let
    //modifico la global
    console.log(valorDado);
}

console.log( nombre,  valorDado);