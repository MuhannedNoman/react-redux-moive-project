import React from "react";
import "../components/Row.css";
import Row from "../components/Row";
import requests from "../reuqests/requests";
// import { useFetch } from "../hooks/useFetch";

function HomeContainer() {
  //   const { loading, setQuery, setLoading } = useFetch();

  return (
    <>
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated" isLarge />
      <Row fetchUrl={requests.fetchTrending} title="Trending" isLarge />
    </>
  );
}

export default HomeContainer;
