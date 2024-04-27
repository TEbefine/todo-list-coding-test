import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import todoListReducer from "../features/todoLists/todoListsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoListReducer,
  },
});
