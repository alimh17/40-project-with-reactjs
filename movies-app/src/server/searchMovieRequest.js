import axios from "axios";

export const searchMoviesRequest = async (search) => {
  const res = await axios(
    `http://www.omdbapi.com/?s=${search}&apikey=2003048e`,
    {
      method: "GET",
      Authorization: "apikey=2003048e",
      "Content-Type": "application/json",
    }
  );

  return res.data;
};
