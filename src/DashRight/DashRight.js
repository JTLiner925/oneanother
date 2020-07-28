import React, { Component } from "react";
// import ApiContext from "../ApiContext";
import GroupInfo from "../GroupInfo/GroupInfo";
import "./DashRight.css";
export default class DashRight extends Component {
  //section for group information
  // static contextType = ApiContext;
  submitHandler = (e) => {
    this.props.navHandler(this.state);
  };
  render() {
    return (
      <div className="side-right">
        <GroupInfo
          groups={this.props.groups}
          events={this.props.events}
          groupId={this.props.groupId}
          eventId={this.props.eventId}
          users={this.props.users}
          userId={this.props.userId}
          navHandler={this.submitHandler}
        />
      </div>
    );
  }
}
