import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies";
import List from "./List";

const TrendingMovies = () => {
  const mostPopularMovies = useSelector(
    (state) => state.movies.value.mostPopularMovies
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  return <List listData={mostPopularMovies} listTitle={"TrendingMovies"} />;
};

export default TrendingMovies;
