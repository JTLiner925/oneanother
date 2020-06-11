import React, { Component } from "react";
import { Link } from 'react-router-dom'
import "./DashMain.css";
import STORE from "../Store";
import Needed from '../Needed/Needed';
import Chat from '../Chat/Chat'

export default class DashMain extends Component {
  state={
    store: STORE,
  }
  scriptLoaded = () => {
    // console.log(window)
    window.logos.biblia.init();
    let element = document.getElementById('biblia')
    // element.appendChild('<biblia:bible layout="normal" resource="leb" width="400" height="600" startingReference="Ge1.1"></biblia:bible>')
  }
  componentDidMount() {
    console.log(window)
    const script = document.createElement("script");
    script.src = "//biblia.com/api/logos.biblia.js";
    script.async = true;
    script.onload = () => this.scriptLoaded();
  
    document.body.appendChild(script);
  }
 render(){
   const { store } = this.state
  return (
    <div className="main-body">
      <nav className="main-nav">
        <h2>Group Name</h2>

       <Link to='/signup'><p>Profile</p></Link> 
      </nav>
      <div className="event-alert">
        <h3>Event Heading</h3>
        <p>Short description of event...</p>
      </div>
      <div className="row-one-dash">
        <div className="box-dash bible-box-dash">

        <div id='biblia'></div>
          <h3>Bible</h3>
          <p>Scripture Reference</p>
          <p>Passage</p>          
        </div>
        <div className="box-dash question-box">
          <h3>Questions</h3>
          <p>list of questions</p>
        </div>
        <div className="box-dash chat-box">
          <h3>Chat</h3>
          {store.chat.map(user =>
            <Chat 
            key={user.id}
            user_name={user.user_name}
            comment={user.comment}
            />)}
        </div>
      </div>
      <div className="row-two-dash">
        <div className="box-dash prayer-box">
          <h3>Prayer Requests</h3>
          <p>List of Prayer Requests</p>
          <p>this will be dynamic</p>
        </div>
        <div className="box-dash need-box">
          <h3>Needed Items</h3>
          <p>Items to bring to group</p>
          {store.signup.map(need =>
            <Needed 
              key={need.id}
              item={need.item}
              />)}         
          <p>Please don't forget your items!</p>
        </div>
        <div className="box-dash calendar-box">
          <h3>Event Calendar</h3>
          <p>this will be a calendar with dates highlighted to show event.</p>
          <p>more text about the box</p>
        </div>
      </div>
    </div>
  );
}}
