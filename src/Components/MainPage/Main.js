import React, { useEffect, useRef, useState } from 'react'
import Header from '../Header/Header'
import Product from '../ProductContainer/Product'
import { MyContext as ProductContext } from '../../Context/MyContext';
import addToCart from '../../Utils/addToCart';

function Main() {

  const [product, setProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState();
  const selectQuantity = useRef([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((err) => alert(err));

      console.log("fetching data");
      return () => {
        // 👈 this is the cleanup function (like componentWillUnmount)
        console.log('Component is unmounting...');
      };
  }, []);
 

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
       <Header quantity={quantity} />
      <ProductContext.Provider value={product}>
        <Product
          addToCart={(productId, index) => {
            addToCart(productId, index, cart, setCart, selectQuantity);
          }}
          selectQuantity={selectQuantity}
        />
      </ProductContext.Provider>
    </>
  )
}

export default Main
