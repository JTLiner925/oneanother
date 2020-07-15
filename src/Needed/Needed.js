import React, { Component } from "react";
import "./Needed.css";

export default class Needed extends Component {
  //display items needed for event
  render() {
    return (
      <div className="Needed">
        <div className="Item">
          <p>Items to bring to group</p>
          {this.props.item.map((item, i) => {
            return (
              <div key={i}>
                <input
                  type="checkbox"
                  id={item}
                  className="visually-hidden"
                  value={item}
                  check="false"
                />
                <label htmlFor={item}>{item}</label>
              </div>
            );
          })}
          <p>Please don't forget your items!</p>
        </div>
      </div>
    );
  }
}
