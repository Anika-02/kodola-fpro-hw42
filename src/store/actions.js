export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const DELETE_COMPLETED_TODOS = 'DELETE_COMPLETED_TODOS';

export const addTodo = (text) => ({
    type: ADD_TODO,
    payload: { text, status: false },
});

export const deleteTodo = (index) => ({
    type: DELETE_TODO,
    payload: { index },
});

export const toggleTodo = (index) => ({
    type: TOGGLE_TODO,
    payload: { index },
});

export const deleteCompletedTodos = () => ({
    type: DELETE_COMPLETED_TODOS,
});