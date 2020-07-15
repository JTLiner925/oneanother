import React from "react";
import { a } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-jt">
        <a href="https://github.com/JTLiner925" target="blank">
          <p>GitHub</p>
        </a>
        <a href="https://jtliner925.github.io/jt-portfolio/" target="blank">
          <p>Portfolio</p>
        </a>
        <a href="https://www.linkedin.com/in/jtliner/" target="blank">
          <p>LinkedIn</p>
        </a>
      </div>
      <div className="footer-icon">
        <a href="https://icons8.com/icon/105361/holy-bible">
          <p>Holy Bible icon by Icons8</p>
        </a>
      </div>
    </footer>
  );
}
