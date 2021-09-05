import React, { useEffect, useState } from "react";
import axios from "axios";
import requests from "../reuqests/requests";
import ActorsList from "../components/ActorsList";
import ActorsPagination from "../components/ActorsPagination";

function Actors() {
  const [actors, setActors] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [page, setPage] = useState(1);

  const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });

  useEffect(() => {
    setisLoading(true);
    async function fetchData() {
      const response = await instance.get(
        `${requests.fetchActors}&page=${page}`
      );
      setActors(response.data.results);
      setisLoading(false);
    }

    fetchData();
    // I disabled the warning for this line. It will automatically add `instance` as dependency which causes memory leak
    // eslint-disable-next-line
  }, [requests.actors, page]);

  function onChange(p) {
    setPage(p);
  }

  return (
    <div style={{ color: "white" }}>
      <h1 style={{ color: "white", textAlign: "center", margin: "2rem" }}>
        Most Popular Actors
      </h1>
      {isLoading ? <h1>Loading...</h1> : <ActorsList actors={actors} />}
      <ActorsPagination onChange={onChange} />
    </div>
  );
}

export default Actors;
