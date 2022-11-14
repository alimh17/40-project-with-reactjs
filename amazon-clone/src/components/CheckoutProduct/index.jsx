import React from "react";
import { useStateValue } from "../../state";

import style from "./style.module.css";

const CheckoutProduct = ({ product }) => {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = (id) => {
    let cpBasket = [...basket];
    const index = cpBasket.findIndex((f) => f.id === id);
    if (index >= 0) {
      cpBasket.splice(index, 1);
      dispatch({ type: "REMOVE_FROM_BASKET", payload: cpBasket });
    } else {
      console.warn(index);
    }
  };

  return (
    <div className={style.product}>
      <img alt="product" src={product.image} className={style.productImage} />
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
        <button onClick={() => removeFromBasket(product.id)}>
          Remove from Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
