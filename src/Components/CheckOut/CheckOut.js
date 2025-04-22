import React, { useContext, useRef } from "react";
import "./CheckOut.css";
import { useLocation } from "react-router-dom";
import { MyContext as MainContext } from "../../Context/MyContext";
import DeliveryDate from "./DeliveryDate";
import useDeliveryOption from "../../Utils/useDeliveryOption";
import dayjs from "dayjs";


function Cart() {
  const location = useLocation();
  const quantityElement = useRef({});
  const inputElement = useRef({});
  const {product,cart,setCart,quantity,setQuantity,selectQuantity} = useContext(MainContext)
 const [deliveryOptions,setDeliveryOptions] = useDeliveryOption()

  const cartUpdate = (id) => {
    console.log("update button clicked");
    console.log(quantityElement);
    quantityElement.current[id].style.display = "none";
    inputElement.current[id].style.display = "inline";
  };

  const quantityUpdate = (event,id) => {
    const quantity = Number(event.target.value);
    const productId = id;
    setCart(
      cart.map((item) => {
        return item.id === productId ? {...item,quantity: quantity}:item
      })
    )
    
  }

  const handleSubmit = (e,id) => {
    e.preventDefault();
    inputElement.current[id].style.display = "none";
    quantityElement.current[id].style.display = "inline";
  }

  const itemDelete = (id) => {
    const productId = id;
     setCart(
      cart.filter((item) => {
        return item.id !== productId
      })
     )
  }
  return (
    <div className="cart-main">
      <div className="header">
        <div className="logo">
          <img
            src="/images/Amazon_logo - 1.svg"
            alt="Amazon Logo"
            class="amazon-header__logo-img"
          />
        </div>
        <div className="items">Checkout ( {quantity} items )</div>
      </div>

      <div className="main">
        <div className="page-title">Review your order</div>
        <div className="checkout-grid">
          <div>
            {cart.map((item) => {
              const matchingItem = product.find(
                (product) => product.id === item.id
              );
              
               let deliveryOption;

               deliveryOptions.forEach((option) => {
                 if(option.id === item. deliveryOptionId) {
                  deliveryOption = option;
                 }
               });

            const today = dayjs();
                   const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
                   const dateString = deliveryDate.format('dddd, MMMM D');


              return (
                <div className="cart-container" key={item.id}>
                  <div className="delivery-date-dis">
                    Delivery date: {dateString}
                  </div>
                  <div className="cart-item-detail">
                    <div className="item-img">
                      <img src={matchingItem.image} alt=" product" />
                    </div>
                    <div className="item-detail">
                      <div className="item-name">{matchingItem.title}</div>
                      <div className="item-price">${matchingItem.price}</div>
                      <div className="item-quantity">
                        <span>
                          Quantity:
                          <span
                            ref={(el) =>
                              (quantityElement.current[item.id] = el)
                            }
                            className={`quantity-dis js-quantity-${item.id}`}
                          >
                            {item.quantity}
                          </span>{" "}
                          <form onSubmit={(e) => handleSubmit(e,item.id)}>
                          <input
                            ref={(el) => (inputElement.current[item.id] = el)}
                            type="text"
                            className="quantity-input"
                            onChange={ (e) => quantityUpdate(e,item.id)}
                          />
                          </form>
                        </span>
                        <span onClick={() => cartUpdate(item.id)}>Update</span>
                        <span onClick={() => itemDelete(item.id)}>Delete</span>
                      </div>
                    </div>
                    <div className="delivery-options">
                      <div className="delivery-option-title">
                        Choose a delivery option:
                      </div>
                      
                      <DeliveryDate item={item}/>
                   
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="order-summary">
            <div className="order-title">Order Summary</div>
            <div className="payment-summary">
              <div className="payment-summary-row">
                <div>Items(3)</div>
                <div className="payment-summary-price">$42.75</div>
              </div>
              <div className="payment-summary-row">
                <div>Shipping $ handling:</div>
                <div className="payment-summary-price">$4.99</div>
              </div>
              <div className="payment-summary-row">
                <div>Total before tax:</div>
                <div className="payment-summary-price">$47.74</div>
              </div>
              <div className="payment-summary-row">
                <div>Estimated tax(10%):</div>
                <div className="payment-summary-price">$4.77</div>
              </div>
            </div>
            <div className="order-total">
              <div className="total-title">Order total</div>
              <div className="total-price">$52.51</div>
            </div>
            <button className="place-order-button">Place your order</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
