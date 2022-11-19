import axios from "axios";
import config from "../config/config.json";

const { KEY } = config;

export const searchMoviesRequest = async (search) => {
  const res = await axios(`http://www.omdbapi.com/?s=${search}&${KEY}`, {
    method: "GET",
  });

  return res.data;
};
