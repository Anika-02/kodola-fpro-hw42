import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, fetchTodos, removeCompletedTodos, toggleSelectAll } from '../../store/todoSlice';
import Todo from './todoList';
import './todo-list.css';

const TodoApp = () => {
    const dispatch = useDispatch();
    const { loading, error, todoArray } = useSelector(state => state.todos);
    const [newTodo, setNewTodo] = useState('');
    const selectAll = useSelector(state => state.todos.selectAll);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const addNewTodo = async () => {
        if (newTodo.trim() !== '') {
            await dispatch(addTodo(newTodo));
            setNewTodo('');
        }
    };


    const handleRemoveCompleted = () => {
        dispatch(removeCompletedTodos());
    };

    const handleToggleSelectAll = () => {
        dispatch(toggleSelectAll());
    };

    return (
        <div className='main-wrapper'>
            <h1 className='heading'>Todo List</h1>
            <div className='input-container'>
                <input
                    type="text"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                    placeholder="Enter a new todo"
                    className='input-field'
                />
                <button onClick={addNewTodo}>➕</button>
                <button onClick={handleRemoveCompleted}>Delete Selected</button>
                <div className='select-all'>
                    <input
                        type='checkbox'
                        className='checkbox-stl'
                        checked={selectAll}
                        onChange={handleToggleSelectAll}
                    />
                    <span className='todo-text'>Select All</span>
                </div>
            </div>
            {loading && <h3>Loading....</h3>}
            {error && <h3>{error}</h3>}

            <div className='todo-container'>
                {todoArray.map((todo) => (
                    <Todo key={todo.id} todo={todo} />
                ))}
            </div>
        </div>
    );
};

export default TodoApp;