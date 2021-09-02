import { configureStore } from "@reduxjs/toolkit";
import actorsSlice from "../Slices/actorsSlice";
import movies from "../Slices/moviesSlice";
import moviesFilterSlice from "../Slices/moviesFilterSlice";
const store = configureStore({
  reducer: {
    movies: movies,
    actors: actorsSlice,
    moviesFilter: moviesFilterSlice,
  },
});
export default store;
