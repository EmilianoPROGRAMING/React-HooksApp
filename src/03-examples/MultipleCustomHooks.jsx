import { useCounter, useFetch } from '../hooks/indexHooks';
import { LoadingQuote, Quote } from "./index";


export const MultipleCustomHooks = () => {

  const {counter, increment} = useCounter(1);
  const {data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
  const { author, quote} = !!data && data[0];
 
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
           isLoading
               ? <LoadingQuote />
               : <Quote author={author} quote={quote}/>
        }

        <button 
          className="btn btn-primary"
          disabled={ isLoading }
          onClick={ () => increment() }>
              Next quote 
        </button>

    </>
  )
}
