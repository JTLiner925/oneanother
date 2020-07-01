import React from "react";
import './Needed.css'

export default function Needed(props) {
  // console.log(props.item);
  return (
    <div className="Needed">
      <div className="Item">
        <p>Items to bring to group</p>
        {props.item.map((item, i) => {
          return (
            <div key={i}>
              <input
                type="checkbox"
                id={item}
                className="visually-hidden"
                value={item}
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
