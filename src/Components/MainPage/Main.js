import React, { useContext, useEffect, useRef, useState } from 'react'
import Header from '../Header/Header'
import Product from '../ProductContainer/Product'
import { MyContext as MainContext } from '../../Context/MyContext';

import { useSelector } from 'react-redux';

function Main() {

  const {product,setProduct,quantity,setQuantity} = useContext(MainContext)
  const cart = useSelector((state) => state.cart.cartItem);

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

        <Product />

    </>
  )
}

export default Main
