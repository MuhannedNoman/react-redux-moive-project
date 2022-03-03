import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getSearchMovieCredit = createAsyncThunk(
  "searchMovieCreditSlice/getPosts",
  async ({ movieId }) => {
    return fetch(
      `https://api.themoviedb.org/3/movie/736759/credits?api_key=397c42a96d2c187c2a4912fccc6be558&language=en-US`,
    ).then((res) => res.json());
  },
);

const searchMovieCreditSlice = createSlice({
  name: "movies-post",
  initialState: {
    list: [],
    status: null,
  },
  extraReducers: {
    [getSearchMovieCredit.pending]: (state) => {
      state.status = "loading";
    },
    [getSearchMovieCredit.fulfilled]: (state, { payload }) => {
      state.list = payload;
      state.status = "success";
    },
    [getSearchMovieCredit.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default searchMovieCreditSlice.reducer;

//Get Movie actors ID and Names
