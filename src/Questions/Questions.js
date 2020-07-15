import React, { Component } from "react";
import "./Questions.css";

export default class Questions extends Component {
  //displays question for event selected
  render() {
    const { eventId } = this.props;
    if (eventId >= 0) {
      return (
        <>
          <p>What do you like/dislike about the passage?</p>
          <p>What does this passage say about God/man?</p>
          <p>How can I apply this passage to my life?</p>
        </>
      );
    }
    return (
      <div>
        <div className="Question">
          {this.props.question.map((question, i) => {
            return (
              <div key={i}>
                <p id={question} value={question}>
                  {question}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
