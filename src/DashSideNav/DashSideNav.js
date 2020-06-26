import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import store from "../Store";
import ApiContext from "../ApiContext";

// import { getEventsForGroup } from "../helpers";
import "./DashSideNav.css";

export default class DashSideNav extends Component {
  state={
    group:'',
    event:'',
  }
  setGroup = (group, event) => {
    this.setState({
      group,
      event,
      error: null,
    });
  };
  componentDidMount() {
    // let groupId = this.state.group.id
    fetch("http://localhost:8000/api/groups", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "GET",
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then((group, event) => {
        
        this.setState({
          group: '',
          event: '',
        });
        this.setGroup(group, event);
      })

      .catch((error) => {
        console.log(error);
        this.setState({ error });
      });
  }
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
      if (key === "groupId") {
        y = `?groupId=${value}`;
      }
    }

    // for (let [key, value] of x) {
    //   if(key === '')
    // }

    // const userGroup = parseInt(store.one_another_users[0].group_id);
    // const { groups = [] } = store;
    // const groupsForUser = findGroupsForUser(groups, userGroup);
    // console.log(findGroupsForUser(groups, userGroup));
    const { groupId, groups, events } = this.context;
    // const { events = [] } = this.context;
    // console.log(this.props)
    console.log(this.state, this.context)
    return (
      
      <div className="side-nav-body">
        <div className='myLinks'>
        <Link to="/dashboard">
          <h1>oneAnother</h1>
        </Link>
        <Link to="./creategroup">
          <h2>Start/Join Group</h2>
        </Link>
        <Link to="createevent">
          <h2>Create Event</h2>
        </Link>
        <Link to="prayerrequests">
          <h2>Prayer Requests</h2>
        </Link>
        <Link to="bible">
          <h2>Bible</h2>
        </Link>
        <div className="side-nav">
          <div className="nav-group">
            <h3>Groups</h3>
            <ul>
              {groups.map((group) => {
                let id = +group.id - 1;
                return (
                  <li key={group.id}>
                    <NavLink
                      className="group-link"
                      to={`/dashboard?groupId=${id}`}
                    >
                      <span></span>
                      {group.group_name}
                    </NavLink>
                  </li>
                );
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
              {groups.map((event) => {
                let id = +event.id - 1;
                if (event.group_id === groupId) {
                  return (
                    <li key={event.id}>
                      <NavLink
                        className="event-link"
                        to={y ? `${y}&eventId=${id}` : "/dashboard"}
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
