import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ReactDOM from 'react-dom'
import "./DashMain.css";
import ApiContext from "../ApiContext";
import STORE from "../Store";
import DashCenter from "../DashCenter/DashCenter";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import DashRight from "../DashRight/DashRight";
import DashSideNav from '../DashSideNav/DashSideNav'

export default class DashMain extends Component {
  state={}
  static contextType = ApiContext;
  HamNav = (e) => {
    console.log(e)
    if (e.target.style.display === "block") {
      e.target.style.display = "none";
    } else {
      e.target.style.display = "block";
    }
  }

  
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
    console.log(this.state)
    return (
      <ApiContext.Consumer>
      {({ groupId, userId, eventId }) => (
      <div className="main-body">
        <nav className="main-nav">
        <FontAwesomeIcon className='icon' icon={faBars} onClick={this.HamNav}/>
          <h2>{groupId?STORE.groups[groupId].name:'Select Group'}</h2>

          <Link to="/signup">
            <p>{userId?STORE.one_another_users[userId].first_name:'joker'}</p>
          </Link>
        </nav>

        <div className="event-alert">
          <div className="votd-container"></div>
          <h3>Stories of Hope...</h3>
          <p>{eventId?STORE.events[eventId].lesson_title:STORE.events[1].lesson_title}</p>
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
                return <DashCenter passage={this.props.passage} />;
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
                return <DashRight />;
              }}
            />
          ))}
        </div>
      </div>
      )}
      </ApiContext.Consumer>
    )
    
  }
}
