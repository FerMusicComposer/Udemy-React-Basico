import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ todos = [], onDeleteTodo, onCompletedTodo }) => {
    return (
        <ul className="todoList">
            {todos.map((todo, index) => {
                return (
                    <TodoItem
                        key={`${index}-${todo.id}`}
                        todo={todo}
                        todoIndex={index}
                        onDeleteTodo={onDeleteTodo}
                        onCompletedTodo={onCompletedTodo}
                    />
                );
            })}
        </ul>
    );
};

export default TodoList;
