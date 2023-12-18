import React from 'react'
import "./adminlog.css";
const Adminlog = () => {
  return (
    <div className="main">
      <div className="intro">
        <h3>Sign up</h3>
        <p>It's quick and easy.</p>
      </div>
      <div className="form-container">
        <div className="form">
          <div className="name-inputs">
            <input type="text" name="fname" placeholder="First name" />
            <input type="text" name="sname" placeholder="Surname" />
          </div>
          <input type="text" name="email" placeholder="Email address" />
          <input type="password" name="password" placeholder=" password" />
          <input type="password" name="password" placeholder="confirm password" />

          <input type="button" id="button" value="Submit" />
          
        </div>
      </div>
      <div className="logo-end">
      <h2>CareGroove</h2> 
      <p>Your mental health assistant.</p>
      </div>
    </div>
  )
}

export default Adminlog