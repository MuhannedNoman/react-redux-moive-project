import { configureStore } from "@reduxjs/toolkit";
import imdbReducer from "./reducers/imdbSlice";

const store = configureStore({
  reducer: {
    imdb: imdbReducer,
  },
});

export default store;
