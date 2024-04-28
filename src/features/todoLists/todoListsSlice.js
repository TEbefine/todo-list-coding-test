import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoLists: ["Update project timeline", "Schedule dentist appointment", "Research new software"],
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
      const text = action.payload;
      state.checkedTodos[text] = !state.checkedTodos[text];
    },
  },
});

export const { addTodoLists, removeTodoList, toggleChecked } =
  todoListsSlice.actions;

export const selectTodoList = (state) => state.todo.todoLists;

export const selectCheckedStatus = (state) => state.todo.todoLists.checkedTodos;

export default todoListsSlice.reducer;
