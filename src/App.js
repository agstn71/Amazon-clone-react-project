

import Main from "./Components/MainPage/Main";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut";
import { useRef, useState } from "react";
import { MyContext as MainContext } from "./Context/MyContext";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Orders from "./Order/Orders";
import "./App.css";

function App() {
    const [product, setProduct] = useState([]);
 
    const [quantity, setQuantity] = useState();
    
  
  return (
    <div className="App">
    <MainContext.Provider value={{product,setProduct,quantity,setQuantity}}>
      <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/checkout" element={<CheckOut/>}/>
          <Route path="/orders" element={<Orders/>}/>
        </Routes>
      </Router>
      </Provider>
      </MainContext.Provider>
     
    </div>
  );
}

export default App;
