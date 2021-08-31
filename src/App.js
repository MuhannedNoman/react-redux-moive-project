import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import SearchInput from "./components/SearchInput";
// import useFetch from "./hooks/useFetch";
// import requests from "./reuqests/requests";
// import Row from "./components/Row";
// import Slider from "./containers/Slider";
import { fetchMovies } from "./api/imdbApi";

function App() {
  // const { loading, setQuery, setLoading } = useFetch();
  // const { loading } = useFetch();

  // function queryHandler(q) {
  //   setQuery(q);
  // }
  // function loadingHandler(l) {
  //   setLoading(l);
  // }

  const dispatch = useDispatch();
  const imdb = useSelector((state) => state.imdb);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  console.log(imdb);

  return (
    <div>
      {/* <SearchInput
        queryHandler={queryHandler}
        loadingHandler={loadingHandler}
      /> */}
      {/* <Slider fetchUrl={requests.fetchComedyMovies} /> */}
      {/* <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLarge
      />
      <Row
        title="Trending"
        fetchUrl={requests.fetchTrending}
        isLarge
        isLoading={loading}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        isLarge
        isLoading={loading}
      />
      <Row
        title="Action"
        fetchUrl={requests.fetchActionMovies}
        isLarge
        isLoading={loading}
      /> */}
    </div>
  );
}

export default App;
