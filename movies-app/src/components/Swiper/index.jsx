import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import Favourite from "../Favourite";

import "./style.css";

const SwiperComponent = ({ data, delay }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      loop={data.length > 1 ? true : false}
      spaceBetween={50}
      slidesPerView={1}
      gap={5}
      autoplay={{
        delay,
        disableOnInteraction: false,
      }}
      navigation
      breakpoints={{
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      }}
    >
      {data.map((movie) => (
        <SwiperSlide key={movie.imdbID} className="slide">
          <img
            alt="poster"
            src={movie.Poster ? movie.Poster : ""}
            className={`rounded-2 ${data.length === 1 && " h-100"}`}
          />
          {data.length > 1 && <Favourite movie={movie} />}
          <h5 className="text-center py-3">{movie.Title}</h5>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
