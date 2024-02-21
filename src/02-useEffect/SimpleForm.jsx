import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        username: 'strider',
        email: 'emilio@gmail.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [ name ]: value
        });
    }

    useEffect(() => {
    //   console.log('useEffect called');
     }, []);

     useEffect(() => {
    //    console.log('formState called!'); 
     }, [formState]);

     useEffect(() => {
        // console.log('email changed!');
     }, [email]);
    
    

  return (
    <>
        <h1>formulario simple</h1>
        <hr />

        <input
            type="text"
            className="form-control"
            placeholder="username"
            name="username"
            value={ username }
            onChange={ onInputChange }
        />

        <input
            type="text"
            className="form-control mt-2"
            placeholder="emilio@gmail.com"
            name="email"
            value={ email }
            onChange={ onInputChange }
        />
    

        {
            (username === 'strider2') && <Message />
        }

    </>
  )
}
