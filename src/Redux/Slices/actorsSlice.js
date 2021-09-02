import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const actors = createAsyncThunk("actors/actors", async () => {
  return axios
    .get(
      "https://api.themoviedb.org/3/person/popular?api_key=e8fe6c13def75cda44726ea251c4fb8c&language=en-US&page=1"
    )
    .then((response) => {
      return response.data;
    });
});
export const actorDetails = createAsyncThunk(
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

export const actorMovies = createAsyncThunk(
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
    [actors.pending]: (state) => {
      state.actors.status = "loading";
    },
    [actors.fulfilled]: (state, action) => {
      state.actors.status = "success";
      state.actors.list = action.payload.results;
    },
    [actors.rejected]: (state) => {
      state.actors.status = "error";
    },
    [actorDetails.pending]: (state) => {
      state.actorDetails.status = "loading";
    },
    [actorDetails.fulfilled]: (state, action) => {
      state.actorDetails.status = "success";
      state.actorDetails.list = action.payload;
    },
    [actorDetails.rejected]: (state) => {
      state.actorDetails.status = "error";
    },
    [actorMovies.pending]: (state) => {
      state.actorMovies.status = "loading";
    },
    [actorMovies.fulfilled]: (state, action) => {
      state.actorMovies.status = "success";
      state.actorMovies.list = action.payload;
    },
    [actorMovies.rejected]: (state) => {
      state.actorMovies.status = "error";
    },
  },
});
export default actorsSlice.reducer;
