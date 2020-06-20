import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import store from "../Store";
import ApiContext from "../ApiContext";
import { getEventsForGroup } from "../helpers";
import "./DashSideNav.css";

export default class DashSideNav extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  render() {
    let i = window.location.search;
    let x = new URLSearchParams(i);
    console.log(x);
    let y;
    for (let [key, value] of x) {
      if(key === 'groupId'){
        y = `?groupId=${value}`
      }
    }
  
    // for (let [key, value] of x) {
    //   if(key === '')
    // }
    
    // const userGroup = parseInt(store.one_another_users[0].group_id);
    // const { groups = [] } = store;
    // const groupsForUser = findGroupsForUser(groups, userGroup);
    // console.log(findGroupsForUser(groups, userGroup));
    const { groupId }  = this.context
    const { events = [] } = this.context;
    // console.log(this.props)
    return (
      <div className="side-nav-body">
        <Link to="/dashboard">
          <h2>oneAnother</h2>
        </Link>
        <div className="side-nav">
          <div className="nav-group">
            <ul>
              {store.groups.map((group) => {
                let id = +(group.id) - 1;
                return (
                
                <li key={group.id}>
                  <NavLink
                    className="group-link"
                    to={`/dashboard?groupId=${id}`}
                  >
                    <span></span>
                    {group.name}
                  </NavLink>
                </li>
              )}
              )}
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
            {store.events.map((event) => {
              let id = +(event.id) - 1;
              if(event.group_id === groupId){
                return(
              <li key={event.id}>
                <NavLink
                  className="event-link"
                  to={y?`${y}&eventId=${id}`:'/dashboard'}
                >
                  {event.lesson_title}
                </NavLink>
              </li>
            )}
            })}

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
