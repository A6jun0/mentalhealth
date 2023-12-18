import React from "react";
import "./register.css"
const Register = () => {
  return (
    <div className="main2">
      <div className="intro2">
        <h3>Sign up</h3>
        <p>It's quick and easy.</p>
      </div>
      <div className="form-container2">
        <div className="form2">
          <div className="name-inputs2">
            <input type="text" name="fname" placeholder="First name" />
            <input type="text" name="sname" placeholder="Surname" />
          </div>
          <input type="text" name="email" placeholder="Email address" />
          <input type="password" name="password" placeholder=" password" />
          <input type="password" name="password" placeholder="confirm password" />
          <p>Date of birth</p>
          <input type="date" name="date" placeholder="Date of birth" />
          <p>Gender</p>
          <label htmlFor="male">
            <input type="radio" id="male" name="gender" value="male" />
            Male
          </label>
          <label htmlFor="female">
            <input type="radio" id="female" name="gender" value="female" />
            Female
          </label>
          <label htmlFor="other">
            <input type="radio" id="other" name="gender" value="other" />
            Other
          </label>
          <input type="button" id="button" value="Submit" />
          <small>
            &#x1F6C8; By click on submit, you are agreeing with the{" "}
            <a href="">terms and services </a>of our product.
          </small>
        </div>
      </div>
      <div className="logo-end2">
      <h2>CareGroove</h2> 
      <p>Your mental health assistant.</p>
      </div>
    </div>
  );
};

export default Register;
