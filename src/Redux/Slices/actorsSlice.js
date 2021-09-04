import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getActors = createAsyncThunk("actors/getActors", async () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/person/popular?api_key=e8fe6c13def75cda44726ea251c4fb8c&language=en-US&page=1"
    )
    .then((response) => {
      return response.data;
    });
});
export const getActorDetails = createAsyncThunk(
  "actors/actorDetails",
  async (id) => {
    return axios
      .get(
        ` https://api.themoviedb.org/3/person/${id}?api_key=e8fe6c13def75cda44726ea251c4fb8c&language=en-US`
      )
      .then((response) => {
        return response.data;
      });
  }
);

export const getActorMovies = createAsyncThunk(
  "actors/actorMovies",
  async (id) => {
    return axios
      .get(
        ` https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=e8fe6c13def75cda44726ea251c4fb8c&language=en-US`
      )
      .then((response) => {
        return response.data;
      });
  }
);

const actorsSlice = createSlice({
  name: "actors",
  initialState: {
    actors: {
      status: "",
      list: [],
    },
    actorDetails: {
      status: "",
      list: [],
    },
    actorMovies: {
      status: "",
      list: [],
    },
  },
  extraReducers: {
    [getActors.pending]: (state) => {
      state.actors.status = "loading";
    },
    [getActors.fulfilled]: (state, action) => {
      state.actors.status = "success";
      state.actors.list = action.payload.results;
    },
    [getActors.rejected]: (state) => {
      state.actors.status = "error";
    },
    [getActorDetails.pending]: (state) => {
      state.actorDetails.status = "loading";
    },
    [getActorDetails.fulfilled]: (state, action) => {
      state.actorDetails.status = "success";
      state.actorDetails.list = action.payload;
    },
    [getActorDetails.rejected]: (state) => {
      state.actorDetails.status = "error";
    },
    [getActorMovies.pending]: (state) => {
      state.actorMovies.status = "loading";
    },
    [getActorMovies.fulfilled]: (state, action) => {
      state.actorMovies.status = "success";
      state.actorMovies.list = action.payload;
    },
    [getActorMovies.rejected]: (state) => {
      state.actorMovies.status = "error";
    },
  },
});
export default actorsSlice.reducer;
