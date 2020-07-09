import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";
import Carousel from "nuka-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPray,
  faBible,
  faUser,
  faUserFriends,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";

export default class HomePage extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="hero">
          <h2 className="love-header">Love oneAnother...</h2>
          <h2 className="build-header">Build up oneAnother...</h2>
          <h2 className="serve-header">Serve oneAnother...</h2>
          <div className="img-fade"></div>
          <p className="intro-text">
            Open a Bible app, discuss food options in an email, announcements in
            a group chat, and you seem to always be out of the loop with what's
            next.
          </p>
          <Link className="get-started" to="/signup">
            <button className="signup sign-up">Get Started</button>
          </Link>
        </div>
        <Carousel className="carousel">
          <div className="slide slide1">
            <FontAwesomeIcon id="user-icon" icon={faUser} />
            <p>
              Join oneAnother and do everything imaginable for your church small
              group in one location!
            </p>
          </div>
          <div className="slide slide2">
            <FontAwesomeIcon icon={faUserFriends} />
            <p>Pray for oneAnother</p>
          </div>
          <div className="slide slide3">
            <FontAwesomeIcon icon={faUsers} />
            <p>Support oneAnother</p>
          </div>
        </Carousel>
        <section className="features">
          <div className="feature bible">
            <div className="feature-text">
              <h2>Read with oneAnother</h2>
              <p>
                Read the Bible while you're still in the app and following along
                with the study questions.
              </p>
            </div>
            <FontAwesomeIcon icon={faBible} />
          </div>
          <div className="feature prayer">
            <FontAwesomeIcon className="pray-icon" icon={faPray} />
            <div className="feature-text">
              <h2>Pray for oneAnother</h2>
              <p>
                You can leave a prayer request or pray for someone else. Others
                can check in and encourage oneAnother.
              </p>
            </div>
          </div>
          <div className="feature support">
            <div className="feature-text">
              <h2>Support oneAnother</h2>
              <p>
                Leave a list of items for others to bring to group, people can
                check them off to sign up and bring them.
              </p>
            </div>
            <FontAwesomeIcon className="support-icon" icon={faListAlt} />
          </div>
        </section>
      </div>
    );
  }
}
