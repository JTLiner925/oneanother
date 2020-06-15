import React, { Component } from "react";
import { Link } from 'react-router-dom';
import store from '../Store'
import config from '../config'
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { fas } from '@fontawesome/free-solid-svg-icons'
import "./SignUp.css";

export default class SignUp extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user_email:"",
  //     user_password:"",
  //     first_name:"",
  //     last_name:"",
  //     user_address:"",
  //     user_bio:""
  //   };
  // }
  // addUser()
  submitHandler = (e) => {   
    e.preventDefault()
    // const one_another_user = (({user_email, user_password, first_name, last_name, user_address, user_bio}) => ({user_email, user_password, first_name, last_name, user_address, user_bio}))(this.state);
    // const store = this.props.store.one_another_user
    this.props.onSignUp(this.state)
  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(one_another_user),
  //     headers: {
  //        'Authorization': `Token ${config.API_KEY}`
  //     }
  //   }
  //   fetch(store, options)
  //   .then(res => {
  //     if(!res.ok) {
  //       throw new Error('Something went wrong, please try again later');
  //     }
  //     return res.json();
  //   })
  //   .then(data => {
  //     this.setState({
  //       user_email:"",
  //     user_password:"",
  //     first_name:"",
  //     last_name:"",
  //     user_address:"",
  //     user_bio:""
  //     });
  //     this.props.handleAdd(one_another_user);
  //   })
  //   .catch(err => {
  //     this.setState({
  //       error: err.message
  //     });
  //   });
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
      <input id="email-input" type="email" name='user_email'  onChange={this.changeHandler}required />
      <label htmlFor="password-input">Password:</label>
      <input id="password-input" type="password" name='user_password'  onChange={this.changeHandler}required />
      <a href="#">Forgot Password</a>

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
      <input id="bio-input" name='user_bio' onChange={this.changeHandler}></input>

      <div className="buttons">
         <Link to='/dashboard'><button type='submit' className="signup">Sign Up</button></Link> 
   
      </div>
    </form>
  );
}
}
