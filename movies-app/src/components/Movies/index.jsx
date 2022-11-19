import React from "react";
import SwiperComponent from "../Swiper";

const Movies = React.memo(({ data }) => {
  return <SwiperComponent data={data} delay={2200} />;
});

export default Movies;
