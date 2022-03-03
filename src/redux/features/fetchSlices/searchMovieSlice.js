import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchMovie = createAsyncThunk(
  "searchMovieSlice/getPosts",
  async ({ query, selcted }) => {
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=397c42a96d2c187c2a4912fccc6be558&query=${query}`,
    ).then((res) => res.json());
  },
);

const searchMovieSlice = createSlice({
  name: "movies-post",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getSearchMovie.pending]: (state) => {
      state.status = "loading";
    },
    [getSearchMovie.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getSearchMovie.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default searchMovieSlice.reducer;
