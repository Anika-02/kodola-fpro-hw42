import React from 'react';

const TodoItem = ({ item, index, toggleToDo, deleteToDo }) => {
    return (
        <div className='todo-item'>
            <input
                type='checkbox'
                className='checkbox-stl'
                checked={item.status}
                onChange={() => toggleToDo(index)}
            />
            <span className={`todo-text ${item.status ? 'completed' : ''}`}>
                {item.text}
            </span>
            <span className='delete-btn' onClick={() => deleteToDo(index)}>
                ✖️
            </span>
        </div>
    );
};

export default TodoItem;
