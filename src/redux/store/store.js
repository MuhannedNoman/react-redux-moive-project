import { configureStore } from "@reduxjs/toolkit";
import mostPopularSlice from "../features/fetchSlices/mostPopularSlice";
import genreAndYearSlice from "../features/fetchSlices/genreAndYearSlice";

export default configureStore({
  reducer: {
    mostPopularReducer: mostPopularSlice,
    genreAndYearReducer: genreAndYearSlice,
  },
});
