import React from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { fas } from '@fontawesome/free-solid-svg-icons'
import "./SignUp.css";

export default function SignUp() {
  return (
    <form className="signup-container">
      <h1>Sign up</h1>
      <label htmlFor="email-input">Email:</label>
      <input id="email-input" type="email" />
      <label htmlFor="password-input">Password:</label>
      <input htmlFor="password-input" type="password" />
      <a href="#">Forgot Password</a>

      <label htmlFor="first-name-input">First Name</label>
      <input id="first-name-input"></input>

      <label htmlFor="last-name-input">Last Name</label>
      <input id="last-name-input"></input>

      <div>
        {/* <FontAwesomeIcon icon={fas}/>
      <i class="far fa-user-circle"></i> */}
        need to code in an image selection
      </div>
      <label htmlFor="address-input">Address</label>
      <input id="address-input"></input>

      <label htmlFor="bio-input">Tell us about yourself!</label>
      <input id="bio-input"></input>

      <div className="buttons">
        <Link to="/dashboard">
          <button className="signup">Sign Up</button>
        </Link>
      </div>
    </form>
  );
}
