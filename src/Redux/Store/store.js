import { configureStore } from "@reduxjs/toolkit";
import actorsSlice from "../Slices/actorsSlice";
import movies from "../Slices/moviesSlice";

const store = configureStore({
  reducer: {
    movies: movies,
    actors: actorsSlice,
  },
});
export default store;
