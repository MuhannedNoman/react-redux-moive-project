import React from "react";
import SearchInput from "./components/SearchInput";
import useFetch from "./hooks/useFetch";
import requests from "./reuqests/requests";
import Row from "./components/Row";
import Slider from "./containers/Slider";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
      <Navbar />
      <SearchInput
        queryHandler={queryHandler}
        loadingHandler={loadingHandler}
      />
      <Slider fetchUrl={requests.fetchComedyMovies} />
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
      <Footer />
    </div>
  );
}

export default App;
