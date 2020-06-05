import React from "react";
import { Link } from "react-router-dom";
import './HomeNav.css'

export default function HomeNav() {
  return (
    <header className="App__header">
      <h1>
        <Link to="/">oneAnother</Link>{" "}
      </h1>
      <p>
        <Link to="/login">Log In</Link>{" "}
      </p>
    </header>
  );
}
