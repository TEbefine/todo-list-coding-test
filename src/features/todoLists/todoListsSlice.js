import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoLists: [
    { text: "Update project timeline", completed: false },
    { text: "Schedule dentist appointment", completed: true },
    { text: "Research new software", completed: false },
  ],
};

const todoListsSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoLists: (state, action) => {
      state.todoLists.push(action.payload);
    },
    removeTodoList: (state, action) => {
      state.todoLists = state.todoLists.filter(
        (todo) => todo !== action.payload
      );
    },
    toggleChecked: (state, action) => {
      const index = state.todoLists.findIndex(
        (todo) => todo.text === action.payload
      );
      if (index !== -1) {
        state.todoLists[index].completed = !state.todoLists[index].completed;
      }
    },
  },
});

export const { addTodoLists, removeTodoList, toggleChecked } =
  todoListsSlice.actions;

export const selectTodoList = (state) => state.todo.todoLists;

export default todoListsSlice.reducer;
