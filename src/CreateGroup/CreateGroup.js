import React, { Component } from "react";
import { default as NumberFormat } from "react-number-format";
import "./CreateGroup.css";

export default class CreateGroup extends Component {
  state = {
    group: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    //create group from dashboard
    this.props.onCreateGroup(this.state);
  };
  submitJoinHandler = (e) => {
    e.preventDefault();
    let group = this.props.groups.find((g) => {
      return g.group_name === this.state.group_name;
    });
    //join group from dashboard
    this.props.onJoinGroup(group);
  };
  navHandler = () => {
    this.props.onHandleHam(this.state);
  };
  changeHandler = (e) => {
    //grabs the group name to join
    if (e.target.name === "group_names") {
      let element = document.querySelector(
        `#${e.target.value.split(" ").join("_")}`
      );
      let groupid;

      groupid = element.getAttribute("groupid");

      this.setState({
        group_name: e.target.value,
        groupid: groupid,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  render() {
    return (
      <div className="create-body" onClick={this.navHandler}>
        <form className=" join-form" onSubmit={this.submitJoinHandler}>
          <h2>Join Group</h2>
          <div className="join-div">
            <p className="error-alert">{this.props.message}</p>
            <label htmlFor="group-names">Search Groups</label>
            <select
              id="group-names"
              name="group_names"
              onChange={this.changeHandler}
            >
              {" "}
              <option>Select Group</option>
              {this.props.groups &&
                this.props.groups.map((gr) => (
                  <option
                    label={gr.group_name}
                    className="group-option"
                    id={gr.group_name.split(" ").join("_")}
                    groupid={gr.id}
                    key={gr.id}
                  >
                    {gr.group_name}
                  </option>
                ))}
            </select>
            <div className="join-group">
              <button type="submit">Join Group</button>
            </div>
          </div>
        </form>
        <form className=" create-form" onSubmit={this.submitHandler}>
          <div className="create-inputs">
            <h3>Create New Group</h3>
            <div className="create-input">
              <label htmlFor="name">
                Group Name
                <input
                  id="name"
                  name="group_name"
                  onChange={this.changeHandler}
                  required
                ></input>
              </label>
            </div>
            <div className="create-input">
              <label htmlFor="pitch-text">
                Pitch - What is your group about?
                <textarea
                  id="pitch-text"
                  name="pitch"
                  onChange={this.changeHandler}
                ></textarea>
              </label>
            </div>

            <div className="create-input">
              <label htmlFor="phone">
                Phone Number
                <NumberFormat
                  id="phone"
                  name="leader_phone"
                  onChange={this.changeHandler}
                  format=" (###) ###-####"
                  mask="_"
                />
              </label>
            </div>
            <div className="create-input">
              <label htmlFor="location">
                Location
                <input
                  id="location"
                  name="group_location"
                  onChange={this.changeHandler}
                ></input>
              </label>
            </div>
            <div className="create-input">
              <label htmlFor="time-date">
                Time and Date
                <input
                  id="time-date"
                  name="time_date"
                  onChange={this.changeHandler}
                ></input>
              </label>
            </div>
            <div className="create-input">
              <label htmlFor="more-info">
                More Info
                <textarea
                  id="more-info"
                  name="more_info"
                  onChange={this.changeHandler}
                ></textarea>
              </label>
            </div>
          </div>
          <p className="error-alert">{this.props.createMessage}</p>
          <button type="submit" className="create-group">
            Create Group
          </button>
        </form>
      </div>
    );
  }
}
