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
        <label htmlFor="email-input">Email:</label>
        <input
          id="email-input"
          type="email"
          name="user_email"
          onChange={this.changeHandler}
          required
        />
        <label htmlFor="password-input">Password:</label>
        <input
          id="password-input"
          type="password"
          name="user_password"
          onChange={this.changeHandler}
          required
        />
        <p className="error-alert">{this.props.message}</p>
        <div className="buttons">
          <button
            type="submit"
            className="login"
            onClick={this.props.resetError}
          >
            Login
          </button>
          <Link to="/signup" onClick={this.props.resetError}>
            <button className="signup-now">Sign Up Now!</button>
          </Link>
        </div>
      </form>
    );
  }
}
