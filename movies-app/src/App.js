import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Movies from "./components/Movies";
import FavouriteMovies from "./components/FavouriteMovies";
import { data } from "./data";
import { searchMoviesRequest } from "./server/searchMovieRequest";
import MainContext from "./context";

const App = () => {
  const [movies, setMovies] = useState(data);
  const [search, setSearch] = useState("");
  const [favouriteList, setFavouriteList] = useState([]);

  const searchRequest = async () => {
    if (search) {
      const data = await searchMoviesRequest(search);
      if (data.Response === "False") {
        setMovies([{ Poster: "images/not-found.png", imdbID: 1 }]);
      } else {
        setMovies(data.Search);
      }
    }
  };

  useEffect(() => {
    if (!search) {
      setMovies(data);
    }
    searchRequest();
  }, [search]);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("movies"));
    if (localStorageData) {
      setFavouriteList(localStorageData);
    }
  }, []);

  return (
    <MainContext.Provider
      value={{
        favouriteList,
        setFavouriteList,
      }}
    >
      <div className="bg-dark text-light" style={{ height: "100vh" }}>
        <Header setSearch={setSearch} search={search} />
        <div className="container">
          <Movies data={movies} />
          {favouriteList.length > 0 && (
            <FavouriteMovies
              favouriteList={favouriteList}
              setFavouriteList={setFavouriteList}
            />
          )}
        </div>
      </div>
    </MainContext.Provider>
  );
};

export default App;
