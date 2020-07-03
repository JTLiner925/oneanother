import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import HomeNav from "./HomeNav/HomeNav";
import Footer from "./Footer/Footer";
import HomePage from "./HomePage/HomePage";
import LogIn from "./LogIn/LogIn";
import SignUp from "./SignUp/SignUp";
import HEROKU_API from './config'
import Dashboard from "./Dashboard/Dashboard";
import "./App.css";

class App extends Component {
  state = {
    users: [],
  };
  signUp = (formData) => {
   
    
    // console.log(formData);
    fetch(`https://mighty-brook-70505.herokuapp.com/api/users/signup`, {
      headers: {
        "Content-Type": "application/json",

      },
      // mode: 'no-cors',
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((formData) => {
        this.logIn(formData)
      })
      .catch((error) => {
        console.log(error);
      });
  };
handleAddUser = (user) => {
  this.setState({
    users: [...this.state.users, user]
  })
}
  logIn = (formData) => {
    // console.log(formData);
    fetch(`https://mighty-brook-70505.herokuapp.com/api/users/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      // mode: 'no-cors',
      method: "POST",
      body: JSON.stringify(formData),
    })
      .then((res) => {
       return res.json()
      })
      .then((userData) => {
        window.localStorage.setItem('token', userData.token)
        window.localStorage.setItem('userName', userData.userName)
        console.log(userData)
        this.props.history.push('/dashboard')
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    // console.log(this.props, window)
    return (
      <main className="App">
        {["/", "/login", "/signup"].map((path) => (
          <Route key={path} exact path={path} component={HomeNav} />
        ))}
        <Route exact path="/" component={HomePage} />
        <Route
          path="/login"
          render={() => {
            return <LogIn onLogIn={this.logIn}></LogIn>;
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
          <Route key={path} exact path={path} component={Dashboard} />
        ))}
        <Route path="/*" component={Footer} />
      </main>
    );
  }
}

export default withRouter(App);
