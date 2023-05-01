import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({status, name}) => {

  const pRef = useRef();
  console.log(pRef);
  const [boxSixe, setBoxSize] = useState({ width: 0, height:0})

  //se dispara luego de renderizar todos los elementos del DOM
  useLayoutEffect(() => {
    const {height, width} = pRef.current.getBoundingClientReact;
    //nose porque no me guardaba las distancias, lo define como undefined la salida del metodo de arriba
    setBoxSize({ height, width} );
  
    
  }, [status])

  return (
    <> 
  
        <blockquote 
        className="blockquote text-end"
        style = {{display:'flex'}}
        >
                <p ref={ pRef } className="mb-1" >  Status: {status} </p>
                <footer className="blockquote-footer"> {name} </footer>

        </blockquote>
        <code>{JSON.stringify(boxSixe)}</code>
    </>
    
  )
}
