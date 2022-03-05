import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    value: { isLoading: false, mostPopularMovies: [], error: "" },
  },
  reducers: {
    FETCH_MOVIE_REQUEST: (state, action) => {
      state.value.isLoading = true;
    },
    FETCH_MOVIE_SUCCESS: (state, action) => {
      state.value.isLoading = false;
      state.value.mostPopularMovies = action.payload;
      state.value.error = " ";
    },
    FETCH_MOVIE_FAILURE: (state, action) => {
      state.value.error = action.payload;
      state.value.isLoading = false;
      state.value.mostPopularMovies = [];
    },
  },
});

export const { FETCH_MOVIE_REQUEST, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE } =
  movieSlice.actions;
export default movieSlice.reducer;

export const fetchMovies = () => {
  return (dispatch) => {
    dispatch(FETCH_MOVIE_REQUEST());
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=700d3a1260c205edbb3e4e388f37e877 "
      )
      .then((response) => {
        const mostPopularMovies = response.data.results;
        //console.log(mostPopularMovies);
        dispatch(FETCH_MOVIE_SUCCESS(mostPopularMovies));
      })
      .catch((error) => {
        dispatch(FETCH_MOVIE_FAILURE(error.message));
      });
  };
};
