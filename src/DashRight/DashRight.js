import React, { Component } from "react";
import store from "../Store";
import ApiContext from "../ApiContext";
import Prayer from "../Prayer/Prayer";
import Chat from "../Chat/Chat";
import SimpleCalendar from "../SimpleCalendar/SimpleCalendar";

import "./DashRight.css";

export default class DashRight extends Component {
  render() {
    return (
      <div className="side-right">
        <div className="box-dash calendar-box">
          <h3>Event Calendar</h3>
          <SimpleCalendar />
        </div>
        <div className="box-dash chat-box">
          <h3>Chat</h3>
          <div className="Chat-comp">
            {store.chat.map((user) => (
              <Chat
                key={user.id}
                user_name={user.user_name}
                comment={user.comment}
              />
            ))}
          </div>
          <div className="chat-input-container">
            <input type="text" className="chat-input" />
            <button>Send</button>
          </div>
        </div>
        <div className="box-dash prayer-box">
          <h3>Prayer Requests</h3>
          {store.prayers.map((prayer) => (
            <Prayer key={prayer.id} request={prayer.request} />
          ))}
        </div>
      </div>
    );
  }
}
