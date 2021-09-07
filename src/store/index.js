import { configureStore } from "@reduxjs/toolkit";
import tmdbReducer from "./reducers/tmdbSlice";

const store = configureStore({
  reducer: {
    tmdb: tmdbReducer,
  },
});

export default store;
