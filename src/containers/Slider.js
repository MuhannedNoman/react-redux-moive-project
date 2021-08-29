import React, { useState, useEffect } from "react";
import { Carousel } from "antd";
import axios from "axios";
import PropTypes from "prop-types";

function Crousel({ fetchUrl }) {
  const [movie, setMovie] = useState([]);

  Crousel.propTypes = {
    fetchUrl: PropTypes.string.isRequired,
  };

  const posterBaseUrl = "https://image.tmdb.org/t/p/original";

  const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
  });

  useEffect(() => {
    async function fetchData() {
      const response = await instance.get(fetchUrl);
      setMovie(response.data.results);
    }

    fetchData();
    // I disabled the warning for this line. It will automatically add `instance` as dependency which causes memory leak
    // eslint-disable-next-line
  }, [fetchUrl]);

  console.log(movie);

  return (
    <div style={{ width: "80vw", margin: "0 auto" }}>
      <Carousel autoplay>
        {movie.map((m) => (
          <img
            key={m.id}
            src={`${posterBaseUrl}${m.backdrop_path}`}
            alt={m.name}
          />
        ))}
      </Carousel>
    </div>
  );
}

export default Crousel;
