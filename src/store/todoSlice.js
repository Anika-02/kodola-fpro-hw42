import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk(
    'todos/fetchTodos',
    async function (_, { rejectWithValue }) {
        try {
            const response = await fetch('https://656d0359e1e03bfd572ee992.mockapi.io/todo/todo');

            console.log(response);

            const data = await response.json();
            console.log(data);

            if (!response.ok) {
                throw new Error('Something went wrong....');
            }

            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todoArray: [],
        loading: false,
        error: null,
        selectAll: false,
    },
    reducers: {
        addTodo(state, action) {
            state.todoArray.push({ task: action.payload, completed: false });
        },
        removeTodo(state, action) {
            const idToRemove = action.payload;
            state.todoArray = state.todoArray.filter((todo) => todo.id !== idToRemove);
        },
        toggleTodo(state, action) {
            const idToToggle = action.payload;
            state.todoArray = state.todoArray.map((todo) =>
                todo.id === idToToggle ? { ...todo, completed: !todo.completed } : todo
            );
        },
        removeCompletedTodos(state) {
            state.todoArray = state.todoArray.filter((todo) => !todo.completed);
        },
        toggleSelectAll(state) {
            state.selectAll = !state.selectAll;
            state.todoArray = state.todoArray.map((todo) => ({ ...todo, completed: state.selectAll }));
        },
    },
    extraReducers: {
        [fetchTodos.pending]: (state, action) => {
            console.log(action);
            state.loading = true;
        },
        [fetchTodos.fulfilled]: (state, action) => {
            console.log(action.payload);
            state.todoArray = action.payload;
            state.loading = false;
            state.selectAll = false;
        },
        [fetchTodos.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { addTodo, removeTodo, toggleTodo, removeCompletedTodos, toggleSelectAll } =
    todoSlice.actions;

export default todoSlice.reducer;
