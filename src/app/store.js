import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../features/todoLists/todoListsSlice";
import persistListsResucer from "../features/persistLists/persistListsSlice";

export const store = configureStore({
  reducer: {
    todo: todoListReducer,
    persistLists: persistListsResucer,
  },
});
