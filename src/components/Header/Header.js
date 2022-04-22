import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <div>
        <a href="/home">
          <img src={logo} alt="" />
        </a>
      </div>
      <div>
        <a href="/order">Order</a>
        <a href="/shop">Shop</a>
        <a href="/order-review">Order Review</a>
        <a href="/inventory">Inventory</a>
      </div>
    </nav>
  );
};

export default Header;
