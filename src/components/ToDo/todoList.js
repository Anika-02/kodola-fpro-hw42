import {useDispatch} from 'react-redux';

import {removeTodo, toggleTodo} from '../../store/todoSlice';

const Todo = ({ todo, index }) => {
    const dispatch = useDispatch();
    const handleRemove = (e) => {
        e.stopPropagation();
        dispatch(removeTodo(todo.id));
    };

    const toggleSelectedTodo = () => {
        dispatch(toggleTodo(todo.id));
    };

    return (
        <div className='todo-item'>
            <input
                type='checkbox'
                className='checkbox-stl'
                checked={todo.completed}
                onChange={toggleSelectedTodo}
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.task}
      </span>
            <span className='delete-btn' onClick={handleRemove}>
        ✖️
      </span>
        </div>
    );
};

export default Todo;