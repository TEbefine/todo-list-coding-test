import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoListsSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoLists: (state, action) => {
      state.push(action.payload);
    },
    removeTodoList: (state, action) => {
      return state.filter((text) => text.name !== action.payload.name);
    },
  },
});

export const { addTodoLists, removeTodoList } = todoListsSlice.actions;

export const selectTodoList = (state) => state.todo;

export default todoListsSlice.reducer;
