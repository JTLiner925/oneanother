import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
class Dashboard extends Component {
  state = {
    passage: "",
    users: [],
    groups: [],
    events: [],
    userId: "",
    groupId: "",
    eventId: "",
    error: null,
  };
  setPassage = (passage) => {
    this.setState({
      passage,
      error: null,
    });
  };
  static contextType = ApiContext;
  HamNav = (e) => {
    let elem = document.querySelector(".side-nav-body");
    // elem.classList.add("none");
    console.log(elem);
    if (elem.style.display === "block") {
      elem.style.display = "none";
    } else {
      elem.style.display = "block";
    }
  };

  componentDidMount() {
    let i = window.location.search;
    let x = new URLSearchParams(i);
    // console.log(x);
    for (let [key, value] of x) {
      this.setState({
        [key]: value,
      });
    }
  }

  handleBiblePassage = (eventId) => {
    let url = new URL(`${config.API_ENDPOINT}text/`);

    url.searchParams.set("q", store.events[eventId].bible_passage);
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
        // console.log(res);
        if (!res.ok) {
          throw new Error("Something went wrong, please try again later.");
        }
        return res.json();
      })
      .then((passage) => {
        this.setPassage(passage);
        this.setState({
          eventId: eventId,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({ error });
      });
  };

  invite = (formData) => {
    console.log(formData);
  };

  createGroup = (formData) => {
    console.log(formData);
    fetch("http://localhost:8000/api/groups/creategroup", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  joinGroup = (formData) => {
    console.log(formData);
    fetch("http://localhost:8000/api/groups/joingroup", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  createEvent = (formData) => {
    console.log(formData);
    fetch("http://localhost:8000/api/events/createevent", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  prayerRequest = (formData) => {
    console.log(formData);
  };
  prayerEncourage = (formData) => {
    console.log(formData);
  };

  handleAddEvent = (event) => {
    this.setState({
      events: [this.state.events, event],
    });
  };
  handleEvent = (eventId) => {
    this.setState({
      eventId: eventId,
    });
  };
  handleGroup = (groupId) => {
    // console.log(groupId)
    this.setState({
      groupId: groupId,
    });
  };
  handleUser = (userId) => {
    // console.log(userId)
    this.setState({
      userId: userId,
    });
  };
  handleAddGroup = (group) => {
    this.setState({
      groups: [this.state.groups, group],
    });
  };
  renderMainRoutes() {
    return (
      <>
        <ApiContext.Consumer>
          {({ groupId, userId }) => (
            <nav className="main-nav">
              <FontAwesomeIcon id="icon" icon={faBars} onClick={this.HamNav} />
              <h2>{groupId ? store.groups[groupId].name : "Select Group"}</h2>

              <Link to="/signup">
                <p>
                  {userId
                    ? store.one_another_users[userId].first_name
                    : "joker"}
                </p>
              </Link>
            </nav>
          )}
        </ApiContext.Consumer>
        {[
          "/dashboard",
          "/dashboard/:bible_passage",
          "/dashboard/group/:group_id",
        ].map((path) => (
          <Route
            exact
            key={path}
            path={path}
            render={() => {
              return (
                <DashMain
                  onHandleHam={this.HamNav}
                  passage={this.state.passage}
                ></DashMain>
              );
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
      </>
    );
  }
  render() {
    let i = window.location.search;
    let x = new URLSearchParams(i);

    for (let [key, value] of x) {
      if (key === "groupId") {
        if (value !== this.state.groupId) {
          this.handleGroup(value);
        }
      }
      // for(let [key, value] )
      if (key === "eventId") {
        if (value !== this.state.eventId) {
          this.handleBiblePassage(value);
        }
      }
    }
    const value = {
      users: this.state.users,
      groups: this.state.groups,
      events: this.state.events,
      userId: this.state.userId,
      groupId: this.state.groupId,
      eventId: this.state.eventId,
      addEvent: this.handleAddEvent,
      addGroup: this.handleAddGroup,
      handleGroup: this.handleGroup,
      handleUser: this.handleUser,
      handleEvent: this.handleEvent,
    };
    // console.log(this.state);
    return (
      <ApiContext.Provider value={value}>
        <section id="dash-body">
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
                return <DashSideNav />;
              }}
            />
          ))}
          <main className="Dash__main">{this.renderMainRoutes()}</main>
        </section>
      </ApiContext.Provider>
    );
  }
}

export default withRouter(Dashboard);
