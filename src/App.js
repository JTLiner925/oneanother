import React, { Component } from "react";
import { Route } from 'react-router-dom'
import HomeNav from './HomeNav/HomeNav'
import Footer from './Footer/Footer'
import HomePage from './HomePage/HomePage'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/SignUp'

import Dashboard from './Dashboard/Dashboard'
import "./App.css";

class App extends Component {

  signUp = (formData) => {
    console.log(formData)
  }
  
  logIn = (formData) => {
    console.log(formData)
  }
  render() {
    return (
    <main className='App'>
      {['/', '/login', '/signup'].map((path) =>(
        <Route key={path} exact path = {path} component={HomeNav} />
      ))}
      <Route exact path='/' component={HomePage} />
      <Route  path='/login' render={() => {
        return (
          <LogIn onLogIn={this.logIn}></LogIn>
        )
      }} />
      <Route  path='/signup' render={() => {
        return (
          <SignUp onSignUp={this.signUp}></SignUp>
        )
      }} />
      {['/dashboard', '/bible', '/invite', '/groupinfo', '/creategroup', '/createevent', '/prayerrequests', '/dashboard/:event_id'].map((path) =>(
        <Route key={path} exact path = {path} component={Dashboard} />
      ))}
        <Route path='/*' component={Footer} />
      </main>
    );
  }
}

export default App;
