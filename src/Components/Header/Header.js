import React from "react";
import './Header.css'


function Header() {
  return (
    <div>
      <header className="amazon-header">
        <div className="logo-div">
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
            <span>Return</span>
            <span>&Orders</span>
          </div>
          <div className="cart-icon">
            <a href="/">
              <i class="fas fa-shopping-cart"></i>
              <div class="cart-quantity">3</div>
              <div class="cart-text">Cart</div>
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
