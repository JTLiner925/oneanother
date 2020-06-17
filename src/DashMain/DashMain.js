import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DashMain.css";
import ApiContext from "../ApiContext";
import STORE from "../Store";
import Needed from "../Needed/Needed";
import Chat from "../Chat/Chat";
import { getPrayersForGroup } from '../helpers';
import BibleCard from '../BibleCard/BibleCard';
import Prayer from '../Prayer/Prayer'
import Questions from '../Questions/Questions'
import SimpleCalendar from '../SimpleCalendar/SimpleCalendar'

export default class DashMain extends Component {
 
  state = {
    store: STORE,
  };
  static contextType = ApiContext;
  
  render() {
    
    const { store } = this.state;
    const groupId = parseInt(store.groups[0].id);
    const prayers  = store.prayers;
    const prayersForGroup = getPrayersForGroup(prayers, groupId)
    console.log(getPrayersForGroup(prayers, groupId))
    return (
      <div className="main-body">
        <nav className="main-nav">
          <h2>{store.one_another_users[0].group_id[0]}</h2>

          <Link to="/signup">
            <p>{store.one_another_users[0].first_name}</p>
          </Link>
        </nav>
        
        <div className="event-alert">
          <h3>Stories of Hope...</h3>
          <p>{store.events[1].lesson_title}</p>
        </div>
        <div className="row-one-dash">
          <div className="box-dash bible-box-dash">
            <div id="biblia"></div>
            <BibleCard 
            lesson_title={store.events[1].lesson_title}
            canonical={this.props.passage.canonical}
            passage={this.props.passage.passages}
            />
            {/* <div>{JSON.stringify(this.props.passage)}</div> */}
          </div>
          <div className="box-dash question-box">
            <h3>Questions</h3>
            
              {store.events[1].questions.map((question, i) => (
                <Questions key={i} question={question} />
              ))}
            
          </div>
          <div className="box-dash chat-box">
            <h3>Chat</h3>
            {store.chat.map((user) => (
              <Chat
                key={user.id}
                user_name={user.user_name}
                comment={user.comment}
              />
            ))}
          </div>
        </div>
        <div className="row-two-dash">
          <div className="box-dash prayer-box">
            <h3>Prayer Requests</h3>
            {store.prayers.map((prayer) => (
              
                <Prayer 
                  key={prayer.id}
                  request={prayer.request}
                />
              
            ))}
          </div>
          <div className="box-dash need-box">
            <h3>Needed Items</h3>
            <p>Items to bring to group</p>
            {store.events[1].needed_items.map((need, i) => (
              <Needed key={i} item={need} />
            ))}
            <p>Please don't forget your items!</p>
          </div>
          <div className="box-dash calendar-box">
            <h3>Event Calendar</h3>
            <SimpleCalendar />
          </div>
        </div>
      </div>
    );
  }
}
