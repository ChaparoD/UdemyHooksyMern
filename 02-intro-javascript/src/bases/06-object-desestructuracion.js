
//Desestructuracion


const persona = {
    nombre: "tony ", 
    edad: 123,
    clave: "12fg6"
}

const persona2 = {
    nombre: "tony 2 ", 
    edad: 134,
    clave: "1254g6"
}
//const {nombre, edad, clave} = persona;

// console.log(nombre);
// console.log(persona.edad);
// console.log(persona.clave);
// console.log(edad);

const returnUser = ({nombre, edad, clave, rango = "crack"}) => {
    //const {nombre, edad, clave} = usuario;
    //console.log([nombre, edad, rango]
    return { 
        nombreClave: clave,
        anos: edad,
        latlon: {
            lat: 123412.56,
            lon: 12341.134652
        }
    }
};

const {nombreClave, anos, latlon, latlon:{lat, lon}} =returnUser(persona2);

console.log(nombreClave, anos, latlon, lon);
