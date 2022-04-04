

const personajes = ["tony hawk", "will smith", "jhon lenon"];
const [,,p2] = personajes;
console.log(p2);


const retornaArreglo = () => {
    return [ "ABC", 123]
}
console.log(retornaArreglo());
const [letras, num ] = retornaArreglo();
console.log(letras, num);

const usecopiaState = (valor) => {
    return [valor, () =>{console.log("HOla mundo")}]
};

const [nombre, setNombre] = usecopiaState('Goku');

console.log(nombre);
