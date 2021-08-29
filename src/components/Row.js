import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import PropTypes from "prop-types";
import { Skeleton } from "antd";

function Row({ title, fetchUrl, isLarge, isLoading }) {
  const [movie, setMovie] = useState([]);
  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  Row.propTypes = {
    title: PropTypes.string.isRequired,
    fetchUrl: PropTypes.string.isRequired,
    isLarge: PropTypes.bool.isRequired,
    isLoading: PropTypes.bool.isRequired,
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
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="poster_path">
          <h1>
            {movie.map((m) => (
              <img
                width={200}
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
      )}
    </div>
  );
}

export default Row;
