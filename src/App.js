
import "./App.css";
import Main from "./Components/MainPage/Main";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import CheckOut from "./Components/CheckOut/CheckOut";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/Checkout" element={<CheckOut/>}/>
        </Routes>
      </Router>
     
    </div>
  );
}

export default App;
