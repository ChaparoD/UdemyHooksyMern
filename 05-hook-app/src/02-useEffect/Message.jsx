import { useEffect, useState } from "react"

export const Message = () => {
  
    const [coords, setCoords] = useState({x:0, y:0});

    useEffect( () => {
        //se llama cuando comienza a existir
        //console.log('Message mounted')

        const onMouseMove = ({x, y}) => {
            //const coords = { x, y };
            //console.log(coords);
            setCoords({x, y});
        }
        window.addEventListener( 'mousemove', onMouseMove);
        //se llama al return cuando deja de existir el componente
        return () => {
            //console.log('Message unmounted')
            window.removeEventListener( 'mousemove', onMouseMove);
            //clave apagar listeners al eliminar componente, sino hay colapso de memoria, peor aun si existe
            //variables del componente ligadas a este. 
        }
    }, []);
  
    return (

    <>
        <h3> Usuario ya existe !</h3>
        {JSON.stringify(coords)}
    </>
  )
}
