const { render, screen, fireEvent } = require("@testing-library/react");
const { MultipleCustomHooks } = require("../../03-examples");
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';


jest.mock('../../hooks/useFetch');
jest.mock('../../hooks/useCounter');


describe('probando el MultipleCustomHooks', () => {

    const mockIncrement  = jest.fn();

    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    });


    test('debe de retornar el valor por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        expect( screen.getByText('Loading...') );
        expect( screen.getByText('BreakingBad Quotes') );

        const nextButton = screen.getByRole('button', { name: 'Next quote' });

        expect( nextButton.disabled).toBeTruthy();  
    });

    test('debe de mostrar un quote', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'emiliano', quote: 'tu vieja en tanga' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        expect( screen.getByText('tu vieja en tanga') ).toBeTruthy();
        expect( screen.getByText('emiliano') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeFalsy();

    });

    test('debe de llamar la funcion incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'emiliano', quote: 'tu vieja en tanga' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );
        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click(nextButton);

        expect( mockIncrement ).toHaveBeenCalled();

    });


});