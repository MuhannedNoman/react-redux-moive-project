/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";
import {
  movies as moviesApi,
  actors as actorsApi,
  genres as genresApi,
} from "../../api/tmdbApi";

const generalInitialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const initialState = {
  movies: generalInitialState,
  popularMovies: [],
  trendingMovies: [],
  actors: generalInitialState,
  genres: [],
  loading: false,
  error: "",
};

const tmdb = createSlice({
  name: "tmdb",
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
    // movies
    [moviesApi.fetch.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [moviesApi.fetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.movies = action.payload ?? initialState.movies;
    },
    [moviesApi.fetch.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong!";
    },

    // popular movies
    [moviesApi.fetchPopular.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [moviesApi.fetchPopular.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.popularMovies =
        action.payload?.results ?? initialState.popularMovies;
    },
    [moviesApi.fetchPopular.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong!";
    },

    // trending movies
    [moviesApi.fetchTrending.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [moviesApi.fetchTrending.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.trendingMovies =
        action.payload?.results ?? initialState.trendingMovies;
    },
    [moviesApi.fetchTrending.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong!";
    },

    // search Movies
    [moviesApi.search.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [moviesApi.search.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.movies = action.payload ?? initialState.movies;
    },
    [moviesApi.search.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong!";
    },

    // actors
    [actorsApi.fetch.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [actorsApi.fetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.actors = action.payload ?? initialState.actors;
    },
    [actorsApi.fetch.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong!";
    },

    // genres
    [genresApi.fetchMovieGenres.pending]: (state) => {
      state.loading = true;
      state.error = "";
    },
    [genresApi.fetchMovieGenres.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = "";
      state.genres = action.payload?.genres ?? initialState.genres;
    },
    [genresApi.fetchMovieGenres.rejected]: (state) => {
      state.loading = false;
      state.error = "Something went wrong!";
    },
  },
});

export const { setLoading, setError } = tmdb.actions;

export default tmdb.reducer;
