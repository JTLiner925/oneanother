import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LogIn.css";

export default class LogIn extends Component {
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
          name="email"
          onChange={this.changeHandler}
        />
        Password:
        <input
          className="password-input"
          type="password"
          name="password"
          onChange={this.changeHandler}
        />
        <a href="#">Forgot Password</a>
        <Link to="/dashboard">
          <button type="submit" className="login">
            Login
          </button>
        </Link>
        <Link to="/signup">
          <button type="submit" className="signup">
            Sign Up
          </button>
        </Link>
        <p className="disclaimer">
          This is a demo! Please do not enter any personal information.
        </p>
      </form>
    );
  }
}
