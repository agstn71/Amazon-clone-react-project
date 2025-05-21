import React, { useState } from 'react'
import './login.css'
import { registerUser } from '../../services/authService'
import { loginUser } from '../../services/authService';
import { useNavigate } from 'react-router-dom';

function Login() {

   const navigate =  useNavigate();
    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await loginUser({ email, password });

    if (result.token) {
      alert("Login successful!");
      localStorage.setItem("token", result.token); // save token for later use
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate('/')
    } else {
      alert(result.message || "Login failed");
    }
  };
 return (
    <div className='sign-up-container'>
        <div className="img-section">
            <div className="img-container">
                <img src="/images/Amazon_logo - 1.svg" alt="logo" />
            </div>
        </div>
         <div className="main-form">
        <div className="form-div">
            <h3>Login</h3>
            <form onSubmit={handleLogin}>

                <div className="form-control">
                <label>Email</label><br/>
                <input type="email" name="email" 
                onChange={(e) => setEmail(e.target.value)}></input>
               </div>

                <div className="form-control">
                <label>password</label><br/>
                <input type="password" name="password"  
                onChange={(e) => setPassword(e.target.value)}></input>
               </div>

                 {/* <div className="form-control">
                <label>confirm password</label><br/>
                <input type="password" name="cpassword" ></input>
               </div> */}

               <button type="submit">Sign In</button>
            </form>
        </div>
        </div>
      
    </div>
  )
}

export default Login
