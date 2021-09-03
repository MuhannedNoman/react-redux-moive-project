import { configureStore } from "@reduxjs/toolkit";
import actorsSlice from "../Slices/actorsSlice";
import movies from "../Slices/moviesSlice";
import moviesFilterSlice from "../Slices/moviesFilterSlice";
import searchSlice from "../Slices/searchSlice";
const store = configureStore({
  reducer: {
    movies: movies,
    actors: actorsSlice,
    moviesFilter: moviesFilterSlice,
    search: searchSlice,
  },
});
export default store;
