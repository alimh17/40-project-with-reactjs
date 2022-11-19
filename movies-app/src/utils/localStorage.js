import _ from "lodash";

export const setLocalStorage = (data) => {
  const movies = localStorage.getItem("movies");
  if (movies) {
    localStorage.setItem("movies", JSON.stringify(data));
  } else {
    localStorage.setItem("movies", JSON.stringify(data));
  }
};
