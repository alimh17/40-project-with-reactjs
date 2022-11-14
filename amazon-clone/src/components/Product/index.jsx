import React from "react";
import { useStateValue } from "../../state";

import style from "./style.module.css";

const Product = ({ product }) => {
  const [, dispatch] = useStateValue();

  const addToBasket = (product) => {
    dispatch({ type: "ADD_TO_BASKET", payload: product });
  };

  return (
    <div className={style.product}>
      <div className={style.producInfo}>
        <p>{product.title}</p>
        <p className={style.productPrice}>
          <span>$</span>
          <span>{product.price}</span>
        </p>
        <div className={style.productRating}>
          {new Array(product.rating).fill().map((_, i) => (
            <span key={i}>⭐</span>
          ))}
        </div>
      </div>
      <img alt="product" src={product.image} />
      <button onClick={() => addToBasket(product)}>Add to Basket</button>
    </div>
  );
};

export default Product;
