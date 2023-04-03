import React from 'react';
import { useForm } from '../../hooks';

const TodoInput = ({ onAddNewTodo }) => {
    const { description, onInputChange, onSubmit } = useForm({
        description: '',
    });

    const handleFormData = () => {
        if (description.length <= 1) return;

        const newTodo = {
            id: new Date().getTime(),
            description,
            done: false,
        };

        onAddNewTodo(newTodo);
    };

    return (
        <form className="todoForm" onSubmit={event => onSubmit(event, handleFormData)}>
            <input
                className="todoInput"
                placeholder="What do you need to do?"
                type="text"
                name="description"
                value={description}
                onChange={onInputChange}
            />
            <button className="todoAddBtn">Add Todo</button>
        </form>
    );
};

export default TodoInput;
