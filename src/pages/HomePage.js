import React from "react";
import { Container, Image } from "react-bootstrap";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Navbar from "../components/Navbar/Navbar";
import MovieCardSwiper from "../components/MovieCardSwiper/MovieCardSwiper";
import Footer from "../components/Footer/Footer";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Swiper
          className="mb-5"
          modules={[Navigation, Pagination]}
          navigation
          pagination
        >
          <SwiperSlide>
            <Image
              src="https://via.placeholder.com/1296x648"
              alt="slider image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://via.placeholder.com/1296x648"
              alt="slider image"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src="https://via.placeholder.com/1296x648"
              alt="slider image"
            />
          </SwiperSlide>
        </Swiper>

		<MovieCardSwiper>
          <h2 className="mb-3">Bookmarked Movies</h2>
        </MovieCardSwiper>

        <MovieCardSwiper>
          <h2 className="mb-3">Popular Movies</h2>
        </MovieCardSwiper>

        <MovieCardSwiper>
          <h2 className="mb-3">Trending Movies</h2>
        </MovieCardSwiper>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
