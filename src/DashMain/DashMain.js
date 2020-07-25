import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./DashMain.css";
import ApiContext from "../ApiContext";
import DashCenter from "../DashCenter/DashCenter";
import DashRight from "../DashRight/DashRight";

export default class DashMain extends Component {
  state = {
    groups: "",
    events: "",
    users: "",
  };
  static contextType = ApiContext;

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  navHandler = (e) => {
    this.props.onHandleHam(this.state);
  };
  render() {
    let i = window.location.search;
    let x = new URLSearchParams(i);
    let id;
    let y;
    for (let [key, value] of x) {
      if (key === "eventId") {
        y = `?groupId=${value}`;
        id = value;
      }
    }
    //use ternary to display placeholder text when no api call has been made
    const { events, groupId } = this.props;
    return (
      <ApiContext.Consumer>
        {({ eventId }) => (
          <div className="main-body">
            <div className="event-alert" onClick={this.navHandler}>
              {eventId ? (
                events.map((event, i) => {
                  if (event.id == eventId && event.group_event == groupId) {
                    return (
                      <>
                        <h3>Announcements</h3>
                        <p key={i}>{event.announcements}</p>
                      </>
                    );
                  }
                })
              ) : (
                <div className="dashHero">
                  <p className="qotd">
                    “Discipleship is not an option. Jesus says that if anyone
                    would come after me, he must follow me.”
                  </p>
                  <h2 className="qotdAuthor"> ~ Tim Keller</h2>
                </div>
              )}
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
                        navHandler={this.navHandler}
                        needed={this.props.needed}
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
                        navHandler={this.navHandler}
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
