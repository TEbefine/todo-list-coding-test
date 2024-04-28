import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomp: [
    "Study for certification exam",
    "Update project timeline",
    "Schedule dentist appointment",
    "Research new software",
  ],
  comp: [],
};

const showAllStatusSlice = createSlice({
  name: "showAllStatus",
  initialState,
  reducers: {
    addShowLists: (state, action) => {
      const { show, status } = action.payload;
      state[status].push(show);
    },
    removeShowList: (state, action) => {
      const { show, status } = action.payload;
      state[status] = state[status].filter((text) => text !== show);
    },
  },
});

export const { addShowLists, removeShowList } = showAllStatusSlice.actions;

export const selectShowList = (state) => state.showAllStatus;

export default showAllStatusSlice.reducer;
