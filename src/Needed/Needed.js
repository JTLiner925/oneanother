import React, { Component } from "react";
import './Needed.css'

export default class Needed extends Component {
  // console.log(props.item);
  // changeHandler = (e) => {
    
  //     if(e.target.check === 'false'){
  //       e.target.check = 'true'
  //     }else {
  //       e.target.check === 'false'
  //     }
  //     // [e.target.name]: e.target.checked,
 
  // };
  render(){
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
                check='false'
             
              />
              <label htmlFor={item}>{item}</label>
            </div>
          );
        })}
        <p>Please don't forget your items!</p>
      </div>
    </div>
  );
}}
