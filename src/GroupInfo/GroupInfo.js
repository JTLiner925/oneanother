import React, { Component } from "react";
import "./GroupInfo.css";
import Invite from '../Invite/Invite'


export default class GroupInfo extends Component {
  
  render(){
  return (
    <div className="main-body">
      {/* <Invite className='invite' onInvite={this.props.onInvite}></Invite> */}
      
      <div className="group-row-one">
      <div className="group-box pitch-box">
          <h3>About Our Group</h3>
          <p>Explaination of how our group works</p>
          <p>Encourage others to contact us/come!</p>
          <p>Logisticals: i.e. childcare, food, etc.</p>
        </div>
      <div className="group-box leader-box">
          <h3>Joe Schmoe</h3>
          <p>Contact Info</p>
          <p>Date and Time</p>
          <p>Location</p>
          <p>Additional Details</p>
        </div>
      </div>
      
    </div>
  );
}}
