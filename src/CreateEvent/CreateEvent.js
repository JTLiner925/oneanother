import React, { Component } from "react";
import store from '../Store'
import './CreateEvent.css'
import ApiContext from '../ApiContext'

export default class CreateEvent extends Component {
  state={}
  static defaultProps = {
    history: {
      push: () => {},
    },
  };
  static contextType = ApiContext;

  submitHandler = (e) => {
    e.preventDefault();
    this.props.onCreateEvent(this.state);
    // const newEvent = {
    //   announcements: e.target['announcements'].value,
    //   needed_items: e.target['needed_items'].value,
    //   time_date: e.target['time_date'].value,
    //   lesson_title: e.target['lesson_title'].value,
    //   bible_passage: e.target['bible_passage'].value,
    //   questions: e.target['questions'].value,
    // }
    // fetch(store.events, {
    //   method: 'POST',
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newEvent)
    // })
    // .then((res) => {
    //   if (!res.ok) return res.json().then((e) => Promise.reject(e));
    //   return res.json();
    // })
    // .then((event) => {
    //   this.context.addEvent(event);
    //   this.props.history.push(`/`);
    // })
    // .catch((error) => {
    //   console.error({ error });
    // });    
  };
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className='main-body'>
        
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
                <input
                  id="announcements"
                  name="announcements"
                  onChange={this.changeHandler}
                ></input>
              </label>
            </div>
            <div>
              <label htmlFor="needed-items">
                Needed Items
                <input
                  id="needed-items"
                  name="needed_items"
                  onChange={this.changeHandler}
                ></input>
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
            <div className='lesson'>
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
                <input
                  id="question"
                  name="question"
                  onChange={this.changeHandler}
                ></input>
              </label>
              <button type="submit" className="add-another-question">
              Add Another Question
            </button>
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
