import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getGenreAndYear = createAsyncThunk(
  "genreAndYearSlice/getPosts",
  async ({ year, genre }) => {
    return fetch(
      `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&primary_release_year=${year}&api_key=397c42a96d2c187c2a4912fccc6be558`,
    ).then((res) => res.json());
  },
);

const genreAndYearSlice = createSlice({
  name: "movies-post",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getGenreAndYear.pending]: (state) => {
      state.status = "loading";
    },
    [getGenreAndYear.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getGenreAndYear.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default genreAndYearSlice.reducer;
