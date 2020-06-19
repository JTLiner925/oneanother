import React, { Component } from "react";
import store from "../Store";
import ApiContext from "../ApiContext";
import BibleCard from "../BibleCard/BibleCard";
import Questions from "../Questions/Questions";
import Needed from "../Needed/Needed";

export default class DashCenter extends Component {
  static contextType = ApiContext;
  render() {
    
    let { eventId } =  this.context
    
    console.log(eventId)
    return (
      <div className="center-section">
        <div className="row-one-dash">
          <div className="box-dash bible-box-dash">
            <div id="biblia"></div>
            <BibleCard
              lesson_title={eventId?store.events[eventId].lesson_title:'Bible'}
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
            {eventId?store.events[eventId].needed_items.map((need, i) => (
              <Needed key={i} item={need} />
            )):store.events[1].needed_items.map((need, i) => (
              <Needed key={i} item={need} />
            ))}
            <p>Please don't forget your items!</p>
          </div>

          <div className="box-dash question-box">
            <h3>Questions</h3>
            {eventId?store.events[eventId].questions.map((question, i) => (
              <Questions key={i} question={question} />
            )):store.events[1].questions.map((question, i) => (
              <Questions key={i} question={question} />
            ))}
          </div>

        </div>

      </div>
    );
  }
}
