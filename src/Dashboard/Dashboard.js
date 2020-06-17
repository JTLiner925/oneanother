import React, { Component } from "react";
import { Route } from "react-router-dom";
import config from "../config";
import DashSideNav from "../DashSideNav/DashSideNav";
import DashMain from "../DashMain/DashMain";
import Bible from "../Bible/Bible";
import Invite from "../Invite/Invite";
import GroupInfo from "../GroupInfo/GroupInfo";
import ApiContext from "../ApiContext";
import store from "../Store";
import CreateGroup from "../CreateGroup/CreateGroup";
import CreateEvent from "../CreateEvent/CreateEvent";
import PrayerRequests from "../PrayerRequests/PrayerRequests";
import "./Dashboard.css";

export default class Dashboard extends Component {
  state = {
    passage:'',
    groups: [],
    events: [],
    error: null,
  };
  setPassage = (passage) => {
    this.setState({
      passage,
      error: null,
    });
  };
  
  componentDidMount() {
    let url = new URL(config.API_ENDPOINT);

    url.searchParams.set("q", store.events[1].bible_passage);
    url.searchParams.set("include-passage-reference", true);
    url.searchParams.set("include-verse-number", true);
    url.searchParams.set("include-first-verse-number", true);
    url.searchParams.set("include-footnotes", true);
    url.searchParams.set("include-footnote-body", true);
    url.searchParams.set("include-heading", true);
    url.searchParams.set("include-short-copyright", true);
    url.searchParams.set("indent-using", "tab");
    const options = {
      method: "GET",

      headers: {
        Authorization: `Token ${config.API_KEY}`,
      },
    };
    fetch(url, options)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then(this.setPassage)
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
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

  
  handleAddEvent = (event) => {
    this.setState({
      events: [this.state.events, event]
    })
  };
  handleAddGroup = (group) => {
    this.setState({
      groups: [this.state.groups, group]
    })
  };
  renderMainRoutes() {
    return (
      <>
        {["/dashboard", "/dashboard/:bible_passage", '/dashboard/group/:group_id'].map((path) => (
          <Route exact key={path} path={path} 
          render={() => {
            return <DashMain passage={this.state.passage}></DashMain>
          }} 
          />
        ))}
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
              return (
                <CreateEvent onCreateEvent={this.createEvent}></CreateEvent>
              );
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
      </>
    );
  }
  render() {
    const value = {
      groups: this.state.groups,
      events: this.state.events,
      addEvent: this.handleAddEvent,
      addGroup: this.handleAddGroup,
    };
    console.log(this.state.passage);
    return (
      <ApiContext.Provider value={value}>
        <section id="dash-body">
        {['/dashboard', '/bible', '/invite', '/groupinfo', '/creategroup', '/createevent', '/prayerrequests', '/dashboard/:bible_passage', '/dashboard/group/:group_id'].map((path) => (
          <Route exact key={path} path={path} 
          render={() => {
            return <DashSideNav />
          }} 
          />
        ))}
          <main className="Dash__main">{this.renderMainRoutes()}</main>
        </section>
      </ApiContext.Provider>
    );
  }
}
