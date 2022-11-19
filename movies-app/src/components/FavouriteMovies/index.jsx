import React from "react";
import SwiperComponent from "../Swiper";

const FavouriteMovies = React.memo(({ favouriteList, setFavouriteList }) => {
  return (
    <div className="my-5">
      <h2 className="border-bottom">Favourite </h2>
      <SwiperComponent data={favouriteList} delay={2000} />
    </div>
  );
});

export default FavouriteMovies;
