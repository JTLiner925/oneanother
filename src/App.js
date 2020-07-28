import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import HomeNav from "./HomeNav/HomeNav";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import Dashboard from "./Dashboard/Dashboard";
import config from './config'
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };
  signUp = (formData) => {
    //sign up for an account - feeds into login()
    fetch(`${config.HOST}/api/users/signup`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        this.logIn(formData);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };
  handleAddUser = (user) => {
    this.setState({
      users: [...this.state.users, user],
    });
  };
  resetError = () => {
    this.setState({
      message: "",
    });
  };
  logIn = (formData) => {
    //logs into dashboard
    fetch(`${config.HOST}/api/users/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            return Promise.reject(new Error(data.error.message));
          });
        }
      })
      .then((userData) => {
        window.localStorage.setItem("token", userData.token);
        window.localStorage.setItem("userName", userData.userName);
        this.props.history.push("/dashboard");
      })
      .catch((error) => {
        this.setState({ message: error.message });
      });
  };
  render() {
    return (
      <main className="App">
        {["/", "/login", "/signup"].map((path) => (
          <Route
            key={path}
            exact
            path={path}
            render={() => {
              return <HomeNav resetError={this.resetError} />;
            }}
          />
        ))}
        <Route exact path="/" component={HomePage} />
        <Route
          path="/login"
          render={() => {
            return (
              <LogIn
                message={this.state.message}
                resetError={this.resetError}
                onLogIn={this.logIn}
              ></LogIn>
            );
          }}
        />
        <Route
          path="/signup"
          render={() => {
            return <SignUp onSignUp={this.signUp}></SignUp>;
          }}
        />
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
          <Route key={path}  path={path} component={Dashboard} />
        ))}
        <Route path="/*" component={Footer} />
      </main>
    );
  }
}

export default withRouter(App);
