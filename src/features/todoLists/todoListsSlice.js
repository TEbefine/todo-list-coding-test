import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoLists: [],
  checkedTodos: {},
};

const todoListsSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoLists: (state, action) => {
      state.todoLists.push(action.payload);
      state.checkedTodos[action.payload] = false;
    },
    removeTodoList: (state, action) => {
      state.todoLists = state.todoLists.filter(
        (todo) => todo !== action.payload
      );
    },
    toggleChecked: (state, action) => {
      const todoId = action.payload;
      if (state.checkedTodos.includes(todoId)) {
        state.checkedTodos = state.checkedTodos.filter((id) => id !== todoId);
      } else {
        state.checkedTodos.push(todoId);
      }
    },
  },
});

export const { addTodoLists, removeTodoList, toggleChecked } =
  todoListsSlice.actions;

export const selectTodoList = (state) => state.todo.todoLists;

export default todoListsSlice.reducer;
