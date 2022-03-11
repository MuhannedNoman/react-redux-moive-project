import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getTrendMovies = createAsyncThunk(
  'movies/trendMovies',
  async () => {
    return axios
      .get(
        ' https://api.themoviedb.org/3/trending/movie/day?api_key=1335239b0b917f23ccc8492fb3fecd4f'
      )
      .then((res) => res.data)
  }
)

export const getPopularMovies = createAsyncThunk(
  'movies/popularMovies',
  async () => {
    return axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=1335239b0b917f23ccc8492fb3fecd4f'
      )
      .then((res) => res.data)
  }
)
export const getMovieActors = createAsyncThunk(
  'movies/movieActors',
  async (movieId) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=1335239b0b917f23ccc8492fb3fecd4f`
      )
      .then((res) => {
        return res.data
      })
  }
)
export const getMovieDetails = createAsyncThunk(
  'movies/movieDetails',
  async (movieId) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=1335239b0b917f23ccc8492fb3fecd4f`
      )
      .then((res) => {
        return res.data
      })
  }
)

const movies = createSlice({
  name: 'movies',
  initialState: {
    popular: { status: '', popularMovieList: [] },
    trends: { status: '', trendMovieList: [] },
    movieActors: { status: '', movieActorsList: [] },
    movieDetails: { status: '', movieDetailsList: [] },
  },
  extraReducers: {
    [getPopularMovies.pending]: (state) => {
      state.popular.status = 'loading'
    },
    [getPopularMovies.fulfilled]: (state, action) => {
      state.popular.status = 'success'
      state.popular.popularMovieList = action.payload.results
    },
    [getTrendMovies.pending]: (state) => {
      state.trends.status = 'loading'
    },
    [getTrendMovies.fulfilled]: (state, action) => {
      state.trends.status = 'success'
      state.trends.trendMovieList = action.payload.results
    },
    [getMovieActors.pending]: (state) => {
      state.movieActors.status = 'loading'
    },
    [getMovieActors.fulfilled]: (state, action) => {
      state.movieActors.status = 'success'
      state.movieActors.movieActorsList = action.payload
    },
    [getMovieDetails.pending]: (state) => {
      state.movieDetails.status = 'loading'
    },
    [getMovieDetails.fulfilled]: (state, action) => {
      state.movieDetails.status = 'success'
      state.movieDetails.movieDetailsList = action.payload
    },
  },
})
export default movies.reducer
