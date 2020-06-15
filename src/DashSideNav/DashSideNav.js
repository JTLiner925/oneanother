import React from "react";
import { Link } from "react-router-dom";
import "./DashSideNav.css";

export default function DashSideNav() {
  
  return (
    <div className="side-nav-body">
      <Link to="./dashboard">
        <h2>oneAnother</h2>
      </Link>
      <div className="side-nav">
        <div className="nav-group">
          <label>
            <input type="radio" id="group-one" />
            Group 1
          </label>
          <label>
            <input type="radio" id="group-two" />
            Group 2
          </label>
          <label>
            <input type="radio" id="group-three" />
            Group 3
          </label>
          <Link to="./creategroup">
            <h3>Start/Join Group</h3>
          </Link>
        </div>
        <ul>
          <Link to='/invite'><li>Invite Others</li></Link>
          <li>Group Info</li>
          <Link to='createevent'><li>Create Event</li></Link>
          <li>Events Calender</li>
          <li>Upcoming Event</li>
          <li>Upcoming Event</li>
          <Link to='bible'><li>Bible</li></Link>
          <li>Chat</li>
          <Link to='prayerrequests'><li>Prayer Requests</li></Link>
        </ul>
        
      </div>
    </div>
  );
}
