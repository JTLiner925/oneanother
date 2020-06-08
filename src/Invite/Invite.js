import React, { Component } from "react";
import "./Invite.css";

export default class Invite extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    this.props.onInvite(this.state);
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="main-body">
        <nav className="main-nav">
          <h2>Group Name</h2>
          <p>Profile</p>
        </nav>
        <form className="form-template" onSubmit={this.submitHandler}>
          <h3>Invite your friends!!</h3>
          <div>
            <label htmlFor="first-name">
              First Name
              <input id="first-name" name="first_name_invite"onChange={this.changeHandler} required></input>
            </label>
            <label htmlFor="email-invite">
              Email
              <input id="email-invite" name="email_invite" onChange={this.changeHandler} required></input>
            </label>
            <button type="submit" className="add-invite">
              Invite More
            </button>
          </div>
          <button type="submit" className="send-invite">
            Send Invite
          </button>
        </form>
       </div>
    );
  }
}
