import { useRef } from "react"

export const FocusScreen = () => {
    //se inicializa como undefined, podemos mantener de todo para referenciar
    const inputRef= useRef();
    console.log(inputRef);

    const onClick = () => {
        //document.querySelector('input').focus();
        //console.log(inputRef);
        inputRef.current.select();
    }


  return (
    <>
        <h1> Focus Screen</h1>
        <hr/>

        <input
            ref={ inputRef }
            type="text"
            placeholder='ingrese su nombre'
            className="form-control"
        />
        <button
            className="btn btn-primary mt-2"
            onClick={onClick}
        
            >    
        Set Focus
        </button>
            
    
    </>
  )
}
