import React from "react";
import { Link } from "react-router-dom";
import "./HomeNav.css";

export default function HomeNav(props) {
  return (
    <header className="App__header">
      <h1>
        <Link className="logo" to="/" data-shadow="oneAnother" onClick={props.resetError}>
          oneAnother
        </Link>{" "}
      </h1>
      <p>
        <Link to="/login">Log In</Link>{" "}
      </p>
    </header>
  );
}
