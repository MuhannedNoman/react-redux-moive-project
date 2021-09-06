import { createSlice } from "@reduxjs/toolkit";

const bookmarksSlice = createSlice({
  name: "bookmarks",
  initialState: {
    bookmarks: [],
  },
  reducers: {
    userBookmarks(state, action) {
      state.bookmarks = action.payload;
    },
    addBookmarks(state, action) {
      state.bookmarks.push(action.payload);
    },
    removeBookmarks(state, action) {
      state.bookmarks = action.payload;
    },
    resetBookmarks(state) {
      state.bookmarks = [];
    },
  },
});
export const { userBookmarks, addBookmarks, resetBookmarks, removeBookmarks } =
  bookmarksSlice.actions;
export default bookmarksSlice.reducer;
