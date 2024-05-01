import { createSlice } from "@reduxjs/toolkit";

export const persistListsSlice = createSlice({
  name: "persistLists",
  initialState: [{ text: "Study for certification exam", completed: false }],
  reducers: {
    addPersistLists: (state, action) => {
      state.push(action.payload);
    },
    removePersistLists: (state, action) => {
      return state.filter((todo) => todo.text !== action.payload);
    },
    togglePersistChecked: (state, action) => {
      const index = state.findIndex((todo) => todo.text === action.payload);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
      }
    },
  },
});

export const { addPersistLists, removePersistLists, togglePersistChecked } =
  persistListsSlice.actions;

export const selectPersistLists = (state) => state.persistLists;

export default persistListsSlice.reducer;
