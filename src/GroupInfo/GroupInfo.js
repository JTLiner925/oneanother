import React, { Component } from "react";
import "./GroupInfo.css";
import Invite from "../Invite/Invite";

export default class GroupInfo extends Component {
  state = {
    group: "",
    event: "",
  };
  submitHandler = (e) => {
    // e.preventDefault();

    this.props.navHandler(this.state);
  };
  render() {
    const { groups, events, groupId, users, userId } = this.props;
    let leaderId = this.props.groups.group_leader;
    if(this.props.groups.length > 0){
      leaderId = this.props.groups.find((group) => {
        return (
          group.id == groupId
        )
      })
    }
    // console.log(this.props.groups);
    return (
      <div className="main-body">
        {/* <Invite className='invite' onInvite={this.props.onInvite}></Invite> */}

        <div className="group-row-one">
          <div className="group-box pitch-box" onClick={this.submitHandler}>
            {groups.map((group) => {
              // console.log(group);
              if (group.id && group.id == groupId) {
                return (
                  <div key={group}>
                    <h3>{group.group_name}</h3>
                    <p>{group.pitch}</p>
                    <p>{group.group_location}</p>
                    <p>{group.time_date}</p>
                    <p>{group.leader_phone}</p>
                    <p>{group.more_info}</p>
                  </div>
                );
              }
            })}
          </div>
          <div className="group-box leader-box" onClick={this.submitHandler} >
            {leaderId && users.map((user) => {
              // console.log(leaderId);
              if (user.id && user.id == leaderId.group_leader) {
                return (
                  <div key={user}>
                    <h3>
                      {user.first_name}
                      {user.last_name}
                    </h3>
                    <p>{user.user_email}</p>
                    <p>{user.bio}</p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}
