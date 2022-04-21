import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMostPopular = createAsyncThunk(
  "mostPopularSlice/getPosts",
  async () => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=397c42a96d2c187c2a4912fccc6be558`,
    ).then((res) => res.json());
  },
);

const mostPopularSlice = createSlice({
  name: "movies-post",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getMostPopular.pending]: (state) => {
      state.status = "loading";
    },
    [getMostPopular.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getMostPopular.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default mostPopularSlice.reducer;
