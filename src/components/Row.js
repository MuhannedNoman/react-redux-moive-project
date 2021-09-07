import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import PropTypes from "prop-types";
import { Skeleton, Progress } from "antd";

function Row({ title, fetchUrl, isLarge }) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(false);

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
    setisLoading(true);
    async function fetchData() {
      const response = await instance.get(fetchUrl);
      setMovie(response.data.results);
      setisLoading(false);
    }

    fetchData();
    // I disabled the warning for this line. It will automatically add `instance` as dependency which causes memory leak
    // eslint-disable-next-line
  }, [fetchUrl]);

  return (
    <div className="row">
      <h1 style={{ color: "white" }}>{title}</h1>
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="poster_path">
          {movie?.map((m) => (
            <div className="card_wrapper">
              <img
                key={m.id}
                className={`row_poster ${isLarge && "row_posterLarge"}`}
                src={`${posterBaseUrl}${
                  isLarge ? m.poster_path : m.backdrop_path
                }`}
                alt={m.name}
              />
              <Progress
                strokeColor={m.vote_average >= 8 ? "green" : "red"}
                style={{
                  position: "absolute",
                  bottom: "0",
                  left: "0",
                  zIndex: "100",
                  background: "white",
                  borderRadius: "0 100px 100px 100px",
                }}
                type="circle"
                percent={m.vote_average * 10}
                width={40}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Row;
