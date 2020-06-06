import React, { Component } from "react";
import { Route } from 'react-router-dom'
import HomeNav from './HomeNav/HomeNav'
import HomePage from './HomePage/HomePage'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/SignUp'
import Dashboard from './Dashboard/Dashboard'
import "./App.css";

class App extends Component {

  signUp = (formData) => {
    console.log(formData)
  }

  render() {
    return (
    <main className='App'>
      {['/', '/login', '/signup'].map((path) =>(
        <Route key={path} exact path = {path} component={HomeNav} />
      ))}
      <Route exact path='/' component={HomePage} />
      <Route  path='/login' component={LogIn} />
      <Route  path='/signup' render={() => {
        return (
          <SignUp onSignUp={this.signUp}></SignUp>
        )
      }} />
      {['/dashboard', '/creategroup'].map((path) =>(
        <Route key={path} exact path = {path} component={Dashboard} />
      ))}

        <footer>
          <p>GitHub</p>
          <p>Portfolio</p>
          <p>LinkedIn</p>
        </footer>
      </main>
    );
  }
}

export default App;
