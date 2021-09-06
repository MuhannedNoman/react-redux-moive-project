import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// https://api.themoviedb.org/3/search/multi?api_key=e8fe6c13def75cda44726ea251c4fb8c&language=en-US&query=super&page=1&include_adult=false
export const getSearchResult = createAsyncThunk(
  "search/getSearchResult",
  async (searchValue) => {
    return axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=e8fe6c13def75cda44726ea251c4fb8c&language=en-US&query=${searchValue}&page=1&include_adult=false`
      )
      .then((response) => {
        return response.data;
      });
  }
);
const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchValue: "",
    searchResult: {
      status: "",
      list: [],
    },
  },
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    emptySearchResults(state) {
      state.searchResult.list = [];
    },
    emptySearchValue(state) {
      state.searchValue = "";
    },
  },
  extraReducers: {
    [getSearchResult.pending]: (state) => {
      state.searchResult.status = "loading";
    },
    [getSearchResult.fulfilled]: (state, action) => {
      state.searchResult.status = "success";
      state.searchResult.list = action.payload.results;
    },
    [getSearchResult.rejected]: (state) => {
      state.searchResult.status = "error";
    },
  },
});
export const { setSearchValue, emptySearchResults, emptySearchValue } =
  searchSlice.actions;
export default searchSlice.reducer;
