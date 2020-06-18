import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import store from "../Store";
import ApiContext from "../ApiContext";
import { findGroupsForUser } from "../helpers";
import "./DashSideNav.css";

export default class DashSideNav extends Component {
  static contextType = ApiContext;

  render() {
    const userGroup = parseInt(store.one_another_users[0].group_id);
    const { groups = [] } = store;
    const groupsForUser = findGroupsForUser(groups, userGroup);
    console.log(findGroupsForUser(groups, userGroup));
    return (
      <div className="side-nav-body">
        <Link to="/dashboard">
          <h2>oneAnother</h2>
        </Link>
        <div className="side-nav">
          <div className="nav-group">
            <ul>
              {groups.map((group) => (
                <li key={group.id}>
                  <NavLink
                    className="group-link"
                    to={`/dashboard/group/${group.id}`}
                  >
                    <span></span>
                    {group.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <Link to="./creategroup">
              <h3>Start/Join Group</h3>
            </Link>
          </div>
          <ul>
            <Link to="/invite">
              <li>Invite Others</li>
            </Link>
            <li>Group Info</li>
            <Link to="createevent">
              <li>Create Event</li>
            </Link>
            <li>Events Calender</li>
            {store.events.map((event) => (
              <li key={event.id}>
                <NavLink
                  className="event-link"
                  to={`/dashboard/${event.bible_passage}`}
                >
                  {event.lesson_title}
                </NavLink>
              </li>
            ))}

            <Link to="bible">
              <li>Bible</li>
            </Link>
            <li>Chat</li>
            <Link to="prayerrequests">
              <li>Prayer Requests</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}
