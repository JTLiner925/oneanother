import React, { Component } from "react";
import { Route } from 'react-router-dom'
import HomePage from './HomePage/HomePage'
import "./App.css";

class App extends Component {
  render() {
    return <main className="App">
      <Route path='/' component={HomePage} />
      </main>;
  }
}

export default App;
