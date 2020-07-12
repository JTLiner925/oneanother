import React, { Component } from "react";
import { default as NumberFormat } from "react-number-format";
import "./CreateGroup.css";


export default class CreateGroup extends Component {
  state = {
    group: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onCreateGroup(this.state);
  };
  submitJoinHandler = (e) => {
    e.preventDefault();
    let group = this.props.groups.find((g) => {
      return g.group_name === this.state.group_name;
    });
    this.props.onJoinGroup(group);
  };
  navHandler = () => {
    this.props.onHandleHam(this.state);
  };
  changeHandler = (e) => {
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
          <h3>Join Group</h3>
          <p>Search Groups</p>
          <div className='join-div'>
            
            <p>{this.props.message}</p>
            <select name="group_names" onChange={this.changeHandler}>
              {" "}
              <option>Select Group</option>
              {this.props.groups &&
                this.props.groups.map((gr) => (
                  <option
                    className="group-option"
                    id={gr.group_name.split(" ").join("_")}
                    groupid={gr.id}
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
        </form>
        <form className=" create-form" onSubmit={this.submitHandler}>
          <div className='create-inputs'>
          <h3>Create New Group</h3>
          <div className="create-input">
            <label htmlFor="name">
              Group Name
              <input
                id="name"
                name="group_name"
                onChange={this.changeHandler}
              ></input>
            </label>
          </div>
          <div className="create-input">
            <label htmlFor="pitch">
              Pitch
              <textarea
                id="pitch"
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
          <button type="submit" className="create-group">
            Create Group
          </button>
        </form>
      </div>
    );
  }
}
