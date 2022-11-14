import React from "react";
import Header from "../../components/Header";
import Product from "../../components/Product";
import { data } from "../../data/data";

import style from "./style.module.css";

const Home = () => {
  return (
    <>
      <Header />
      <div className={style.home}>
        <div className={style.homeContainer}>
          <img
            alt="home"
            src="images/ecommerce-768x278.jpg"
            className={style.homeImage}
          />
          <div className={style.Row}>
            <Product product={data[0]} />
            <Product product={data[1]} />
          </div>
          <div className={style.Row}>
            <Product product={data[2]} />
            <Product product={data[3]} />
            <Product product={data[4]} />
          </div>
          <div className={style.Row}>
            <Product product={data[5]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
