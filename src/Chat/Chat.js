import React from "react";

export default function Chat(props) {
  return (
    <div className="Chat" key={props.key}>
      <p>{props.user_name}</p>
      <p>{props.comment}</p>
    </div>
  );
}
