import { act, renderHook } from "@testing-library/react";
import { useForm } from "../../hooks/useForm";

describe('Probando el useForm', () => { 

    const initialForm = {
        name: 'emiliano',
        email: 'emiliano@gmail.com'
    }

    test('debe de regresar los valores por defeacto', () => {
        const { result } = renderHook( () => useForm(initialForm) );
        expect(result.current).toEqual({
                name: initialForm.name,
                email: initialForm.email,
                formState: initialForm,
                onInputChange: expect.any( Function ),
                onResetForm: expect.any( Function ),
              }) 
    });


    test('debe de cambiar el nombre del formulario', () => {
        const newValue = 'juan';

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange } = result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } });
        })


        expect(result.current.name).toBe( newValue );
        expect(result.current.formState.name).toBe( newValue );


    });

    test('debe de realizar el reset del formulario', () => {

        const newValue = 'juan';

        const { result } = renderHook( () => useForm(initialForm) );
        const { onInputChange, onResetForm } = result.current;

        act( () => {
            onInputChange({ target: { name: 'name', value: newValue } });
            onResetForm( initialForm );
        })


        expect(result.current.name).toBe( initialForm.name );
        expect(result.current.formState.name).toBe( initialForm.name );

        });

})