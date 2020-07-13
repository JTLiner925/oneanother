import React, { Component } from "react";
import { Route, withRouter, Link } from "react-router-dom";
import config from "../config";
import DashSideNav from "../DashSideNav/DashSideNav";
import DashMain from "../DashMain/DashMain";
import Bible from "../Bible/Bible";
import Invite from "../Invite/Invite";
import ApiContext from "../ApiContext";
// import HEROKU_API from "../config";
import CreateGroup from "../CreateGroup/CreateGroup";
import CreateEvent from "../CreateEvent/CreateEvent";
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
    if (elem.style.display === "block") {
      elem.style.display = "none";
    } else {
      elem.style.display = "block";
    }
  };
  HamNavPage = () => {
    let elem = document.querySelector(".side-nav-body");
    if (elem.style.display === "none") {
      elem.style.display = "none";
    } else {
      elem.style.display = "none";
    }
  };
  setGroup = (group) => {
    this.setState({
      group,
      error: null,
    });
  };

  componentDidMount() {
    Promise.all([
      fetch(`https://mighty-brook-70505.herokuapp.com/api/users`, {
        headers: {
          "Content-Type": "application/json",
        },

        method: "GET",
      }),
      fetch(`https://mighty-brook-70505.herokuapp.com/api/groups`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        method: "GET",
      }),
      fetch(`https://mighty-brook-70505.herokuapp.com/api/events`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        method: "GET",
      }),
    ])
      .then(([userRes, groupRes, eventRes]) => {
        return Promise.all([userRes.json(), groupRes.json(), eventRes.json()]);
      })
      .then(([users, groups, events]) => {
        let userId = users.find(
          (user) => user.first_name === window.localStorage.getItem("userName")
        );
        console.log(userId);
        this.setState({
          users: users,
          groups: groups,
          events: events,
          userId: userId.id,
        });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error });
      });
    let i = window.location.search;
    let x = new URLSearchParams(i);
    for (let [key, value] of x) {
      this.setState({
        [key]: value,
      });
    }
  }

  handleBiblePassage = (eventId) => {
    let selectedEvent = this.state.events.find((event) => {
      return event.id.toString() == eventId;
    });
    if (selectedEvent) {
      let url = new URL(`${config.API_ENDPOINT}text/`);
      url.searchParams.set("q", selectedEvent.bible_passage);
      url.searchParams.set("include-passage-reference", false);
      url.searchParams.set("include-verse-number", true);
      url.searchParams.set("include-first-verse-number", false);
      url.searchParams.set("include-footnotes", true);
      url.searchParams.set("include-footnote-body", false);
      url.searchParams.set("include-heading", false);
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
    }
  };

  invite = (formData) => {
    console.log(formData);
  };

  createGroup = (formData) => {
    console.log(formData);
    fetch(`https://mighty-brook-70505.herokuapp.com/api/groups/creategroup`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          res.json().then((data) => {
            return Promise.reject(new Error(data.error.message));
          });
        }
      })
      .then((resData) => {
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ createMessage: error.message });
      });
  };
  joinGroup = (formData) => {
    fetch(`https://mighty-brook-70505.herokuapp.com/api/groups/joingroup`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        if (resData.message !== "Already Joined Group") {
          this.props.history.push("/dashboard");
        } else {
          this.setState({
            message: resData.message,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  createEvent = (formData) => {
    console.log(formData);

    fetch(`https://mighty-brook-70505.herokuapp.com/api/events/createevent`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then(() => {
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error });
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
    this.setState({
      groupId: groupId,
    });
  };
  handleUser = (userId) => {
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
    let userName = window.localStorage.getItem("userName");

    return (
      <>
        <nav className="main-nav">
          <FontAwesomeIcon id="icon" icon={faBars} onClick={this.HamNav} />
          {this.state.groupId ? (
            this.state.groups.map((group) => {
              if (group.id && group.id == this.state.groupId) {
                return <h2 key={group.group_name}>{group.group_name}</h2>;
              }
            })
          ) : (
            <h1 className="dashHeader">oneAnother</h1>
          )}

          <Link to="/">
            <p className="userName" key={userName}>
              Log out {userName}
            </p>
          </Link>
        </nav>

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
                  onHandleHam={this.HamNavPage}
                  passage={this.state.passage}
                  groups={this.state.groups}
                  events={this.state.events}
                  groupId={this.state.groupId}
                  eventId={this.state.eventId}
                  users={this.state.users}
                  userId={this.state.userId}
                ></DashMain>
              );
            }}
          />
        ))}
        <Route
          path="/bible"
          render={() => {
            return <Bible onHandleHam={this.HamNavPage}></Bible>;
          }}
        />
        <Route
          path="/invite"
          render={() => {
            return (
              <Invite
                onInvite={this.invite}
                onHandleHam={this.HamNavPage}
              ></Invite>
            );
          }}
        />

        <Route
          path="/creategroup"
          render={() => {
            return (
              <CreateGroup
                createMessage={this.state.createMessage}
                message={this.state.message}
                groups={this.state.groups}
                onCreateGroup={this.createGroup}
                onJoinGroup={this.joinGroup}
                onHandleHam={this.HamNavPage}
              ></CreateGroup>
            );
          }}
        />
        <Route
          path="/createevent"
          render={() => {
            return (
              <CreateEvent
                groups={this.state.groups}
                userId={this.state.userId}
                onCreateEvent={this.createEvent}
                onHandleHam={this.HamNavPage}
              ></CreateEvent>
            );
          }}
        />
        {/* <Route
          path="/prayerrequests"
          render={() => {
            return (
              <PrayerRequests
                onPrayerRequest={this.prayerRequest}
                onPrayerEncourage={this.prayerEncourage}
              ></PrayerRequests>
            );
          }}
        /> */}
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
      if (key === "eventId") {
        if (value !== this.state.eventId) {
          this.handleBiblePassage(value);
          this.handleEvent(value);
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
                return (
                  <DashSideNav
                    events={this.state.events}
                    groups={this.state.groups}
                    users={this.state.users}
                    userId={this.state.userId}
                  />
                );
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
