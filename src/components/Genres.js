import React, { useState, useEffect } from "react";
import { Skeleton, Progress } from "antd";
import "./Row.css";
import { useParams } from "react-router-dom";

// eslint-disable-next-line
function Genres() {
  const { genre } = useParams();
  console.log(genre);

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const URL = `https://api.themoviedb.org/3/discover/movie?api_key=e15bbb219d7a04f817488309f7efe37f&with_genres=${genre}`;

  useEffect(() => {
    setIsLoading(true);
    fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
        setIsLoading(false);
      });
  }, [URL]);

  const posterBaseUrl = "https://image.tmdb.org/t/p/original";
  return (
    <div className="row">
      {isLoading ? (
        <Skeleton />
      ) : (
        <div className="poster_path">
          {/* eslint-disable-next-line */}
          {movies?.map((m) => (
            <div className="card_wrapper">
              <img
                className="row_posterLarge"
                key={m.id}
                src={`${posterBaseUrl}${m.poster_path}`}
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

export default Genres;
