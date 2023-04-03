import { useEffect, useReducer } from 'react';
import { todoReducer } from '../components/useReducer';

export const useTodos = () => {
    const initialState = [];

    const init = () => {
        return JSON.parse(localStorage.getItem('todos') || []);
    };

    const [todos, dispatchTodo] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const onAddNewTodo = todo => {
        const action = {
            type: '[TODO]-Add',
            payload: todo,
        };

        dispatchTodo(action);
    };

    const onDeleteTodo = todoId => {
        const action = {
            type: '[TODO]-Delete',
            payload: todoId,
        };

        dispatchTodo(action);
    };

    const onCompletedTodo = todoId => {
        const action = {
            type: '[TODO]-Done',
            payload: todoId,
        };

        dispatchTodo(action);
    };

    return {
        todos,
        todosCount: todos.length,
        todosPending: todos.filter(todo => !todo.done).length,
        onAddNewTodo,
        onDeleteTodo,
        onCompletedTodo,
    };
};
