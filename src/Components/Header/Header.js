import React, { useContext } from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import { MyContext as MainContext } from "../../Context/MyContext";

function Header() {
 const {product,cart,setCart,quantity,setQuantity,selectQuantity} =  useContext(MainContext);
  const user = JSON.parse(localStorage.getItem("user"));
    const navigate = useNavigate();
    const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };
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
        { user?
           <>
           <p style={{color:'white'}}>welcome, {user.name}</p>
           <button onClick={logout}>Logout</button>
           </>:
        <div className="authent">
          <div className="login">
          <Link to="/login">
            <span>Login</span>
          </Link>
        </div>

        <div className="register">
          <Link to="/register">
            <span>SignUp</span>
          </Link>
        </div>
        </div>
      }
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
