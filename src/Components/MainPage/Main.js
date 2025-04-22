import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '../Header/Header'
import Product from '../ProductContainer/Product'
import { MyContext as MainContext } from '../../Context/MyContext';
import addToCart from '../../Utils/addToCart';

function Main() {

  const {product,setProduct,cart,setCart,quantity,setQuantity,selectQuantity} = useContext(MainContext)

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => alert(err));

      console.log("fetching data");
      
  }, []);
 
console.log(product)
  useEffect(() => {
    setQuantity(() => {
      return cart.reduce((sum, item) => {
        return (sum = sum + item.quantity);
      }, 0);
    });
    console.log("cart updated")
  }, [cart]);

  return (
    <>
       <Header  />

        <Product
          addToCart={(productId, index) => {
            addToCart(productId, index, cart, setCart, selectQuantity);
          }}
          
        />

    </>
  )
}

export default Main
