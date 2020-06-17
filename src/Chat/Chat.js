import React, { Component } from "react";
import './Chat.css'

export default class Chat extends Component {
  //need post request
  render(){
  return (
    <div className="Chat" key={this.props.id}>
      <p>{this.props.user_name}</p>
      <p className='chat'>{this.props.comment}</p>
    </div>
  );
}}
