const nombre = "Fernando";
const apellido = "tribiño";

//const completo = nombre + " " + apellido
const completo = `Hola cabros soy ${nombre} ${apellido}`;
//poner  `` esas comillas para agregar variables
// de esta forma los espacios y enteros son 
// contabilizados directamente
console.log(completo);

function getSaludo(){
    return 'Hola Mundo, Soy ' + nombre+" "+ apellido;
}

console.log(`Este texto imprime ${getSaludo()}`);