import React, { Component } from "react";
import "./BibleCard.css";

export default class BibleCard extends Component {
  render() {
    const { lesson_title } = this.props
    console.log(this.props)
    return (
      <div className='bible-text'>
        {/* <h3>{lesson_title}</h3> */}
        <h3>{this.props.canonical}</h3>
        <p>{this.props.passage}</p>
      </div>
    );
  }
}
