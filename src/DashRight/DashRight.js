import React, { Component } from "react";
import ApiContext from "../ApiContext";
import GroupInfo from "../GroupInfo/GroupInfo";
import "./DashRight.css";
// import Prayer from "../Prayer/Prayer";
// import Invite from "../Invite/Invite";
// import Needed from "../Needed/Needed";


export default class DashRight extends Component {
  static contextType = ApiContext;
  submitHandler = (e) => {
    this.props.navHandler(this.state);
  };
  render() {
    return (
      <div className="side-right" >
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
