import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, toggleTodo, deleteCompletedTodos } from '../../store/actions';
import TodoItem from '../ToDoItem/ToDoItem';

import '../toDoList/to-do-list.css';

const ToDoScript = () => {
    const dispatch = useDispatch();
    const todoItem = useSelector((state) => state);
    const [todoText, setToDoText] = useState('');
    const [selectAll, setSelectAll] = useState(false);


    useEffect(() => {
        todoItem.forEach((item, index) => {
            if (item.status !== selectAll) {
                toggleToDo(index);
            }
        });
    }, [selectAll]);

    const addToDo = () => {
        if (todoText.trim() !== '') {
            dispatch(addTodo(todoText));
            setToDoText('');
        }
    };

    const deleteToDo = (index) => {
        dispatch(deleteTodo(index));
    };

    const toggleToDo = (index) => {
        dispatch(toggleTodo(index));
    };

    const deleteCompleted = () => {
        dispatch(deleteCompletedTodos());
    };

    const toggleSelectAll = () => {
        setSelectAll(!selectAll);
    };

    return (
        <div className='main-wrapper'>
            <div className='heading'>
                <h2>TODO LIST</h2>
            </div>
            <div className='input-container'>
                <input
                    type='text'
                    className='input-field'
                    value={todoText}
                    onChange={(event) => setToDoText(event.target.value)}
                />
                <button onClick={addToDo}>➕</button>
                <button onClick={deleteCompleted}>Delete Selected</button>
                <div className='select-all'>
                    <input
                        type='checkbox'
                        className='checkbox-stl'
                        checked={selectAll}
                        onChange={toggleSelectAll}
                    />
                    <span className='todo-text'>Select All</span>
                </div>
            </div>
            <div className='todo-container'>
                {todoItem.map((item, index) => (
                    <TodoItem
                        key={index}
                        item={item}
                        index={index}
                        toggleToDo={toggleToDo}
                        deleteToDo={deleteToDo}
                    />
                ))}
            </div>
        </div>
    );
};

export default ToDoScript;
