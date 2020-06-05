import React, { Component } from "react";
import { Link } from "react-router-dom";
import './HomePage.css'
import dashboard from '../images/dashboard-ex.jpg'
import bible from '../images/bible.jpg'
import chat from '../images/chat.jpg'
import potluck from '../images/potuck.jpg'
import prayer from '../images/prayer.jpg'

export default class HomePage extends Component {


  render() {
    return (
      <div>
        <div className="hero">
          <h2>Love oneAnother...</h2>
          <h3>Build up oneAnother...</h3>
          <h4>Serve oneAnother...</h4>
          <p>
            Open a Bible app, discuss food options in an email, announcements in
            a group chat, and you seem to always be out of the loop with what's
            next.Join oneAnother, the app that allows you to do everything
            imaginable for your church small group in one location!
          </p>
          <Link className='get-started' to="/signup">Get Started</Link>
          <img className='dashboard-image' src={dashboard} alt='dashboard screenshot' />
        </div>
        <section className='slider'>
          Slider
        </section>
        <section className='features'>
          <div className='feature bible'>
            <img className='feature-pic' src={bible} alt='bible' />
            <div className='feature-text'>
            <h2>Read with oneAnother</h2>
            <p>Read the Bible while you're still in the app and following along with the study questions.</p>
            </div>
          </div>
          <div className='feature chat'>
            <div className='feature-text'>
            <h2>Chat with oneAnother</h2>
            <p>Reach out to those in your group even when you're away. Leave messages for the whole group.</p>
            </div>
            <img className='feature-pic' src={chat} alt='chat icon' />

          </div>
          <div className='feature prayer'>
          <img className='feature-pic' src={prayer} alt='praying hands' />
          <div className='feature-text'>
            <h2>Pray for oneAnother</h2>
            <p>You can leave a prayer request or pray for someone else. Others can check in and encourage oneAnother.</p>
            </div>
          </div>
          <div className='feature sign-up'>
          <div className='feature-text'>
            <h2>Support oneAnother</h2> 
            <p>Leave a list of items for others to bring to group, people can check them off to sign up and bring them.</p>
            </div>
            <img className='feature-pic' src={potluck} alt='food on picnic table' />          
          </div>
        </section>
      </div>
    );
  }
}
