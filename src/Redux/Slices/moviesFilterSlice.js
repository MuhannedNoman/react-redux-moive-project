import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const moviesByGenre = createAsyncThunk(
  "filter/moviesByGenre",
  async (genreId) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?api_key=e8fe6c13def75cda44726ea251c4fb8c&5D&with_genres=${genreId}`
      )
      .then((response) => {
        return response.data;
      });
  }
);
export const allGenres = createAsyncThunk("filter/allGenres", async () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/genre/movie/list?api_key=e8fe6c13def75cda44726ea251c4fb8c&5D&language=en-US"
    )
    .then((response) => {
      return response.data;
    });
});

const moviesFilter = createSlice({
  name: "filter",
  initialState: {
    moviesByGenre: { status: "", list: [] },
    allGenres: { status: "", list: [] },
  },
  extraReducers: {
    [moviesByGenre.pending]: (state) => {
      state.moviesByGenre.status = "loading";
    },
    [moviesByGenre.fulfilled]: (state, action) => {
      state.moviesByGenre.status = "success";
      state.moviesByGenre.list = action.payload.results;
    },
    [moviesByGenre.rejected]: (state) => {
      state.moviesByGenre.status = "error";
    },
    [allGenres.pending]: (state) => {
      state.allGenres.status = "loading";
    },
    [allGenres.fulfilled]: (state, action) => {
      state.allGenres.status = "success";
      state.allGenres.list = action.payload.genres;
    },
    [allGenres.rejected]: (state) => {
      state.allGenres.status = "error";
    },
  },
});

export default moviesFilter.reducer;
