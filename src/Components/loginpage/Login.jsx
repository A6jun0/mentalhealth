import React from 'react'
import "./login.css";
const Login = () => {
  return (
    <div className="main">
      <div className="intro">
        <h3>Sign up</h3>
        <p>It's quick and easy.</p>
      </div>
      <div className="form-container">
        <div className="form">
          <div className="name-inputs">
            <input type="text" name="fname" placeholder="username" />
          </div>
          <p id='or'>or</p>
          <input type="text" name="email" placeholder="Email address" />
          <input type="password" name="password" placeholder=" password" />
          <input type="button" id="button" value="login" /><p id='or'>or</p>
         <input type="button" id="button" value="sign up" onClick={()=>console.log("Clicked")} />
        </div>
      </div>
      <div className="logo-end">
      <h2>CareGroove</h2> 
      <p>Your mental health assistant.</p>
      </div>
    </div>
  )
}

export default Login