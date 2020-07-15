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
            Join oneAnother and do everything imaginable for your church small
            group in one location!
          </p>
          <Link className="get-started" to="/signup">
            <button className="sign-up">Get Started</button>
          </Link>
        </div>
        <Carousel className="carousel">
          <div className="slide slide1">
            <FontAwesomeIcon id="user-icon" icon={faUser} />
            <h3>
              Join oneAnother and stay connected to your small group!
            </h3>
          </div>
          <div className="slide slide2">
            <FontAwesomeIcon id="user-friends-icon" icon={faUserFriends} />
            <h3>Pray for oneAnother</h3>
          </div>
          <div className="slide slide3">
            <FontAwesomeIcon id="users-icon" icon={faUsers} />
            <h3>Support oneAnother</h3>
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
