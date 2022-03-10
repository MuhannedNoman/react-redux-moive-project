import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getActors = createAsyncThunk(
  'actors/getAllActors',
  async (page = 1) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/person/popular?api_key=1335239b0b917f23ccc8492fb3fecd4f&language=en-US&page=${page}`
      )
      .then((res) => res.data)
  }
)

export const getActorDetails = createAsyncThunk(
  'actors/getActorDetails',
  async (actorId) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/person/${actorId}?api_key=1335239b0b917f23ccc8492fb3fecd4f`
      )
      .then((res) => res.data)
  }
)

export const getActorMovies = createAsyncThunk(
  'actors/getActorMovies',
  async (actorId) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=1335239b0b917f23ccc8492fb3fecd4f`
      )
      .then((res) => res.data)
  }
)

const actors = createSlice({
  name: 'actors',
  initialState: {
    actors: { status: '', actorsList: [] },
    actorsDetails: { status: '', actorsDetailsList: [] },
    actorMovies: { status: '', actorMoviesList: [] },
  },
  extraReducers: {
    [getActors.pending]: (state) => {
      state.actors.status = 'loading'
    },
    [getActors.fulfilled]: (state, action) => {
      state.actors.status = 'success'
      state.actors.actorsList = action.payload.results
    },
    [getActorDetails.pending]: (state) => {
      state.actorsDetails.status = 'loading'
    },
    [getActorDetails.fulfilled]: (state, action) => {
      state.actorsDetails.status = 'success'
      state.actorsDetails.actorsDetailsList = action.payload
    },
    [getActorMovies.pending]: (state) => {
      state.actorMovies.status = 'loading'
    },
    [getActorMovies.fulfilled]: (state, action) => {
      state.actorMovies.status = 'loading'
      state.actorMovies.actorMoviesList = action.payload
    },
  },
})
export default actors.reducer
