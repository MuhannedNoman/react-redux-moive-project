import { configureStore } from "@reduxjs/toolkit";
import mostPopularSlice from "../features/fetchSlices/mostPopularSlice";
import genreAndYearSlice from "../features/fetchSlices/genreAndYearSlice";
import searchMovieSlice from "../features/fetchSlices/searchMovieSlice";
import searchMovieCreditSlice from "../features/fetchSlices/searchMovieCreditSlice";
import searchMovieByActorSlice from "../features/fetchSlices/searchMovieByActorSlice";

export default configureStore({
  reducer: {
    mostPopularReducer: mostPopularSlice,
    genreAndYearReducer: genreAndYearSlice,
    searchMovieReducer: searchMovieSlice,
    searchMovieCreditReducer: searchMovieCreditSlice,
    searchMovieByActorReducer: searchMovieByActorSlice,
  },
});
