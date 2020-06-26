import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";

import "./CreateGroup.css";
import STORE from "../Store";

export default class CreateGroup extends Component {
  state = {
    group: "",
  };
  setGroup = (group) => {
    this.setState({
      group,
      error: null,
    });
  };

  componentDidMount() {
    
    // let groupId = this.state.group.id
    fetch("http://localhost:8000/api/groups", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then((group) => {
        this.setGroup(group);
        this.setState({
          group: group,
        });
      })
      
      .catch((error) => {
        console.log(error);
        this.setState({ error });
      })
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.props.onCreateGroup(this.state);
  };
  submitJoinHandler = (e) => {
    //post for joining group
    e.preventDefault();
    let group = this.state.group.find((g)=>{
      return  g.group_name === this.state.group_name
    })
    console.log(group)
    this.props.onJoinGroup(group);
  };

  changeHandler = (e) => {
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="main-body">
        {/* <nav className="main-nav">
          <h2>Group Name</h2>
          <p>{STORE.one_another_users[0].first_name}</p>
        </nav> */}
        <form
          className="form-template join-form"
          onSubmit={this.submitJoinHandler}
        >
          <h3>Join Group</h3>
          <div>
            {/* create a search/option ? when you search name then valid options pop up */}
            Search Groups
            <select name="group_name" onChange={this.changeHandler}>
              {" "}
              <option>Select Group</option>
              {this.state.group &&
                this.state.group.map((gr) => (
                  <option
                    key={gr.id}
                    
                    
                  >
                    {gr.group_name}
                  </option>
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
                name="group_name"
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
          {/* <div>
            <label htmlFor="leader">
              Leader
              <input
                id="leader"
                name="group_leader"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="leader">
              Leader
              <input
                id="leader"
                name="group_leader"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div> */}
          <div>
            <label htmlFor="phone">
              Phone Number
              <input
                id="phone"
                name="leader_phone"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div>
            <label htmlFor="location">
              Location
              <input
                id="location"
                name="group_location"
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
