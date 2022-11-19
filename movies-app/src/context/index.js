import { createContext } from "react";

export const MainContext = createContext({
  favouriteList: [],
  setFavouriteList: () => {},
});

export default MainContext;
