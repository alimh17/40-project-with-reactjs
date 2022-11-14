import React from "react";
import { Link } from "react-router-dom";
import StorefrontOutlined from "@mui/icons-material/StorefrontOutlined";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import SearchIcon from "@mui/icons-material/Search";

import style from "./style.module.css";
import { useStateValue } from "../../state";

const Header = () => {
  const [{ basket }] = useStateValue();

  return (
    <nav className={style.navbar}>
      <Link to="/" className={style.logoContainer}>
        <h2>Logo</h2>
        <StorefrontOutlined className={style.storeFront} />
      </Link>
      <div className={style.SearchContainer}>
        <input />
        <SearchIcon />
      </div>
      <div className={style.RightSection}>
        <div>
          <span>Hello Guest</span>
          <span>Sign In</span>
        </div>
        <div>
          <span>Your</span>
          <span>Shop</span>
        </div>
        <div>
          <Link to="/checkout" className={style.checkoutLink}>
            <ShoppingBasketIcon />
            <span>{basket.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
