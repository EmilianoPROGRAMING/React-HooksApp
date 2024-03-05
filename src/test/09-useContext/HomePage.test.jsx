import { render, screen } from "@testing-library/react"
import { UserContext } from "../../09-useContext/context/userContext"
import { HomePage } from "../../09-useContext/HomePage"

describe('probando el HomePage', () => {

    const user = {
        id: 1,
        name: 'Emiliano',
    }

    test('debe de mostrar el componente sin el usuario', () => {

        render(
            <UserContext.Provider value={{ user: null}}> 
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML).toBe( 'null');
    });

    test('debe de mostrar el componente CON el usuario', () => {

        render(
            <UserContext.Provider value={{ user }}> 
                <HomePage />
            </UserContext.Provider>
        );

        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML).toContain( user.name );
        expect( preTag.innerHTML).toContain(`${user.id}`);

    });
});