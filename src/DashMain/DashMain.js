import React from "react";
import "./DashMain.css";

export default function DashMain() {
  return (
    <div className="main-body">
      <nav className="main-nav">
        <h2>Group Name</h2>
        <p>Profile</p>
      </nav>
      <div className="event-alert">
        <h3>Event Heading</h3>
        <p>Short description of event...</p>
      </div>
      <div className="row-one-dash">
        <div className="box-dash bible-box-dash">
          <h3>Bible</h3>
          <p>Scripture Reference</p>
          <p>Passage</p>
        </div>
        <div className="box-dash question-box">
          <h3>Questions</h3>
          <p>list of questions</p>
        </div>
        <div className="box-dash chat-box">
          <h3>Chat</h3>
          <p>bubble text</p>
          <p>another text</p>
        </div>
      </div>
      <div className="row-two-dash">
        <div className="box-dash prayer-box">
          <h3>Prayer Requests</h3>
          <p>List of Prayer Requests</p>
          <p>this will be dynamic</p>
        </div>
        <div className="box-dash need-box">
          <h3>Needed Items</h3>
          <p>Items to bring to group</p>
          <p>Please don't forget your items!</p>
        </div>
        <div className="box-dash calendar-box">
          <h3>Event Calendar</h3>
          <p>this will be a calendar with dates highlighted to show event.</p>
          <p>more text about the box</p>
        </div>
      </div>
    </div>
  );
}
