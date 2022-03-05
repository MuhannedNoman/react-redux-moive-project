import React from "react";
import { Carousel, Container } from "react-bootstrap";

const Slider = () => {
  return (
    <div className="m-auto w-75 d-block">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block  w-100"
            src="https://wallpapersmug.com/download/1600x900/cce793/movie-poster-of-john-wick-3.jpg"
            alt="John Wick 3"
          />
          <Carousel.Caption>
            <h1 className="font-weight-bold fs-1">John Wick 3</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapersmug.com/large/46a25d/2022-lightyear-movie.jpg "
            alt="Lightyear"
          />

          <Carousel.Caption>
            <h1 className="font-weight-bold fs-1">Lightyear</h1>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://wallpapersmug.com/download/1920x1080/164d6f/the-batman-2022.jpg"
            alt="Batman"
          />

          <Carousel.Caption>
            <h1 className="font-weight-bold fs-1">Batman</h1>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
