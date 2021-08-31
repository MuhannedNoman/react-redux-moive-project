/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../../api/imdbApi";

const initialState = {
  movies: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  actors: [],
  loading: false,
  error: "",
};

const imdbSlice = createSlice({
  name: "imdb",
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [fetchMovies.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.movies = action.payload ?? initialState.movies;
    },
    [fetchMovies.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong!";
    },
  },
});

export const { setLoading, setError } = imdbSlice.actions;

export default imdbSlice.reducer;
