import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmark",
  initialState: {
    bookmarks: [],
    isLoading: false,
  },
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
    },
  },
});

export const { addBookmark } = bookmarkSlice.actions;

export default bookmarkSlice.reducer;
