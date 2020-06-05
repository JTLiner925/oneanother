import React, { Component } from "react";
import { Route } from 'react-router-dom'
import HomeNav from './HomeNav/HomeNav'
import HomePage from './HomePage/HomePage'
import LogIn from './LogIn/LogIn'
import SignUp from './SignUp/SignUp'
import "./App.css";

class App extends Component {
  render() {
    return (
    <main className="App">
      {['/', '/login', '/signup'].map((path) =>(
        <Route key={path} exact path = {path} component={HomeNav} />
      ))}
      <Route exact path='/' component={HomePage} />
      <Route  path='/login' component={LogIn} />
      <Route  path='/signup' component={SignUp} />
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
