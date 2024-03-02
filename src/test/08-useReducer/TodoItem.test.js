const { render, screen, fireEvent } = require("@testing-library/react");
const { TodoItem } = require("../../08-useReducer/TodoItem");

describe('probando el TodoItem', () => {

    const todo = {
        id: 1,
        description: 'piedra del Alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('debe de mostrar el todo pendiente de completar', () => {

        render(
            <TodoItem
            todo={ todo }
            onToggleTodoMock={onToggleTodoMock}
            onDeleteTodoMock={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe("list-group-item d-flex justify-content-between");

        const spanElement =  screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center')
        expect( spanElement.className ).not.toContain('text-decoration-line-through');
    });

    test('debe de mostrar el todo completado', () => {
        todo.done = true;

        render(
            <TodoItem
            todo={ todo }
            onToggleTodoMock={onToggleTodoMock}
            onDeleteTodoMock={onDeleteTodoMock}
            />
        );

        const spanElement =  screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through');

    });

    test('span debe de llamar al ToggleTodo cuando se hace click', () => {

        render(
            <TodoItem
            todo={ todo }
            onToggleTodoMock={ onToggleTodoMock }
            onDeleteTodoMock={ onDeleteTodoMock }
            />
        );

        screen.debug();

        const spanElement =  screen.getByLabelText('span');
        // fireEvent.click( spanElement );

        // expect( onToggleTodoMock ).toHaveBeenCalledWith(todo.id);

        

    });
})