import { useFetch, useCounter } from "../hooks"
import { LoadingQuote , Quote} from "./";


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter(1);

    const {data, isLoading, hasError} = useFetch(`https://rickandmortyapi.com/api/character/${counter}`);
    const {name, status} = !!data && data; // !null pasa a true, !!null = false, asi trabajo con null

    


  return (
    <>
        <h1> Breaking Bad Quotes </h1>
        <hr/>
        {
          (isLoading) ? (
            <LoadingQuote/>
          ):(
            <Quote status={status} name={name} />
          )
        }
          <button className="btn btn-primary" 
          onClick={() => increment()}
          disabled={isLoading}>
            Nex Character

          </button>
        

        

        






    </>
  )
}
