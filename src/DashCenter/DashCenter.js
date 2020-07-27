import React, { Component } from "react";
import ApiContext from "../ApiContext";
import BibleCard from "../BibleCard/BibleCard";
import Questions from "../Questions/Questions";
import Needed from "../Needed/Needed";

export default class DashCenter extends Component {
  static contextType = ApiContext;
  submitHandler = (e) => {
    this.props.navHandler(this.state);
  };
  // section for event information
  render() {
    console.log(this.props)
    let i = window.location.search;
    let x = new URLSearchParams(i);
    let id;
    let y;
    for (let [key, value] of x) {
      if (key === "eventId") {
        y = `?groupId=${value}`;
        id = value;
      }
    }
    const { eventId, events, groupId, needed } = this.props;
    //help to display lesson title in bible section
  
    let lessonTitle = this.props.events.lesson_title;
    if (this.props.events.length > 0) {
      lessonTitle = this.props.events.find((event) => {
        return event.id == eventId;
      });
    }
    return (
      <div className="center-section">
        <div className="row-one-dash">
          <div className="box-dash bible-box-dash" onClick={this.submitHandler}>
            <h3>
              {lessonTitle ? lessonTitle.lesson_title : "Make Disciple Makers"}
            </h3>
            {eventId ? (
              events.map((event, i) => {
                if (event.id == eventId && event.group_event == groupId) {
                  return (
                    <BibleCard
                      key={i}
                      lesson_title={event.lesson_title}
                      canonical={this.props.passage.canonical}
                      passage={this.props.passage.passages}
                    />
                  );
                }
              })
            ) : (
              <div className="bible-text">
                <h3 className="twoTim">2 Timothy 2:2</h3>
                <p>
                  [2] and what you have heard from me in the presence of many
                  witnesses entrust to faithful men, who will be able to teach
                  others also.(ESV){" "}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="row-two-dash">
          <div className="box-dash question-box" onClick={this.submitHandler}>
            <h3>Questions</h3>
            {eventId ? (
              events.map((event, i) => {
                if (event.id == eventId && event.group_event == groupId) {
                  return <Questions key={i} question={event.question} />;
                }
              })
            ) : (
              <div className="Question">
                <p>What do you like/dislike about the passage?</p>
                <p>What does this passage say about God/man?</p>
                <p>How can I apply this passage to my life?</p>
              </div>
            )}
          </div>

          <div className="box-dash need-box" id="need-box">
            <h3>Needed Items</h3>
            {eventId ? (
              events.map((event, i) => {
                if (event.id == eventId && event.group_event == groupId) {
                  return <Needed key={i} users={this.props.users} userId={this.props.userId} needed={this.props.needed} />;
                }
              })
            ) : (
              <div className="Needed">
                <div className="Item">
                  <p>Items to bring to group</p>
                  <div>
                    <input
                      id="Smile!"
                      className="visually-hidden"
                      type="checkbox"
                      check="true"
                    ></input>
                    <label htmlFor="Smile!">Smile!</label>
                  </div>
                  <div>
                    <input
                      id="Great Attitude!"
                      className="visually-hidden"
                      type="checkbox"
                      check="false"
                    ></input>
                    <label htmlFor="Great Attitude!">Great Attitude!</label>
                  </div>
                  <div>
                    <input
                      id="Ready for group!"
                      className="visually-hidden"
                      type="checkbox"
                      check="false"
                    ></input>
                    <label htmlFor="Ready for group!">Ready for group!</label>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
