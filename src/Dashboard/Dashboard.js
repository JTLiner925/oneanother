import React, { Component } from "react";
import { Route } from "react-router-dom";
import config from "../config";
import DashSideNav from "../DashSideNav/DashSideNav";
import DashMain from "../DashMain/DashMain";
import Bible from "../Bible/Bible";
import Invite from "../Invite/Invite";
import GroupInfo from "../GroupInfo/GroupInfo";
import CreateGroup from "../CreateGroup/CreateGroup";
import CreateEvent from "../CreateEvent/CreateEvent";
import PrayerRequests from "../PrayerRequests/PrayerRequests";
import "./Dashboard.css";

export default class Dashboard extends Component {
  state = {
    passage: '',
    error: null
  }

  setPassage = passage => {
    this.setState({
      passage,
      error: null
    })
  }
 
  componentWillMount() {
    fetch(config.API_ENDPOINT, {
      method: "GET",
      params: {
        'q': '',
        'include-passage-reference': true,
        'include-verse-number': true,
        'include-first-verse-number': true,
        'include-footnotes': true,
        'include-footnote-body': true,
        'include-heading': true,
        'include-short-copyright': true,
        'indent-using': 'tab', 
      },
      headers: {
        // "content-type": "application/json",
        Authorization: `Bearer ${config.API_KEY}`,
      },
    })
    .then(res => {
      if (!res.ok) {
        return res.json().then(error => Promise.reject(error))
      }
      return res.json()
    })
    .then(this.setPassage)
    .catch(error => {
      console.error(error)
      this.setState({ error })
    })
  }

  invite = (formData) => {
    console.log(formData);
  };
  createGroup = (formData) => {
    console.log(formData);
  };
  joinGroup = (formData) => {
    console.log(formData);
  };
  createEvent = (formData) => {
    console.log(formData);
  };
  prayerRequest = (formData) => {
    console.log(formData);
  };
  prayerEncourage = (formData) => {
    console.log(formData);
  };

  render() {
    return (
      <section id="dash-body">
        <Route path="/*" component={DashSideNav} />
        <Route path="/dashboard" render={() => {
          return <DashMain
              passage = {this.state.passage}
              onGetPassage={this.componentWillMount}
          ></DashMain>}} />
        <Route path="/bible" component={Bible} />

        <Route
          path="/invite"
          render={() => {
            return <Invite onInvite={this.invite}></Invite>;
          }}
        />
        <Route
          path="/groupinfo"
          render={() => {
            return <GroupInfo onInvite={this.invite}></GroupInfo>;
          }}
        />
        <Route
          path="/creategroup"
          render={() => {
            return (
              <CreateGroup
                onCreateGroup={this.createGroup}
                onJoinGroup={this.joinGroup}
              ></CreateGroup>
            );
          }}
        />
        <Route
          path="/createevent"
          render={() => {
            return <CreateEvent onCreateEvent={this.createEvent}></CreateEvent>;
          }}
        />
        <Route
          path="/prayerrequests"
          render={() => {
            return (
              <PrayerRequests
                onPrayerRequest={this.prayerRequest}
                onPrayerEncourage={this.prayerEncourage}
              ></PrayerRequests>
            );
          }}
        />
      </section>
    );
  }
}
