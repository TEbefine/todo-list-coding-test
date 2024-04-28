import { configureStore } from "@reduxjs/toolkit";
import todoListReducer from "../features/todoLists/todoListsSlice";
import persistListsResucer from "../features/persistLists/persistListsSlice";
import showAllStatusSlice from "../features/showAllStatus/showAllStatusSlice";

export const store = configureStore({
  reducer: {
    todo: todoListReducer,
    persistLists: persistListsResucer,
    showAllStatus: showAllStatusSlice,
  },
});
