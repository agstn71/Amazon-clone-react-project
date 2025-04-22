
import "./App.css";
import Main from "./Components/MainPage/Main";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut";
import { useRef, useState } from "react";
import { MyContext as MainContext } from "./Context/MyContext";

function App() {
    const [product, setProduct] = useState([]);
    const [cart, setCart] = useState([]);
    const [quantity, setQuantity] = useState();
    const selectQuantity = useRef([]);
  
  return (
    <div className="App">
    <MainContext.Provider value={{product,setProduct,cart,setCart,quantity,setQuantity,selectQuantity}}>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Checkout" element={<CheckOut/>}/>
        </Routes>
      </Router>
      </MainContext.Provider>
     
    </div>
  );
}

export default App;
