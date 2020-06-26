import React, { Component } from "react";
import store from "../Store";
import "./CreateEvent.css";
import ApiContext from "../ApiContext";

export default class CreateEvent extends Component {
  state = {
    event: "",
  };
  setEvent = (event) => {
    this.setState({
      event,
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
    fetch("http://localhost:8000/api/events", {
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
      .then((event) => {
        this.setEvent(event);
        this.setState({
          event: event,
        });
      })

      .catch((error) => {
        console.log(error);
        this.setState({ error });
      });
  }
  submitHandler = (e) => {
    e.preventDefault();
    this.props.onCreateEvent(this.state);
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="main-body">
        {/* <nav className="main-nav">
            <h2>Group Name</h2>
            <p>Profile</p>
          </nav> */}
        <form
          className="form-template event-form"
          onSubmit={this.submitHandler}
        >
          <h3>Create New Event</h3>
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
        </form>
      </div>
    );
  }
}
