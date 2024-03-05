import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../09-useContext/context/userContext";
import { LoginPage } from "../../09-useContext/LoginPage";

describe('probando el LoginPage', () => {
    const user = {
        id: 1,
        name: 'Emiliano',
        email: 'emiliiano@gmail.com'
    }

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null }}> 
                <LoginPage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pra');
        expect( preTag.innerHTML).toBe( 'null' );

    });

    test('debe de llamar el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render(
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}> 
                <LoginPage />
            </UserContext.Provider>
        );

        const addButton = screen.getByRole('button');
        fireEvent.click(addButton);

        // expect( addButton.innerHTML).toHaveBeenCalledWith(`${user.id}`)
        // expect( addButton.innerHTML).toHaveBeenCalledWith(`${user.name}`)
        // expect( addButton.innerHTML).toHaveBeenCalledWith(`${user.email}`)
        expect( setUserMock ).toHaveBeenCalledWith({"email": "juan@gmail.com", "id": 123, "name": "juan"})



    })
});