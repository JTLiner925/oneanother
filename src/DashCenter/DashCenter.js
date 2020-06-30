import React, { Component } from "react";
import store from "../Store";
import ApiContext from "../ApiContext";
import BibleCard from "../BibleCard/BibleCard";
import Questions from "../Questions/Questions";
import Needed from "../Needed/Needed";

export default class DashCenter extends Component {
  static contextType = ApiContext;
  render() {
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
    const { eventId, events } = this.props;

    // console.log(events);
    return (
      <div className="center-section">
        <div className="row-one-dash">
          <div className="box-dash bible-box-dash">
            <div id="biblia"></div>
            <BibleCard
              lesson_title={
                eventId
                  ? store.events[eventId].lesson_title
                  : store.events[1].lesson_title
              }
              canonical={this.props.passage.canonical}
              passage={this.props.passage.passages}
            />
            {/* <div>{JSON.stringify(this.props.passage)}</div> */}
          </div>
        </div>

        <div className="row-two-dash">
          <div className="box-dash need-box">
            <h3>Needed Items</h3>
            <p>Items to bring to group</p>
            {events.map((event, i) => {
              // console.log(event);
              if (event.group_event && event.group_event == id) {
                return <Needed key={i} item={event.needed_items} />;
              }
            })}
            <p>Please don't forget your items!</p>
          </div>

          <div className="box-dash question-box">
            <h3>Questions</h3>
            {events.map((event, i) => {
              if (event.group_event && event.group_event == id) {
                return <Questions key={i} question={event.question} />;
              }
            })}
            {/* {eventId?store.events[eventId].questions.map((question, i) => (
            )):store.events[1].questions.map((question, i) => (
              <Questions key={i} question={question} />
            ))} */}
          </div>
        </div>
      </div>
    );
  }
}
