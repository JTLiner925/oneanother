import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./DashMain.css";
import ApiContext from "../ApiContext";
import STORE from "../Store";
import DashCenter from "../DashCenter/DashCenter";
import DashRight from "../DashRight/DashRight";

export default class DashMain extends Component {
  // state = {
  //   store: STORE,
  // };
  static contextType = ApiContext;

  render() {
    // const { store } = this.state;
    let  { groupId, userId, eventId } = this.context
    console.log(userId)
    return (
      <div className="main-body">
        <nav className="main-nav">
          <h2>{groupId?STORE.groups[groupId].name:'Select Group'}</h2>

          <Link to="/signup">
            <p>{userId?STORE.one_another_users[userId].first_name:'joker'}</p>
          </Link>
        </nav>

        <div className="event-alert">
          <div className="votd-container"></div>
          <h3>Stories of Hope...</h3>
          <p>{eventId?STORE.events[eventId].lesson_title:STORE.events[1].lesson_title}</p>
        </div>
        <div className="main">
          {[
            "/dashboard",
            "/bible",
            "/invite",
            "/groupinfo",
            "/creategroup",
            "/createevent",
            "/prayerrequests",
            "/dashboard/:bible_passage",
            "/dashboard/group/:group_id",
          ].map((path) => (
            <Route
              exact
              key={path}
              path={path}
              render={() => {
                return <DashCenter passage={this.props.passage} />;
              }}
            />
          ))}

          {[
            "/dashboard",
            "/bible",
            "/invite",
            "/groupinfo",
            "/creategroup",
            "/createevent",
            "/prayerrequests",
            "/dashboard/:bible_passage",
            "/dashboard/group/:group_id",
          ].map((path) => (
            <Route
              exact
              key={path}
              path={path}
              render={() => {
                return <DashRight />;
              }}
            />
          ))}
        </div>
      </div>
    );
  }
}
