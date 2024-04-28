import { createSlice } from "@reduxjs/toolkit";

export const persistListsSlice = createSlice({
  name: "persistLists",
  initialState: ["Study for certification exam"],
  reducers: {
    addPersistLists: (state, action) => {
      state.push(action.payload);
    },
    removePersistLists: (state, action) => {
      return state.filter((recipe) => recipe !== action.payload);
    },
  },
});

export const { addPersistLists, removePersistLists } =
  persistListsSlice.actions;

export const selectPersistLists = (state) => state.persistLists;

export default persistListsSlice.reducer;
