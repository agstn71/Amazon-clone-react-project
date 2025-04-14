import React, { useContext, useState } from "react";
import "./Product.css";
import { MyContext as ProductContext } from "../../Context/MyContext";

function Product() {
  const product = useContext(ProductContext);

  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const matchingItem = cart.find((item) => item.id === productId);


    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      setCart([...cart, { id: productId, quantity: 1 }]);
  
    }
  };

  console.log(cart);
  return (
    <div>
      <main class="product-container">
        {product.map((item, index) => (
          <div key={index} className="product-card">
            <div className="product-img">
              <img src={item.image} alt="productimage" />
            </div>
            <div className="product-name">{item.title}</div>
            <div className="rating">
              <img
                src={`/images/ratings/rating-${
                  Math.round(item.rating.rate) * 10
                }.png`}
                alt="rating"
              />
              <div className="count">{item.rating.count}</div>
            </div>
            <div className="product-quantity">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="spacer"></div>
            <button
              className="add-to-cart js-add-to-cart"
              onClick={() => {
                addToCart(item.id);
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Product;

