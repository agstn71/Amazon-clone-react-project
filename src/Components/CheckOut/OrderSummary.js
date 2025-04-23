import React, { useContext } from 'react'
import { MyContext as MainContext } from "../../Context/MyContext";
import useDeliveryOption from "../../Data/useDeliveryOption";
import { formatCurrency } from "../../Data/money";
function OrderSummary() {
     const [deliveryOptions,setDeliveryOptions] = useDeliveryOption()
     const {product,cart} = useContext(MainContext)
    let totalPrice = 0;
    let shippingTotal = 0;
    let totalBeforTax =0;
    let taxCents = 0
      cart.forEach((cartItem) => {
                      let matchingItem;
                      product.forEach((productItem) => {
                         if(cartItem.id === productItem.id) {
                          matchingItem = productItem;
                         }
                      })
                     totalPrice += matchingItem.price * cartItem.quantity;
    
                     let  deliveryOption
    
                     deliveryOptions.forEach((option) => {
                      
                        if (option.id === cartItem.deliveryOptionId) {
                          deliveryOption = option
                        }
                     })
                    let currency= formatCurrency(deliveryOption.priceCents);
                    shippingTotal += parseFloat(currency);
                    
                     
                     
                  })
                  totalBeforTax = shippingTotal+ totalPrice;
                 taxCents = totalBeforTax * 0.1
                 
  return (
    <div>
       <div className="order-summary">
            <div className="order-title">Order Summary</div>
            <div className="payment-summary">
              <div className="payment-summary-row">
                <div>Items(3)</div>
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
                <div className="payment-summary-price">${taxCents.toFixed(2)}</div>
              </div>
            </div>
            <div className="order-total">
              <div className="total-title">Order total</div>
              <div className="total-price">$52.51</div>
            </div>
            <button className="place-order-button">Place your order</button>
          </div>
    </div>
  )
}

export default OrderSummary
