import React, { Component } from "react";
import "./PrayerRequests.css";

export default class PrayerRequests extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    this.props.onPrayerRequest(this.state);
  };
  submitPrayHandler = (e) => {
    e.preventDefault();
    this.props.onPrayerEncourage(this.state);
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  changeEncourageHandler = (e) => {
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
        <form className="form-template join-form" onSubmit={this.submitHandler}>
          <h3>Prayer Request</h3>
          <div>
            {/* create a search/option ? when you search name then valid options pop up */}
            <label htmlFor="prayer-request">
              {" "}
              <input
                id="prayer-request"
                name="prayer_request"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <button type="submit" className="submit-request">
            Submit
          </button>
        </form>
        <form
          className="form-template create-form"
          onSubmit={this.submitPrayHandler}
        >
          <h3>Group Prayer Requests</h3>
          <div>
            <p>Name</p>
            <p>Date Requested</p>
            <p>Request</p>

            <label htmlFor="pray-encourage">
              Pray / Encourage
              <input
                id="pray-encourage"
                name="pray_encourage"
                onChange={this.changeEncourageHandler}
              ></input>
            </label>
            <button type="submit" className="submit-prayer">
              Submit
            </button>
            <p>previous comments/prayers to encourage</p>
          </div>
        </form>
      </div>
    );
  }
}
