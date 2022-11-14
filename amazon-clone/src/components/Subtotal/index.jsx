import React from "react";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../state/reducer";
import { useStateValue } from "../../state";

import style from "./style.module.css";

const Subtotal = () => {
  const [{ basket }] = useStateValue();
  return (
    <div className={style.subtotal}>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal (0 items) : <span>{value}</span>
            </p>
            <span className={style.subtotalGift}>
              <input type="checkbox" />
              This order contains a gift
            </span>
            <button>Proceed to Checkout</button>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
};

export default Subtotal;
