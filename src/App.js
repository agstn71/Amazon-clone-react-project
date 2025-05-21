

import Main from "./Components/MainPage/Main";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut";
import { useRef, useState } from "react";
import { MyContext as MainContext } from "./Context/MyContext";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";
import Orders from "./Components/Order/Orders";
import Tracking from "./Components/Tracking/Tracking";
import "./App.css";
import SignUpPage from "./Components/SignUp/SignUpPage";
import Login from "./Components/Login/Login";


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
          <Route path="/tracking" element={<Tracking/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<SignUpPage/>}/>
        </Routes>
      </Router>
      </Provider>
      </MainContext.Provider>
     
    </div>
  );
}

export default App;
