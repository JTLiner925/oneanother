import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

export default class LogIn extends Component {
  state = {};
  submitHandler = (e) => {
    e.preventDefault();
    this.props.onLogIn(this.state);
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="container" onSubmit={this.submitHandler}>
        <h1 className="welcome">
          Welcome Back!{" "}
          <span role="img" aria-label="wave" className="wave">
            👋🏾
          </span>
        </h1>
        Email:
        <input
          className="email-input"
          type="email"
          name="user_email"
          onChange={this.changeHandler}
          required
        />
        Password:
        <input
          className="password-input"
          type="password"
          name="user_password"
          onChange={this.changeHandler}
          required
        />
        <p>{this.props.message}</p>
        {/* <a href="#">Forgot Password</a> */}
        <div className='buttons'>
        <button type="submit" className="login">
          Login
        </button>
        <Link to="/signup">
          <button className="signup-now">Sign Up Now!</button>
        </Link>
        </div>
      </form>
    );
  }
}
