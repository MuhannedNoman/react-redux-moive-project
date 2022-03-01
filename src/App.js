import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./redux/features/fetchSlices/mostPopularSlice";
import { getGenreAndYear } from "./redux/features/fetchSlices/genreAndYearSlice";
import { useEffect } from "react";

function App() {
  //For tesing purposes

  const genreAndYear = useSelector(
    (state) => state.genreAndYearReducer.list.results,
  );
  const mostPopular = useSelector(
    (state) => state.mostPopularReducer.list.results,
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getGenreAndYear({ year: "2020", genre: "18" }));
    dispatch(getPosts());
  }, [dispatch]);
  if (!mostPopular) return <h1>Hold</h1>;
  return (
    <div className="App">
      {mostPopular.map((movie) => {
        return <h1 key={movie.original_title}>{movie.original_title}</h1>;
      })}
    </div>
  );
}

export default App;
