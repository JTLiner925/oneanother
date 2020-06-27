import React, { Component } from "react";
import store from "../Store";
import ApiContext from "../ApiContext";
import Prayer from "../Prayer/Prayer";
// import Chat from "../Chat/Chat";
// import SimpleCalendar from "../SimpleCalendar/SimpleCalendar";
import Invite from '../Invite/Invite'
import Needed from "../Needed/Needed";

import "./DashRight.css";
import GroupInfo from "../GroupInfo/GroupInfo";

export default class DashRight extends Component {
  static contextType = ApiContext;

  render() {
    let { eventId } =  this.context

    return (
      <div className="side-right">
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
        {/* <div className="box-dash calendar-box">
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
          </div> */}
          {/* <div className="chat-input-container">
            <input type="text" className="chat-input" />
            <button>Send</button>
          </div>
        </div> */}
              {/* <Invite className='invite' onInvite={this.props.onInvite}></Invite> */}

        
        <GroupInfo />
        
        {/* <div className="box-dash prayer-box">
          <h3>Prayer Requests</h3>
          {store.prayers.map((prayer) => (
            <Prayer key={prayer.id} request={prayer.request} />
          ))}
        </div> */}
      </div>
    );
  }
}
