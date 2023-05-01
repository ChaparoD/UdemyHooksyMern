import { useState, useCallback } from "react"
import { ShowIncrement } from "./ShowIncrement";


export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);

    // si dejo counter como ref, se vuelve a ejecutar la funcion (por ende es nueva) y <showIncrement/>>
    // se vuelve a generar. Confuso!

    const incrementFather = useCallback(
      (value) => {
        console.log('setcounter(counter +1 )');
        setCounter((c) => c + value); //grabo procedimiento de setCounter
      },
      [],
    )
    
    // useEffect(() => {
    //   incrementFather();
    // }, [incrementFather])      lo anterior produciría un loop infinito, pero useCallback hace q no
    

    // const incrementFather = () => {
    //     setCounter(counter +1);
    // }

  return (
    <>
        <h1> useCallback hook: {counter} </h1>
        <hr />

        <ShowIncrement increment={incrementFather}/> 
    </>
  )
}
