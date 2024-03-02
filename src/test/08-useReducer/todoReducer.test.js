import { todoReducer } from "../../08-useReducer/todoReducer";

describe('probando el todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo todo',
        done: false,
    }];

    test('debe de regresar el estado inicial', () => {

        const newState = todoReducer( initialState, {});
        expect( newState ).toBe( initialState );
    })

    test('debe de agregar un todo', () => {

        const action = {
            type: '[TODO] add todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        };

        const newState = todoReducer( initialState, action );
        expect( newState.length ).toBe( 2 );
        expect( newState ).toContain( action.payload );    

    });

    test('debe de eliminar un todo', () => {

        const deleteAction = {
            type: '[TODO] Remove Todo',
            payload: 1    
        };

        const newState = todoReducer( initialState, deleteAction );
        expect( newState.length ).toBe( 0 );

    });

    test('debe de realizar el toggle del todo', () => {

        const changeAction = {
            type: '[TODO] Toggle Todo',
            payload: 1    
        };

        const newState = todoReducer( initialState, changeAction );
        expect( newState[0].done ).toBe( true );

    });
});