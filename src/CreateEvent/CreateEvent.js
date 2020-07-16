import React, { Component } from "react";
import config from "../config";
import "./CreateEvent.css";

export default class CreateEvent extends Component {
  state = {
    event: "",
    group: "",
    passage: "",
    needed_items: [],
    item_value: "",
    question: [],
    question_value: "",
  };
  setEvent = (event, group) => {
    this.setState({
      event,
      group,
      error: "",
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
        this.setState({ error });
      });
  }

  submitHandler = (e) => {
    this.props.resetError();
    this.setState({
      error: "",
    });
    e.preventDefault();

    let checkVerse = this.state.bible_passage;

    let url = new URL(`${config.API_ENDPOINT}text/`);
    url.searchParams.set("q", checkVerse);
    url.searchParams.set("include-passage-reference", true);

    const options = {
      method: "GET",

      headers: {
        Authorization: `Token ${config.API_KEY}`,
      },
    };

    fetch(url.href, options)
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        if (resData.passages.length === 0) {
          //fix bible passages
          throw new Error(
            'Please check Bible passage, write out in long form. i.e. "Matthew 28:18-20"'
          );
        }
        if (
          //select group before submitting
          this.state.group_name === "Select Group" ||
          this.state.group_name === undefined
        ) {
          throw new Error("Must Select Group");
        }
        this.props.onCreateEvent(this.state);
      })
      .catch((error) => {
        this.setState({
          error: error.message,
        });
      });
  };

  navHandler = () => {
    this.props.onHandleHam(this.state);
  };
  changeHandler = (e) => {
    this.props.resetError();
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
  onChangeItemValue = (event) => {
    this.setState({ item_value: event.target.value });
  };
  onChangeQuestionValue = (event) => {
    this.setState({ question_value: event.target.value });
  };
  addItemHandler = () => {
    this.setState((state) => {
      const needed_items = [...state.needed_items, state.item_value];

      return {
        needed_items,
        item_value: "",
      };
    });
  };
  removeItemHandler = (i) => {
    this.setState({
      needed_items: this.state.needed_items.filter((item, j) => i !== j)

      
    });
  };

  addQuestionHandler = () => {
    this.setState((state) => {
      const question = [...state.question, state.question_value];

      return {
        question,
        question_value: "",
      };
    });
  };
  removeQuestionHandler = (i) => {
    this.setState({
      question: this.state.question.filter((question, j) => i !== j)
    });
  };
  render() {
    console.log(this.state);
    const { userId } = this.props;
    return (
      <div className="event-body" onClick={this.navHandler}>
        <form className="event-form" onSubmit={this.submitHandler}>
          <h2>Create New Event</h2>
          <div>
            <label htmlFor="event-select">
              Search Groups
              <select
                id="event-select"
                name="group_name"
                onChange={this.changeHandler}
                required
              >
                {" "}
                <option>Select Group</option>
                {this.props.groups &&
                  this.props.groups.map((gr) => {
                    let userIds = gr.user_ids;
                    for (let i = 0; i < userIds.length; i++) {
                      let idsArray = userIds[i];
                      if (idsArray && idsArray == userId) {
                        return (
                          <option
                            id={gr.group_name.split(" ").join("_")}
                            groupid={gr.id}
                            key={gr.id}
                            required
                          >
                            {gr.group_name}
                          </option>
                        );
                      }
                    }
                  })}
              </select>
            </label>
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
            <div className="needed-input-div">
              <label htmlFor="needed-items">
                Needed Items
                <input
                  id="needed-items"
                  name="needed_items"
                  type="text"
                  value={this.state.item_value}
                  onChange={this.onChangeItemValue}
                ></input>
                <button
                  id="add-button"
                  type="button"
                  onClick={this.addItemHandler}
                  disabled={!this.state.item_value}
                >
                  +
                </button>
              </label>
              <ul className=" list-items">
                {(this.state.needed_items || []).map((item, index) => {
                  return (
                    <div key={index} className="list-div">
                      <button
                        id="delete-button"
                        onClick={() => this.removeItemHandler(index)}
                      >
                        X
                      </button>
                      <li>{item}</li>
                    </div>
                  );
                })}
              </ul>
            </div>
            <div>
              <label htmlFor="date">
                Event Date
                <input
                  id="date"
                  name="event_date"
                  onChange={this.changeHandler}
                ></input>
              </label>
            </div>
            <div>
              <label htmlFor="time">
                Event Time
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
              <div className="questions-input-div">
                <label htmlFor="question">
                  Question
                  <input
                    id="question"
                    name="question"
                    value={this.state.question_value}
                    onChange={this.onChangeQuestionValue}
                  ></input>
                  <button
                    id="add-button"
                    type="button"
                    onClick={this.addQuestionHandler}
                    disabled={!this.state.question_value}
                  >
                    +
                  </button>
                </label>
                <ul className="list-questions">
                  {(this.state.question || []).map((question, index) => {
                    return (
                      <div key={index} className="list-div">
                        <button
                          id="delete-button"
                          onClick={() => this.removeQuestionHandler(index)}
                        >
                          X
                        </button>
                        <li>{question}</li>
                      </div>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
          <div className="create-button">
            <p className="error-alert">{this.props.eventMessage}</p>
            <p className="error-alert">{this.state.error}</p>
            <button type="submit" className="create-event">
              Create Event
            </button>
          </div>
        </form>
      </div>
    );
  }
}
