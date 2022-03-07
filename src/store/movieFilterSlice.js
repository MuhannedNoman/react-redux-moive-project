import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const allGenres = createAsyncThunk('filter/allGenres', async () => {
  return axios
    .get(
      'https://api.themoviedb.org/3/genre/movie/list?api_key=1335239b0b917f23ccc8492fb3fecd4f'
    )
    .then((res) => res.data)
})

const movieFilter = createSlice({
  name: 'filter',
  initialState: {
    allGenres: { status: '', movieList: '' },
  },
  extraReducers: {
    [allGenres.pending]: (state) => {
      state.allGenres.status = 'loading'
    },
    [allGenres.fulfilled]: (state, action) => {
      state.allGenres.status = 'success'
      state.allGenres.fulfilled = action.payload.genres
    },
  },
})

export default movieFilter.reducer
