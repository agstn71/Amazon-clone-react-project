import React, { useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { MyContext as MainContext } from "../../Context/MyContext";

function Header() {
 const {product,cart,setCart,quantity,setQuantity,selectQuantity} =  useContext(MainContext)
  return (
    <div>
      <header className="amazon-header">
        <div  className="logo-div">
          <img
            src="/images/Amazon_logo.svg"
            alt="Amazon Logo"
            class="amazon-header__logo-img"
          />
        </div>
        <form action="/search" method="GET" class="amazon-header__search">
          <input type="text" name="q" placeholder="Search" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="amazon-cart">
          <div className="rtn-ord">
            <span class="returns-text">Return</span>
            <span class="orders-text">&Orders</span>
          </div>
          <div>
            <Link to="/checkout" className="cart-icon">
            <i class="fas fa-shopping-cart icon"></i>
            <div class="cart-quantity">{quantity}</div>
            <div class="cart-text">Cart</div>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
