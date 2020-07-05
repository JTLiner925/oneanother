import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import ApiContext from "../ApiContext";

import { findGroupsForUser } from "../helpers";
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
  // setGroup = (group, event) => {
  //   this.setState({
  //     group,
  //     event,
  //     error: null,
  //   });
  // };

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
    // console.log(id)
    // for (let [key, value] of x) {
    //   if(key === '')
    // }

    // console.log(findGroupsForUser(groups, userGroup));
    // const { userId } = this.props;
    // const uId = this.props.userId

    // const { events = [] } = this.context;
    // console.log(this.props)
    // let currentUser = this.props.groups.user_ids.map((user_id) => {
    //   return (
    //     user_id == userId
    //   )
    // });
    // if (this.props.groups.length > 0) {
    //   userIds = this.props.groups.map((group) => {
    //     return group.user_ids == userId;
    //   });
    // }
    // console.log(this.props);
    
    const  userGroup = parseInt(this.props.match.params.id)
    const { userId, events, users } = this.props;
    const { groups = [] } = this.props;
    const groupsForUser = findGroupsForUser(groups, userGroup);
    // let user_id;
    // if(this.props.users.length > 0){
    //   user_id = this.props.users.map((user) => {
    //     return (
    //       user.id == userId.id
    //     )
    //   })
    // }
    console.log(this.props, userId);
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
          {/* <Link to="prayerrequests">
          <h2>Prayer Requests</h2>
        </Link> */}
          <Link to="bible">
            <h2>Bible</h2>
          </Link>
          <div className="side-nav">
            <div className="nav-group">
              <h3>Groups</h3>
              <ul>
                {groupsForUser.map((group) => {
                  let idee = group.id;
                  let userIds = group.user_ids;
                  for (let j = 0; j < users.length; j++) {
                    let user_id = users[j]
                  for (let i = 0; i < userIds.length; i++) {
                    let idsArray = userIds[i]
                    // console.log(idsArray, user_id)
                    if (idsArray && idsArray == user_id.id) 
                    {
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
                  }}
                  // return (
                  //   <li key={group.id}>
                  //     <NavLink
                  //       className="group-link"
                  //       to={`/dashboard?groupId=${idee}`}
                  //     >
                  //       <span></span>
                  //       {group.group_name}
                  //     </NavLink>
                  //   </li>
                  // );
                })}
              </ul>
            </div>
            <div>
              <h3>Events</h3>
              <ul>
                {/* <Link to="/invite">
              <li>Invite Others</li>
            </Link> */}
                {/* <li>Group Info</li> */}

                {/* <li>Events Calender</li> */}
                {events.map((event) => {
                  let idee = event.id;
                  // console.log(id, event.group_event)
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

                {/* <li>Chat</li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
