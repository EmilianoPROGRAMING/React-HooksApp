import { useState } from "react"



    export const useCounter = ( initialValue = 10) => {

        const [counter, setcounter] = useState( initialValue )

        const increment = (value) => {
            setcounter( counter + value );
        }

        const reset = () => {
            setcounter( initialValue );

        }

        const decrement = (value) => {

            setcounter( counter - value );

        }
    


    return {
        counter,
        increment,
        reset,
        decrement
    }

}
