import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import "./DashSideNav.css";

export default class DashSideNav extends Component {
  state = {
    group: "",
    event: "",
    user: "",
  };
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  render() {
    let i = window.location.search;
    let x = new URLSearchParams(i);
    let id;
    let y;
    for (let [key, value] of x) {
      if (key === "groupId") {
        y = `?groupId=${value}`;
        id = value;
      }
    }

    const { events = [], userId } = this.props;
    const { groups = [] } = this.props;
    const groupEvents = [].concat(groups)
      .sort((a, b) => a.id > b.id ? 1 : -1)
      const sortEvents = [].concat(events)
      .sort((a, b) => a.id > b.id ? 1 : -1)
      console.log(sortEvents)
    return (
      <div className="side-nav-body">
        <div className="myLinks">
          <Link to="/dashboard">
            <h1 className="logo">oneAnother</h1>
          </Link>
          <Link to="./creategroup">
            <h2>Start/Join Group</h2>
          </Link>
          <Link to="createevent">
            <h2>Create Event</h2>
          </Link>
          <Link to="bible">
            <h2>Bible</h2>
          </Link>
          <div className="side-nav">
            <div className="nav-group">
              <h3>Groups</h3>
              <ul>
                {groupEvents.map((group) => {
                  let idee = group.id;
                  let userIds = group.user_ids;
                  for (let i = 0; i < userIds.length; i++) {
                    let idsArray = userIds[i];
                    if (idsArray && idsArray == userId) {
                      return (
                        <li key={group.id}>
                          <NavLink
                            className="group-link"
                            to={`/dashboard?groupId=${idee}`}
                          >
                            <span></span>
                            {group.group_name}
                          </NavLink>
                        </li>
                      );
                    }
                  }
                })}
              </ul>
            </div>
            <div>
              <h3>Events</h3>
              <ul>
                {sortEvents.map((event) => {
                  console.log(event)
                  let idee = event.id;
                  if (event.group_event && event.group_event == id) {
                    return (
                      <li key={event.id}>
                        <NavLink
                          className="event-link"
                          to={y ? `${y}&eventId=${idee}` : "/dashboard"}
                        >
                          {event.lesson_title}
                        </NavLink>
                      </li>
                    );
                 
                  }
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
