import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import MovieCard from "../../components/MovieCard/MovieCard";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MovieCardSwiper = ({ children, movies }) => {
  return (
    <>
      {children}
      <Swiper
        className="mb-5"
        modules={[Navigation, Pagination]}
        navigation
        pagination
        slidesPerView={2}
        spaceBetween={18}
        breakpoints={{
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
          1400: { slidesPerView: 6 },
        }}
      >
        <SwiperSlide className="mb-5">
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className="mb-5">
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className="mb-5">
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className="mb-5">
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className="mb-5">
          <MovieCard />
        </SwiperSlide>
        <SwiperSlide className="mb-5">
          <MovieCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default MovieCardSwiper;
