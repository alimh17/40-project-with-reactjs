import React from "react";
import CheckoutProduct from "../../components/CheckoutProduct";
import Subtotal from "../../components/Subtotal";
import Header from "../../components/Header";

import style from "./style.module.css";
import { useStateValue } from "../../state";

const Checkout = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <Header />
      <div className={style.checkout}>
        <div className={style.checkoutLeft}>
          <img
            alt=""
            src="images/OCC_Amazon1._CB423492668_.jpg"
            className={style.imageAdd}
          />
          <div>
            <h2 className={style.checkoutTitle}>Your Shopping Basket</h2>
            {basket.map((product, i) => (
              <CheckoutProduct key={i} product={product} />
            ))}
          </div>
        </div>
        <div className={style.checkoutRight}>
          <Subtotal />
        </div>
      </div>
    </>
  );
};

export default Checkout;
