import React from "react";
import { Grid } from "@mui/material";
import SearchBox from "./components/SearchBox";
import VideoDetails from "./components/VideoDetail";
import VideoList from "./components/VideoList";

import Api from "./Api";

const App: React.FC = () => {
  const handleSubmit = async (search: string): Promise<void> => {
    const options = {
      params: {
        key: "AIzaSyBV_5_p7u4f35s0pmcVYw_WaXhN5--xjlk",
        part: "snippet",
        q: search,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };
    const res = await Api.get(search, options);
    console.log(res);
  };

  return (
    <Grid container spacing={10} justifyContent="center">
      <Grid item xs={11}>
        <Grid container spacing={10}>
          <Grid item xs={12}>
            <SearchBox onSubmit={handleSubmit} />
          </Grid>
          <Grid item xs={8}>
            <VideoDetails />
          </Grid>
          <Grid item xs={4}>
            <VideoList />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
