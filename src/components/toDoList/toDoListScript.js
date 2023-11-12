import React, { useState } from 'react';
import './todoliststyle.css';

const ToDoScript = () => {
    const [todoItem, setToDo] = useState([
        { text: 'To drink coffee', status: true },
        { text: 'Wash the floors', status: false },
        { text: 'Do exercises', status: true }
    ]);
    const [todoText, setToDoText] = useState('');

    const addToDo = () => {
        if (todoText.trim() !== '') {
            setToDo((prevToDoList) => [...prevToDoList, { text: todoText, status: false }]);
            setToDoText('');
        }
    };

    const deleteToDo = (index) => {
        setToDo((prevToDoList) => {
            const updatedToDoList = [...prevToDoList];
            updatedToDoList.splice(index, 1);
            return updatedToDoList;
        });
    };

    const changeToDoState = (index) => {
        setToDo((prevToDoList) => {
            const updatedToDoList = [...prevToDoList];
            const todoToNewList = { ...updatedToDoList[index] };
            if (todoToNewList) {
                todoToNewList.status = !todoToNewList.status;
                updatedToDoList[index] = todoToNewList;
            }
            return updatedToDoList;
        });
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
            </div>
            <div className='todo-container'>
                {todoItem.map((item, index) => (
                    <div className='todo-item' key={index}>
                        <input
                            type='checkbox'
                            className='checkbox-stl'
                            checked={item.status}
                            onChange={() => changeToDoState(index)}
                        />
                        <span style={{ textDecoration: item.status ? 'line-through' : 'none' }}>{item.text}</span>
                        <span className='delete-btn' onClick={() => deleteToDo(index)}>✖️</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ToDoScript;
