import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import PropTypes from "prop-types";

function Row({ title, fetchUrl, isLarge }) {
  const [movie, setMovie] = useState([]);
  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  Row.propTypes = {
    title: PropTypes.string.isRequired,
    fetchUrl: PropTypes.string.isRequired,
    isLarge: PropTypes.bool.isRequired,
  };

  const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchUrl);
      setMovie(response.data.results);
    }

    fetchData();
  }, [fetchUrl, instance]);

  return (
    <div className="row">
      <h1>{title}</h1>
      <div className="poster_path">
        <h1>
          {movie.map((m) => (
            <img
              key={m.id}
              className={`row_poster ${isLarge && "row_posterLarge"}`}
              src={`${posterBaseUrl}${
                isLarge ? m.poster_path : m.backdrop_path
              }`}
              alt={m.name}
            />
          ))}
        </h1>
      </div>
    </div>
  );
}

export default Row;
