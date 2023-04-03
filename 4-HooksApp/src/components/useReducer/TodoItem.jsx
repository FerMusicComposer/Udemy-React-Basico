import React from 'react';

const TodoItem = ({ todo, todoIndex, onDeleteTodo, onCompletedTodo }) => {
    return (
        <div className={`todoItem ${todo.done ? 'todoDone' : ''}`}>
            <p className="todoItemP"> {`${todoIndex + 1}.     ${todo.description}`}</p>

            <div className="todoItemBtnBox">
                <button onClick={() => onCompletedTodo(todo.id)}>done</button>
                <button onClick={() => onDeleteTodo(todo.id)}>delete</button>
                <button>edit</button>
            </div>
        </div>
    );
};

export default TodoItem;
