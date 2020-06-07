import React, { Component } from "react";
import "./GroupInfo.css";
import Invite from '../Invite/Invite'


export default class GroupInfo extends Component {
  
  render(){
  return (
    <div className="main-body">
      <nav className="main-nav">
        <h2>Group Name</h2>
        <p>Profile</p>
      </nav>
      <Invite className='invite' onInvite={this.props.onInvite}></Invite>
      
      <div className="group-row-one">
      <div className="group-box pitch-box">
          <h3>About Our Group</h3>
          <p>Explaination of how our group works</p>
          <p>Encourage others to contact us/come!</p>
          <p>Logisticals: i.e. childcare, food, etc.</p>
        </div>
      <div className="group-box leader-box">
          <h3>Leader Name</h3>
          <p>About Leader</p>
          <p>Contact Info</p>
        </div>
        <div className="group-box time-date-box">
          <h3>When</h3>
          <p>Date</p>
          <p>Time</p>
        </div>
        <div className="group-box location-box">
          <h3>Where</h3>
          <p>Address of group</p>
          <p>Additional details</p>
        </div>
        
      </div>
      
    </div>
  );
}}
