import React, { Component } from "react";
import "./SignUp.css";

export default class SignUp extends Component {
  state = {
    first_name: "",
    user_email: "",
    user_password: "",
    password_confirmation: "",
  };

  submitHandler = (e) => {
    //check passwords before submitting
    e.preventDefault();
    let pswd = this.state.user_password;
    let checkPswd = this.state.password_confirmation;
    if (pswd === checkPswd) {
      this.props.onSignUp(this.state);
    } else {
      this.setState({
        error: "Passwords do not match, try again.",
      });
    }
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <form className="signup-container" onSubmit={this.submitHandler}>
        <h1 className="signup-header">Sign up</h1>
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
        <label htmlFor="password-confirm"> Confirm Password:</label>
        <input
          id="password-confirm"
          type="password"
          name="password_confirmation"
          onChange={this.changeHandler}
          required
        />
        <label htmlFor="first-name-input">First Name</label>
        <input
          id="first-name-input"
          name="first_name"
          onChange={this.changeHandler}
          required
        ></input>

        <label htmlFor="last-name-input">Last Name</label>
        <input
          id="last-name-input"
          name="last_name"
          onChange={this.changeHandler}
        ></input>

        <label htmlFor="address-input">Address</label>
        <input
          id="address-input"
          name="user_address"
          onChange={this.changeHandler}
        ></input>

        <label htmlFor="bio-input">Tell us about yourself!</label>
        <textarea
          id="bio-input"
          name="user_bio"
          onChange={this.changeHandler}
        ></textarea>
        <p className="error-alert">{this.state.error}</p>

        <div className="buttons">
          <button type="submit" className="signup">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}
