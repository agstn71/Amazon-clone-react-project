
import { createContext, useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Product from './Components/ProductContainer/Product';
import { MyContext as ProductContext } from './Context/MyContext';

function App() {
 const [product,setProduct] = useState([])


 
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setProduct(data))
    .catch(err => alert(err));
  },[])
 
  
  return (
    <div className="App">
      <Header/>
      <ProductContext.Provider value={product}>
      <Product/>
      </ProductContext.Provider>
     
    </div>
  )
};

export default App;
