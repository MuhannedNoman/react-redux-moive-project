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

const movies = createSlice({
  name: 'movies',
  initialState: {
    popular: { status: '', popularMovieList: [] },
    trends: { status: '', trendMovieList: [] },
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
  },
})
export default movies.reducer
