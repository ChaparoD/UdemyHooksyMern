import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'chaper',
        email: 'chap@gmail.com'
    })

    const {username, email} = formState;

    const onInputChange = ({target}) => {
        //name es el nombre del input, value es el valor del input final. 
        //Es decir, aqui directamente no estoy cambiando el formState, solo lo desempaqueto.
        //pero con reacciones indep. con useEffect podemos gatillar la act del useFormState
        const { name, value } = target; //acá actualizamos el formState, pq en input tenemos value ={username}
        setFormState({
            ...formState,
            [name]:value
        });
    }

    //recibe funcion como argumento e internamente tiene un callback  
    //tiene dependecias (2ndo arg), cuando estas cambian se corre la funcion (1er arg)
    //arreglo de dep vacios, significa q solo se ejecuta 1 vez (al cargar pag)
    //recomendado de react; dividir efectos segundarios. 
    useEffect( ()=> {
        console.log('llamado a useEffect');
    }, []);  

    useEffect( ()=> {
        console.log('formState Cambió');
    }, [formState]);  

    useEffect( ()=> {
        console.log('email Cambió');
    }, [email]); 


    

  return (
    <>
            <h1>Formulario Simple</h1>
            <hr/>

            <input
                type = "text"
                className="form-control"
                placeholder="Username"
                name = "username"
                value = {username}
                onChange={onInputChange}
            />

            <input
                type = "text"
                className="form-control mt-2"
                placeholder="chap@gmail.com"
                name = "email"
                value = { email}
                onChange={onInputChange}

            />
            {
                (username === 'chaper2' ) && <Message/>
            }


    </>
    
  )
}
