import React, { useContext } from "react";
import "./Product.css";
import { MyContext as ProductContext } from "../../Context/MyContext";

function Product({ addToCart, selectQuantity }) {
  const product = useContext(ProductContext);

  return (
    <div>
      <main class="product-container">
        {product.map((item, index) => (
          <div key={index} className="product-card">
            <div className="product-img">
              <img src={item.image} alt="productimage" />
            </div>
            <div className="product-name limit-text-to-2-lines">
              {item.title}
            </div>
            <div className="rating">
              <img
                src={`/images/ratings/rating-${
                  Math.round(item.rating.rate) * 10
                }.png`}
                alt="rating"
              />
              <div className="count">{item.rating.count}</div>
            </div>
            <div className="price">${item.price}</div>
            <div className="product-quantity">
              <select ref={(el) => (selectQuantity.current[index] = el)}>
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
              className="add-to-cart"
              onClick={() => {
                addToCart(item.id, index);
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
