import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  incomp: {
    persist: [],
    regular: [],
  },
  comp: {
    persist: [],
    regular: [],
  },
};

const showAllStatusSlice = createSlice({
  name: "showAllStatus",
  initialState,
  reducers: {
    addShowLists: (state, action) => {
      const { show, status, kind } = action.payload;
      state[status][kind].push(show);
    },
    removeShowList: (state, action) => {
      const { show, status, kind } = action.payload;
      state[status][kind] = state[status][kind].filter((text) => text !== show);
    },
  },
});

export const { addShowLists, removeShowList } = showAllStatusSlice.actions;

export const selectShowList = (state) => state.showAllStatus;

export default showAllStatusSlice.reducer;
