import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getMostPopular } from "./redux/features/fetchSlices/mostPopularSlice";
import { getGenreAndYear } from "./redux/features/fetchSlices/genreAndYearSlice";
import { getSearchMovie } from "./redux/features/fetchSlices/searchMovieSlice";
import { getSearchMovieCredit } from "./redux/features/fetchSlices/searchMovieCreditSlice";
import { getMovieByActor } from "./redux/features/fetchSlices/searchMovieByActorSlice";

import { useEffect } from "react";
import React from "react";
import HomePage from "./pages/HomePage";

function App() {
  //For tesing purposes

  //Search by Genre and Year
  const genreAndYear = useSelector(
    (state) => state.genreAndYearReducer.list.results
  );

  //Most Popular for landing page
  const mostPopular = useSelector(
    (state) => state.mostPopularReducer.list.results
  );

  //Search Movie by name
  const searchMovie = useSelector(
    (state) => state.searchMovieReducer.list.results
  );

  //Search Movie credits (actors) by movie ID
  const searchMovieCredit = useSelector(
    (state) => state.searchMovieCreditReducer.list.cast
  );

  //Search Movies by actors ID
  const searchMovieByActor = useSelector(
    (state) => state.searchMovieByActorReducer.list.credits
  );

  console.log(searchMovieByActor);
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(getGenreAndYear({ year: "2020", genre: "18" }));
    // dispatch(getMostPopular());
    dispatch(getSearchMovie({ query: "the+witcher" }));
    dispatch(getSearchMovieCredit({ search: "the+witcher" }));
    dispatch(getMovieByActor({ actorID: "73968" }));
  }, [dispatch]);
  if (!mostPopular) return <h1>Hold on</h1>;
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
