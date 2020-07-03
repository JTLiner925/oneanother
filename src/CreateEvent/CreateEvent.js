import React, { Component } from "react";
import store from "../Store";
import HEROKU_API from '../config'
import "./CreateEvent.css";
import ApiContext from "../ApiContext";

export default class CreateEvent extends Component {
  state = {
    event: "",
    group: "",
  };
  setEvent = (event, group) => {
    this.setState({
      event,
      group,
      error: null,
    });
  };
  // static defaultProps = {
  //   history: {
  //     push: () => {},
  //   },
  // };
  // static contextType = ApiContext;
  componentDidMount() {
    // let groupId = this.state.group.id
    fetch(`https://mighty-brook-70505.herokuapp.com/api/events`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "GET",
    })
      .then((res) => {
        // console.log(res);
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then((event, group) => {
        this.setState({
          event: event,
          group: group,
        });
        this.setEvent(event);
      })

      .catch((error) => {
        console.log(error);
        this.setState({ error });
      });
  }
  submitHandler = (e) => {
    e.preventDefault();
    let group = this.props.groups.find((g) => {
      return g.group_name === this.state.group_event;
    });
    // console.log(group);
    this.props.onCreateEvent(this.state);
  };
  navHandler = () => {
    this.props.onHandleHam(this.state);
  };
  changeHandler = (e) => {
    // console.log(e.target.id);
    if (e.target.name === "group_name") {
      let element = document.querySelector(
        `#${e.target.value.split(" ").join("_")}`
      );
      // console.log(element.getAttribute('groupid'))
      let groupid;
      // console.log(e.target.value, element)
      groupid = element.getAttribute("groupid");

      this.setState({
        [e.target.name]: e.target.value,
        groupid: groupid,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };
  render() {
    // console.log(this.state, this.context);

    return (
      <div className="event-body" onClick={this.navHandler}>
        {/* <nav className="main-nav">
            <h2>Group Name</h2>
            <p>Profile</p>
          </nav> */}
        <form className="event-form" onSubmit={this.submitHandler}>
          <h3>Create New Event</h3>
          <div>
            {/* create a search/option ? when you search name then valid options pop up */}
            Search Groups
            <select name="group_name" onChange={this.changeHandler}>
              {" "}
              <option>Select Group</option>
              {this.props.groups &&
                this.props.groups.map((gr) => (
                  <option
                    id={gr.group_name.split(" ").join("_")}
                    groupid={gr.id}
                    key={gr.id}
                  >
                    {gr.group_name}
                  </option>
                ))}
            </select>
          </div>
          <div className="event-input">
            <div>
              <label htmlFor="announcements">
                Announcements
                <textarea
                  id="announcements"
                  name="announcements"
                  onChange={this.changeHandler}
                ></textarea>
              </label>
            </div>
            <div>
              <label htmlFor="needed-items">
                Needed Items
                <textarea
                  id="needed-items"
                  name="needed_items"
                  onChange={this.changeHandler}
                ></textarea>
              </label>
            </div>
            <div>
              <label htmlFor="date">
                Date
                <input
                  id="date"
                  name="event_date"
                  onChange={this.changeHandler}
                ></input>
              </label>
            </div>
            <div>
              <label htmlFor="time">
                Time
                <input
                  id="time"
                  name="event_time"
                  onChange={this.changeHandler}
                ></input>
              </label>
            </div>
            <div className="lesson">
              <h3>Lesson</h3>
              <div>
                <label htmlFor="lesson-title">
                  Lesson Title
                  <input
                    id="lesson-title"
                    name="lesson_title"
                    onChange={this.changeHandler}
                  ></input>
                </label>
              </div>
              {/* <div>
              <label htmlFor="lesson-summary">
                Lesson Summary
                <input
                  id="lesson-summary"
                  name="lesson_summary"
                  onChange={this.changeHandler}
                ></input>
              </label>
              </div> */}
              <div>
                <label htmlFor="bible-passage">
                  Bible Passage
                  <input
                    id="bible-passage"
                    name="bible_passage"
                    onChange={this.changeHandler}
                  ></input>
                </label>
              </div>
            </div>
            <div>
              <h3>Questions</h3>
              <div>
                <label htmlFor="question">
                  Question
                  <textarea
                    id="question"
                    name="question"
                    onChange={this.changeHandler}
                  ></textarea>
                </label>
                {/* <button type="submit" className="add-another-question">
              Add Another Question
            </button> */}
              </div>
            </div>
            <button type="submit" className="create-event">
              Create Event
            </button>
          </div>
        </form>
      </div>
    );
  }
}
