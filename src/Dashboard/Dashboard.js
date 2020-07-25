import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import config from "../config";
import DashSideNav from "../DashSideNav/DashSideNav";
import DashMain from "../DashMain/DashMain";
import Bible from "../Bible/Bible";
import Invite from "../Invite/Invite";
import ApiContext from "../ApiContext";
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
    //event handler for hamburger menu
    let elem = document.querySelector(".side-nav-body");
    if (elem.style.display === "block") {
      elem.style.display = "none";
    } else {
      elem.style.display = "block";
    }
  };
  HamNavPage = () => {
    //event handler for menu to collapse by clicking in other places other than hamburger icon
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
    let i = window.location.search;
    let x = new URLSearchParams(i);
    // let eventId;
    for (let [key, value] of x) {
      if (key === "eventId") {
      let eventId = value;
      }
      this.setState({
        [key]: value,
      });
    }

    //call api for data to display in dashboard
    this.setState({
      eventMessage: "",
    });
    Promise.all([
      fetch(`${config.HOST}/api/users`, {
        headers: {
          "Content-Type": "application/json",
        },

        method: "GET",
      }),
      fetch(`${config.HOST}/api/groups`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        method: "GET",
      }),
      fetch(`${config.HOST}/api/events`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        method: "GET",
      }),
      fetch(`${config.HOST}/api/needed`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${window.localStorage.getItem("token")}`,
        },
        method: "POST",
        body: JSON.stringify({ event_id: eventId }),
      }),
    ])
      .then(([userRes, groupRes, eventRes, needRes]) => {
        return Promise.all([
          userRes.json(),
          groupRes.json(),
          eventRes.json(),
          needRes.json(),
        ]);
      })
      .then(([users, groups, events, needed]) => {
        let userId = users.find(
          (user) => user.first_name === window.localStorage.getItem("userName")
        );

        this.setState({
          users: users,
          groups: groups,
          events: events,
          userId: userId.id,
          needed: needed,
        });
        //maintain bible passage even if page refreshes
        this.handleBiblePassage(this.state.eventId);
      })
      .catch((error) => {
        this.setState({ error });
      });
  }

  handleBiblePassage = (eventId) => {
    //bible api call
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
          this.setState({ error });
        });
    }
  };
  resetError = () => {
    //reset error message when I leave page
    this.setState({
      eventMessage: "",
    });
  };
  createGroup = (formData) => {
    //add group to api
    fetch(`${config.HOST}/api/groups/creategroup`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            return Promise.reject(new Error(data.error.message));
          });
        } else {
          return res.json();
        }
      })
      .then((resData) => {
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        this.setState({ createMessage: error.message });
      });
  };
  joinGroup = (formData) => {
    //join current group
    fetch(`${config.HOST}/api/groups/joingroup`, {
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
  pushNeededItems = (id, neededItems) => {
    fetch(`${config.HOST}/api/needed/add-item`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify({ id, neededItems }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  createEvent = (formData) => {
    //add event for group
    fetch(`${config.HOST}/api/events/createevent`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${window.localStorage.getItem("token")}`,
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((data) => {
            return Promise.reject(new Error(data.error.message));
          });
        } else {
          return res.json();
        }
      })
      .then((resData) => {
        this.pushNeededItems(resData.eventId, formData.needed_items);
      })
      .catch((error) => {
        this.setState({ eventMessage: error.message });
      });
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
    //different routes for main section
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
                  needed={this.state.needed}
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
                resetError={this.resetError}
                eventMessage={this.state.eventMessage}
                groups={this.state.groups}
                userId={this.state.userId}
                onCreateEvent={this.createEvent}
                onHandleHam={this.HamNavPage}
              ></CreateEvent>
            );
          }}
        />
      </>
    );
  }
  render() {
    //grab groups and events based on routing groupId and eventId
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

export default Dashboard;
