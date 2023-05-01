import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {

    const {formState, onInputChange, onResetForm, username, email, password} = useForm({
        username: '',
        email: '',
        password: '',
    });
    //const {username, email, password} = formState; los importamos al desempaquetarlos en el return del customhook useForm


    

  return (
    <>
            <h1>Formulario con Custom Hook</h1>
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
            <input
                type = "text"
                className="form-control mt-2"
                placeholder="contraseña"
                name = "password"
                value = { password}
                onChange={onInputChange}

            />
            
            <button className="btn btn-primary mt-2" onClick={onResetForm}> Borrar </button>


    </>
    
  )
}
