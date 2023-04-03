import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { useTodos } from '../../hooks';

const TodoApp = () => {
    const { todos, todosCount, todosPending, onAddNewTodo, onDeleteTodo, onCompletedTodo } = useTodos();

    return (
        <div className="todoApp">
            <h2 className="todoAppHeader">Todo App</h2>
            <h3 className="todoAppSubheader">
                Total: {todosCount} - Pending: {todosPending}
            </h3>

            <TodoInput onAddNewTodo={onAddNewTodo} />

            <TodoList todos={todos} onDeleteTodo={onDeleteTodo} onCompletedTodo={onCompletedTodo} />
        </div>
    );
};

export default TodoApp;
