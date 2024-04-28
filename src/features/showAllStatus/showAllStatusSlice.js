import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomp: [],
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
