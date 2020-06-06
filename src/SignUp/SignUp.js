import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { fas } from '@fontawesome/free-solid-svg-icons'
import "./SignUp.css";

export default class SignUp extends Component {

  submitHandler = (e) => {
   
    e.preventDefault()
    this.props.onSignUp(this.state)
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  render(){
    
  return (
    <form className="signup-container" onSubmit={this.submitHandler}>
      <h1>Sign up</h1>
      <label htmlFor="email-input">Email:</label>
      <input id="email-input" type="email" name='email'  onChange={this.changeHandler}required />
      <label htmlFor="password-input">Password:</label>
      <input id="password-input" type="password" name='password'  onChange={this.changeHandler}required />
      <a href="#">Forgot Password</a>

      <label htmlFor="first-name-input" required>
        First Name
      </label>
      <input id="first-name-input" name='first_name' onChange={this.changeHandler}></input>

      <label htmlFor="last-name-input">Last Name</label>
      <input id="last-name-input" name='last_name' onChange={this.changeHandler}></input>

      <div>
        {/* <FontAwesomeIcon icon={fas}/>
      <i class="far fa-user-circle"></i> */}
        need to code in an image selection
      </div>
      <label htmlFor="address-input" >Address</label>
      <input id="address-input" name='address' onChange={this.changeHandler}></input>

      <label htmlFor="bio-input">Tell us about yourself!</label>
      <input id="bio-input" name='bio' onChange={this.changeHandler}></input>

      <div className="buttons">
          <button type='submit' className="signup">Sign Up</button>
   
      </div>
    </form>
  );
}
}
