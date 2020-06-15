import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./DashMain.css";
import STORE from "../Store";
import Needed from "../Needed/Needed";
import Chat from "../Chat/Chat";

export default class DashMain extends Component {
  state = {
    store: STORE,
  };
  // componentDidMount= () => {
  //   this.setState({
  //      this.props.handlePassage
  //   })
  // }
  render() {
    const { passage } = this.props.passage;
    const { store } = this.state;
    return (
      <div className="main-body">
        <nav className="main-nav">
          <h2>{store.one_another_users[0].group_name[0]}</h2>

          <Link to="/signup">
            <p>{store.one_another_users[0].first_name}</p>
          </Link>
        </nav>
        <div className="event-alert">
          <h3>Event Heading</h3>
          <p>Short description of event...</p>
        </div>
        <div className="row-one-dash">
          <div className="box-dash bible-box-dash">
            <div id="biblia"></div>
            {/* <div>{JSON.stringify(this.props.passage)}</div> */}
            <h3>{this.props.passage.canonical}</h3>
            <p>{this.props.passage.passages}</p>
          </div>
          <div className="box-dash question-box">
            <h3>Questions</h3>
            <p>list of questions</p>
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
            <p>List of Prayer Requests</p>
            <p>this will be dynamic</p>
          </div>
          <div className="box-dash need-box">
            <h3>Needed Items</h3>
            <p>Items to bring to group</p>
            {store.signup.map((need) => (
              <Needed key={need.id} item={need.item} />
            ))}
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
}
