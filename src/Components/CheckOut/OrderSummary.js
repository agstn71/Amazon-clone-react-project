import React, { useContext, useState } from "react";
import { MyContext as MainContext } from "../../Context/MyContext";
import useDeliveryOption from "../../Data/useDeliveryOption";
import { formatCurrency } from "../../Data/money";
import { useDispatch, useSelector } from "react-redux";
import { placeYourOrder } from "../../Redux/orderSlice";
import { clearCart } from "../../Redux/CartSlice";
import { useNavigate } from "react-router-dom";

function OrderSummary({ quantity }) {
  const [deliveryOptions, setDeliveryOptions] = useDeliveryOption();
  const { product } = useContext(MainContext);
  const dispatch =  useDispatch()
 const navigate = useNavigate()
  const cart = useSelector((state) => state.cart.cartItem);
  const orders = useSelector((state) => state.orders.orderItems)
    

  let totalPrice = 0;
  let shippingTotal = 0;
  let totalBeforTax = 0;
  let taxCents = 0;
  let totalAfterTax = 0;

  
console.log(orders)
  cart.forEach((cartItem) => {
    let matchingItem;
    product.forEach((productItem) => {
      if (cartItem.id === productItem.id) {
        matchingItem = productItem;
      }
    });
    totalPrice += Number((matchingItem.price * cartItem.quantity).toFixed(2));

    let deliveryOption;

    deliveryOptions.forEach((option) => {
      if (option.id === cartItem.deliveryOptionId) {
        deliveryOption = option;
      }
    });
    let currency = formatCurrency(deliveryOption.priceCents);
    shippingTotal += Number(currency);
  });

  totalBeforTax = shippingTotal + totalPrice;
  taxCents = Number((totalBeforTax * 0.1).toFixed(2));
  totalAfterTax = Number((totalBeforTax + taxCents).toFixed(2));

  const handlePlaceOrder = (totalCost,cart) => {
    dispatch(placeYourOrder({ totalCost,cart }));
  dispatch(clearCart());

  navigate("/orders")
  }
  

  return (
    <>
      <div className="order-summary">
        <div className="order-title">Order Summary</div>
        <div className="payment-summary">
          <div className="payment-summary-row">
            <div>Items({quantity})</div>
            <div className="payment-summary-price">${totalPrice}</div>
          </div>
          <div className="payment-summary-row">
            <div>Shipping $ handling:</div>
            <div className="payment-summary-price">${shippingTotal}</div>
          </div>
          <div className="payment-summary-row">
            <div>Total before tax:</div>
            <div className="payment-summary-price">${totalBeforTax}</div>
          </div>
          <div className="payment-summary-row">
            <div>Estimated tax(10%):</div>
            <div className="payment-summary-price">${taxCents}</div>
          </div>
        </div>
        <div className="order-total">
          <div className="total-title">Order total</div>
          <div className="total-price">${totalAfterTax}</div>
        </div>
        <button className="place-order-button" onClick={() => {handlePlaceOrder(totalAfterTax,cart)}}>
          Place your order
        </button>
      </div>
      </>
  );
}

export default OrderSummary;
