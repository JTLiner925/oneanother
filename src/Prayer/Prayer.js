import React, { Component } from "react";
import "./Prayer.css";
import "../DashMain/DashMain.css";
export default class Prayer extends Component {
  render() {
    return (
      <div>
        <p>{this.props.request}</p>
      </div>
    );
  }
}
