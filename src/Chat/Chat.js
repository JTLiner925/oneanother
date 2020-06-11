import React from "react";
import './Chat.css'

export default function Chat(props) {
  return (
    <div className="Chat" key={props.id}>
      <p>{props.user_name}</p>
      <p className='chat'>{props.comment}</p>
    </div>
  );
}
