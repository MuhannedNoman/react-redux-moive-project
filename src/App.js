import React from "react";
import SearchInput from "./components/SearchInput";
// import MoviesContainer from "./containers/MoviesContainer";
import useFetch from "./hooks/useFetch";
import requests from "./reuqests/requests";
import Row from "./components/Row";

function App() {
  const { response, loading, setQuery, setLoading } = useFetch();

  function queryHandler(q) {
    setQuery(q);
  }
  function loadingHandler(l) {
    setLoading(l);
  }

  console.log(response, loading);

  return (
    <div>
      <SearchInput
        queryHandler={queryHandler}
        loadingHandler={loadingHandler}
      />
      <Row
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
      />
    </div>
  );
}

export default App;
