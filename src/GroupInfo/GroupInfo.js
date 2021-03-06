import React, { Component } from "react";
import "./GroupInfo.css";

export default class GroupInfo extends Component {
  state = {
    group: "",
    event: "",
  };
  submitHandler = (e) => {
    this.props.navHandler(this.state);
  };
  render() {
    //grabs leader for group
    const { groups, groupId, users } = this.props;
    let leaderId = this.props.groups.group_leader;
    if (this.props.groups.length > 0) {
      leaderId = this.props.groups.find((group) => {
        return group.id == groupId;
      });
    }
    return (
      <div className="group-body">
        <div className="group-row-one">
          <div className="group-box pitch-box" onClick={this.submitHandler}>
            {groupId ? (
              groups.map((group) => {
                if (group.id && group.id == groupId) {
                  return (
                    <div key={group}>
                      <h3 className="pitch-header">Group Info</h3>
                      <div className="pitch">
                        <p>{group.group_name}</p>
                        <p>{group.pitch}</p>
                        <p>{group.group_location}</p>
                        <p>{group.time_date}</p>
                        <p>{group.leader_phone}</p>
                        <p>{group.more_info}</p>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <div className="hidden"></div>
            )}
          </div>
          <div className="group-box leader-box" onClick={this.submitHandler}>
            {leaderId ? (
              leaderId &&
              users.map((user) => {
                if (user.id && user.id == leaderId.group_leader) {
                  return (
                    <div key={user}>
                      <h3 className="leader-header">Group Leader</h3>
                      <div className="leader">
                        <p>
                          {user.first_name}
                          {user.last_name}
                        </p>
                        <p>{user.user_email}</p>
                        <p>{user.bio}</p>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <div className="hidden"></div>
            )}
          </div>
        </div>
      </div>
    );
  }
}
