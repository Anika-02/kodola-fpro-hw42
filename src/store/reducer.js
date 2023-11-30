import { ADD_TODO, DELETE_TODO, TOGGLE_TODO, DELETE_COMPLETED_TODOS } from './actions';

const initialState = [
    { text: 'To drink coffee', status: true },
    { text: 'Wash the floors', status: false },
    { text: 'Do exercises', status: true },
];

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case DELETE_TODO:
            return state.filter((_, index) => index !== action.payload.index);
        case TOGGLE_TODO:
            return state.map((todo, index) =>
                index === action.payload.index
                    ? { ...todo, status: !todo.status }
                    : todo
            );
        case DELETE_COMPLETED_TODOS:
            return state.filter((todo) => !todo.status);
        default:
            return state;
    }
};

export default todoReducer;