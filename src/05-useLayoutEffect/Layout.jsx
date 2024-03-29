import { useCounter, useFetch } from '../hooks/indexHooks';
import { Loading, Quote } from '../03-examples/index';


export const Layout = () => {

  const {counter, increment} = useCounter(1);
  const {data, isLoading, hasError } = useFetch(`https://api.breakingbadquotes.xyz/v1/quotes/${ counter }`);
  const { author, quote} = !!data && data[0];
 
  return (
    <>
        <h1>BreakingBad Quotes</h1>
        <hr />

        {
           isLoading
               ? <Loading />
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
