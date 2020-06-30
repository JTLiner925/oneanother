import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./DashMain.css";
import ApiContext from "../ApiContext";
import STORE from "../Store";
import DashCenter from "../DashCenter/DashCenter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DashRight from "../DashRight/DashRight";
import DashSideNav from "../DashSideNav/DashSideNav";

export default class DashMain extends Component {
  state = {
    groups: "",
    events: "",
    users: "",
  };
  static contextType = ApiContext;
  // HamNav = (e) => {
  //   let elem = document.querySelector(".side-nav-body");
  //   elem.classList.add("hide");
  //   console.log(elem);
  //   if (elem.style.display === "block") {
  //     elem.style.display = "none";
  //   } else {
  //     elem.style.display = "block";
  //   }
  // };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  // submitHandler = (e) => {
  //   e.preventDefault();
  //   this.props.HamNav(this.state);
  // };
  render() {
    let i = window.location.search;
    let x = new URLSearchParams(i);
    let id;
    let y;
    for (let [key, value] of x) {
      if (key === "eventId") {
        y = `?groupId=${value}`;
        id = value ;
      }
    }
    const { events, eventId } = this.props;
    return (
      <ApiContext.Consumer>
        {({ eventId }) => (
          <div className="main-body">
            {/* <nav className="main-nav">
              <FontAwesomeIcon id="icon" icon={faBars} onClick={this.HamNav} />
              <h2>{groupId ? STORE.groups[groupId].name : "Select Group"}</h2>

              <Link to="/signup">
                <p>
                  {userId
                    ? STORE.one_another_users[userId].first_name
                    : "joker"}
                </p>
              </Link>
            </nav> */}

            <div className="event-alert">
              <div className="votd-container"></div>
              <h3>Announcements</h3>
              
                {events.map((event, i) => {
                  console.log(event.group_event)
                  if (event.group_event && event.group_event == id) {
                    return <p key={i}>{event.announcements}</p>;
                  }
                })}
              
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
                    return (
                      <DashCenter
                        groups={this.props.groups}
                        events={this.props.events}
                        groupId={this.props.groupId}
                        eventId={this.props.eventId}
                        users={this.props.users}
                        userId={this.props.userId}
                        passage={this.props.passage}
                      />
                    );
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
                    return (
                      <DashRight
                        groups={this.props.groups}
                        events={this.props.events}
                        groupId={this.props.groupId}
                        eventId={this.props.eventId}
                        users={this.props.users}
                        userId={this.props.userId}
                      />
                    );
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </ApiContext.Consumer>
    );
  }
}
