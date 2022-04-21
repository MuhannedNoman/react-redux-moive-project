import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovieByActor = createAsyncThunk(
  "searchMovieByActorSlice/getPosts",
  async ({ actorId }) => {
    return fetch(
      `https://api.themoviedb.org/3/person/73968?api_key=397c42a96d2c187c2a4912fccc6be558&append_to_response=credits`,
    ).then((res) => res.json());
  },
);

const searchMovieByActorSlice = createSlice({
  name: "movies-post",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getMovieByActor.pending]: (state) => {
      state.status = "loading";
    },
    [getMovieByActor.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getMovieByActor.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default searchMovieByActorSlice.reducer;

//Get Movie By Actor ID
