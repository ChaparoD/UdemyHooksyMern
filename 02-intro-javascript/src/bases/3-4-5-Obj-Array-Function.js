

const persona = {
    nombre: "Dan",
    apellido : "Chap",
    edad: 56,
    direccion: {
        ciudad: "stgo",
        east: 3245.544 ,
        west: 12351.56
    }

};
//.table para ver objeto como tabla
/*
const persona2 = {...persona}; //reservo clon
persona2.nombre = "Doble"
console.log(persona);
console.table(persona2);
console.table(persona);

*/

//const arreglo = new Array(100);
const arreglo = [1,2,3,4];
arreglo.push(125); //modifica principal


let arreglo2 = [ ...arreglo, 6];

const arreglo3 = arreglo2.map(function(x){
    return x **2;

});
console.log(arreglo2);
console.log(arreglo3);


/// FUNCIONES

function saludar(nombre){
    return `me llamo ${nombre}`;

};

const saludar2 = function(x){
    return `saludo ${x*4}`;
}

const saludar3 = (x) => {
    return`saludoooss3 ${x*10}`;
};
//flecha, muy usado
console.log(saludar("wenaa"));
console.log(saludar2(3));
console.log(saludar3(24));

const getUser = (nombre) => {
     return  {
        uid : "3214",
        userName : nombre
     }  
};

function getUserActivo(nombre) {
    return  {
        uid : "3214",
        userName : nombre
     }  
};

console.log(getUser());
let user = getUser("pedro");
let user3 = getUserActivo("nigel");
console.log(user);
console.log(user3);