import React, { Component } from "react";
import HEROKU_API from "../config";
import config from "../config";
import "./CreateEvent.css";

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
 
  componentDidMount() {
    fetch(`https://mighty-brook-70505.herokuapp.com/api/events`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "GET",
    })
      .then((res) => {
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
  //   getBibleVerse = async (eventId) => {
  //     let selectedEvent = this.state.events.find((event) => {
  //       // console.log(event, eventId)
  //       return event.id.toString() == eventId;
  //     });
  //     console.log(selectedEvent)
  //     if (selectedEvent) {
  //       let url = new URL(`${config.API_ENDPOINT}text/`);
  //       url.searchParams.set("q", selectedEvent.bible_passage);
  //       const options = {
  //         method: "GET",

  //         headers: {
  //           Authorization: `Token ${config.API_KEY}`,
  //         },
  //       };

  //     const res = await fetch(url, options)
  //     console.log(res)
  //     switch (res.status) {
  //         case 204:
  //             return null;
  //         case 200: {
  //             const { verse } = await res.json();
  //             return verse;
  //         }
  //         case 404: {
  //             throw new NotFoundError();
  //         }
  //         case 500: {
  //             const { error } = await res.json();
  //             const { message } = error;
  //             throw new Error(message);
  //         }
  //         default:
  //             break;
  //     }
  // }}

  submitHandler = (e) => {
    e.preventDefault();

    let group = this.props.groups.find((g) => {
      return g.group_name === this.state.group_event;
    });

    this.props.onCreateEvent(this.state);
  };

  navHandler = () => {
    this.props.onHandleHam(this.state);
  };
  changeHandler = (e) => {
    if (e.target.name === "group_name") {
      let element = document.querySelector(
        `#${e.target.value.split(" ").join("_")}`
      );
      let groupid;
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
    const { userId } = this.props;
    return (
      <div className="event-body" onClick={this.navHandler}>
       
        <form className="event-form" onSubmit={this.submitHandler}>
          <h3>Create New Event</h3>
          <div>
            Search Groups
            <select
              className="event-select"
              name="group_name"
              onChange={this.changeHandler}
            >
              {" "}
              <option>Select Group</option>
              {this.props.groups &&
                this.props.groups.map((gr) => {
                  let userIds = gr.user_ids;
                  for (let i = 0; i < userIds.length; i++) {
                    let idsArray = userIds[i];
                    console.log(idsArray)
                    if (idsArray && idsArray == userId) {
                      return (
                        <option
                          id={gr.group_name.split(" ").join("_")}
                          groupid={gr.id}
                          key={gr.id}
                        >
                          {gr.group_name}
                        </option>
                      );
                    }
                  }
                })}
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
