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
          <Link to="/">
          <img
            src="/images/Amazon_logo.svg"
            alt="Amazon Logo"
            class="amazon-header__logo-img"
          />
          </Link>
        </div>
        <form action="/search" method="GET" class="amazon-header__search">
          <input type="text" name="q" placeholder="Search" />
          <button type="submit">
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div className="amazon-cart">
          <Link to="/orders">
          <div className="rtn-ord">
            <span className="returns-text">Return</span>
            <span className="orders-text">&Orders</span>
          </div>
          </Link>
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
