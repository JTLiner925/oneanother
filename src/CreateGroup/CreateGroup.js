import React, { Component } from "react";
import "./CreateGroup.css";
import STORE from "../Store";

export default class CreateGroup extends Component {
  submitHandler = (e) => {
    e.preventDefault();
    this.props.onCreateGroup(this.state);
  };
  submitJoinHandler = (e) => {
    e.preventDefault();
    this.props.onJoinGroup(this.state);
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log(STORE.groups)
    return (
      <div className="main-body">
        <nav className="main-nav">
          <h2>Group Name</h2>
          <p>{STORE.one_another_users[0].first_name}</p>
        </nav>
        <form
          className="form-template join-form"
          onSubmit={this.submitJoinHandler}
        >
          <h3>Join Group</h3>
          <div>
            {/* create a search/option ? when you search name then valid options pop up */}
            Search Groups
            
              <select  htmlFor="group-search">
                {" "}
                {STORE.groups.map((group, i) => (
                <option
                  key={i}
                  id="group-search"
                  name="group_search"
                  // onChange={this.changeHandler}
                >{group.name}</option>
                
                ))}
              </select>
            
            <button type="submit" className="join-group">
              Join Group
            </button>
          </div>
          <p>display group they picked</p>
        </form>
        <form
          className="form-template create-form"
          onSubmit={this.submitHandler}
        >
          <h3>Create New Group</h3>
          <div>
            <label htmlFor="name">
              Group Name
              <input
                id="name"
                name="name"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="pitch">
              Pitch
              <input
                id="pitch"
                name="pitch"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="leader">
              Leader
              <input
                id="leader"
                name="leader_name"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              Phone Number
              <input
                id="phone"
                name="phone"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="location">
              Location
              <input
                id="location"
                name="location"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="time-date">
              Time and Date
              <input
                id="time-date"
                name="time_date"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="more-info">
              More Info
              <input
                id="more-info"
                name="more_info"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <button type="submit" className="create-group">
            Create Group
          </button>
        </form>
      </div>
    );
  }
}
