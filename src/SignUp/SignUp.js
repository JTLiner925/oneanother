import React, { Component } from "react";
// import { Link } from 'react-router-dom';
// import store from '../Store'
// import config from '../config'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { fas } from '@fontawesome/free-solid-svg-icons'
import { validateAll } from 'indicative';
import "./SignUp.css";

export default class SignUp extends Component {
  state = {
    first_name:'',
    user_email:'',
    user_password:'',
    password_confirmation:'',
}
  
  submitHandler = (e) => {   
    e.preventDefault()
   console.log(this.state)
  //  const data = this.state;
  //  const rules = {
  //    first_name: 'required|string',
  //   user_email: 'required|email',
  //   user_password: 'required|string|min:6|confirmed'
  //  };

  //  const messages = {
  //    required: ' This {{ field }} is required',
  //    'email.email': 'The email is invalid.',
  //    'user_password.confirmed': 'The password does not match!'

  //  }

  //  validateAll(data, rules, messages)
  //  .then(() => {
  //    console.log('success')
  //    this.props.onSignUp(this.state)
  //  })
  //  .catch(errors => {
  //    console.log(errors);
  //    const formattedErrors = {}
  //    errors.forEach( error => formattedErrors[error.field] = error.message)
  //    this.setState({ errors: formattedErrors })
  //  })
    
  this.props.onSignUp(this.state)

    }
  changeHandler = (e) => { 
    this.setState({
      [e.target.name]:e.target.value
    })
  }
  
  render(){
    // console.log(this.props, this.state)
  return (
    <form className="signup-container" onSubmit={this.submitHandler}>
      <h1>Sign up</h1>
      <label htmlFor="email-input">Email:</label>
      <input id="email-input" type="email" name='user_email'  onChange={this.changeHandler}required />
      <label htmlFor="password-input">Password:</label>
      <input id="password-input" type="password" name='user_password'  onChange={this.changeHandler}required />
      <label htmlFor="password-confirm"> Confirm Password:</label>
      <input id="password-confirm" type="password" name='password_confirmation'  onChange={this.changeHandler}required />
      {/* <a href="#">Forgot Password</a> */}

      <label htmlFor="first-name-input" >
        First Name
      </label>
      <input id="first-name-input" name='first_name' onChange={this.changeHandler}required></input>

      <label htmlFor="last-name-input">Last Name</label>
      <input id="last-name-input" name='last_name' onChange={this.changeHandler}></input>

      <div>
        {/* <FontAwesomeIcon icon={fas}/>
      <i class="far fa-user-circle"></i> */}
        need to code in an image selection
      </div>
      <label htmlFor="address-input" >Address</label>
      <input id="address-input" name='user_address' onChange={this.changeHandler}></input>

      <label htmlFor="bio-input">Tell us about yourself!</label>
      <textarea id="bio-input" name='user_bio' onChange={this.changeHandler}></textarea>

      <div className="buttons">
         <button type='submit' className="signup">Sign Up</button>
   
      </div>
    </form>
  );
}
}
