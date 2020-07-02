import React, { Component } from "react";
import store from "../Store";
import ApiContext from "../ApiContext";
import BibleCard from "../BibleCard/BibleCard";
import Questions from "../Questions/Questions";
import Needed from "../Needed/Needed";

export default class DashCenter extends Component {
  static contextType = ApiContext;
  submitHandler = (e) => {
    // e.preventDefault();
    // let checkedItem = this.props.events.find((event) => {
    //   console.log(event.needed_items)
    //   return(
    //     event.needed_item == e
    //   )
    // })
    // console.log(checkedItem)
    // if(checkedItem.checked === 'false'){
    //   checkedItem.checked = 'true'
    // }if(checkedItem.checked === 'true'){
    //   checkedItem.checked = 'false'
    // }else{
    this.props.navHandler(this.state);
  };
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
    const { groups, eventId, events, groupId } = this.props;
    let lessonTitle = this.props.events.lesson_title;
    if (this.props.events.length > 0) {
      lessonTitle = this.props.events.find((event) => {
        return event.id == eventId;
      });
    }
    console.log(events);
    return (
      <div className="center-section">
        <div className="row-one-dash">
          <div className="box-dash bible-box-dash" onClick={this.submitHandler}>
            {/* <div id="biblia"></div> */}
            <h3>{lessonTitle ? lessonTitle.lesson_title : "Bible"}</h3>
            {events.map((event, i) => {
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
            })}
            {/* <div>{JSON.stringify(this.props.passage)}</div> */}
          </div>
        </div>
        <div className="box-dash question-box" onClick={this.submitHandler}>
          <h3>Questions</h3>
          {eventId ?
          
          events.map((event, i) => {
            if (event.id == eventId && event.group_event == groupId) {
              return <Questions key={i} question={event.question} />;
            }
          }):
          <div className="Question">
          <p>What do you like/dislike about the passage?</p>
          <p>What does this passage say about God/man?</p>
          <p>How can I apply this passage to my life?</p>
        </div>}
          {/* {eventId?store.events[eventId].questions.map((question, i) => (
            )):store.events[1].questions.map((question, i) => (
              <Questions key={i} question={question} />
            ))} */}
        </div>
        <div className="row-two-dash">
          <div className="box-dash need-box" id="need-box">
            <h3>Needed Items</h3>
            {events.map((event, i) => {
              // console.log(event);
              if (event.id == eventId && event.group_event == groupId) {
                return <Needed key={i} item={event.needed_items} />;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
