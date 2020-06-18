import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import "./DashMain.css";
import ApiContext from "../ApiContext";
import STORE from "../Store";
import { getPrayersForGroup } from '../helpers';
import DashCenter from '../DashCenter/DashCenter';
import DashRight from "../DashRight/DashRight";

export default class DashMain extends Component {
 
  state = {
    store: STORE,
  };
  static contextType = ApiContext;
  
  render() {
    
    const { store } = this.state;
    const groupId = parseInt(store.groups[0].id);
    const prayers  = store.prayers;
    const prayersForGroup = getPrayersForGroup(prayers, groupId)
    console.log(getPrayersForGroup(prayers, groupId))
    return (
      <div className="main-body">
        <nav className="main-nav">
          <h2>{store.one_another_users[0].group_id[0]}</h2>

          <Link to="/signup">
            <p>{store.one_another_users[0].first_name}</p>
          </Link>
        </nav>
        

        <div className="event-alert">
        <div className="votd-container"></div>
          <h3>Stories of Hope...</h3>
          <p>{store.events[1].lesson_title}</p>
        </div>
        <div className='main'>
        {['/dashboard', '/bible', '/invite', '/groupinfo', '/creategroup', '/createevent', '/prayerrequests', '/dashboard/:bible_passage', '/dashboard/group/:group_id'].map((path) => (
          <Route exact key={path} path={path} 
          render={() => {
            return <DashCenter passage={this.props.passage}/>
          }} 
          />
        ))} 
        
        {['/dashboard', '/bible', '/invite', '/groupinfo', '/creategroup', '/createevent', '/prayerrequests', '/dashboard/:bible_passage', '/dashboard/group/:group_id'].map((path) => (
          <Route exact key={path} path={path} 
          render={() => {
            return <DashRight />
          }} 
          />
        ))}
        </div>
      </div>
    );
  }
}
