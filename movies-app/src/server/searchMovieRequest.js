import axios from "axios";

export const searchMoviesRequest = async (search) => {
  const res = await axios(
    `http://www.omdbapi.com/?s=${search}&apikey=2003048e`,
    {
      method: "GET",
    }
  );

  return res.data;
};
