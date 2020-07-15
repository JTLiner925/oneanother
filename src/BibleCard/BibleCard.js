import React, { Component } from "react";
import "./BibleCard.css";

export default class BibleCard extends Component {
  //display bible passage on dashboard
  render() {
    return (
      <div className="bible-text">
        <h3>{this.props.canonical}</h3>
        <p>{this.props.passage}</p>
      </div>
    );
  }
}
