import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const searchedMovieSlice = createSlice({
  name: "movies",
  initialState: {
    value: { isLoading: false, searchedMovies: [], error: "" },
  },
  reducers: {
    FETCH_SEARCHED_MOVIE_REQUEST: (state, action) => {
      state.value.isLoading = true;
    },
    FETCH_SEARCHED_MOVIE_SUCCESS: (state, action) => {
      state.value.isLoading = false;
      state.value.searchedMovies = action.payload;
      state.value.error = " ";
    },
    FETCH_SEARCHED_MOVIE_FAILURE: (state, action) => {
      state.value.error = action.payload;
      state.value.isLoading = false;
      state.value.searchedMovies = [];
    },
  },
});

export const {
  FETCH_SEARCHED_MOVIE_REQUEST,
  FETCH_SEARCHED_MOVIE_SUCCESS,
  FETCH_SEARCHED_MOVIE_FAILURE,
} = searchedMovieSlice.actions;
export default searchedMovieSlice.reducer;

export const fetchSearchedMovies = (userInput) => {
  return (dispatch) => {
    dispatch(FETCH_SEARCHED_MOVIE_REQUEST());
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=700d3a1260c205edbb3e4e388f37e877&query=${userInput.trim()}`
      )
      .then((response) => {
        const searchedMovies = response.data.results;
        //console.log(mostPopularMovies);
        dispatch(FETCH_SEARCHED_MOVIE_SUCCESS(searchedMovies));
      })
      .catch((error) => {
        dispatch(FETCH_SEARCHED_MOVIE_FAILURE(error.message));
      });
  };
};
