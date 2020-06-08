import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import DashSideNav from '../DashSideNav/DashSideNav'
import DashMain from '../DashMain/DashMain'
import Bible from '../Bible/Bible'
import Invite from '../Invite/Invite'
import GroupInfo from '../GroupInfo/GroupInfo'
import CreateGroup from '../CreateGroup/CreateGroup'
import CreateEvent from '../CreateEvent/CreateEvent'
import PrayerRequests from '../PrayerRequests/PrayerRequests'
import './Dashboard.css'

export default class Dashboard extends Component {
  invite = (formData) => {
    console.log(formData)
  }
  createGroup = (formData) => {
    console.log(formData)
  }
  joinGroup = (formData) => {
    console.log(formData)
  }
  createEvent = (formData) => {
    console.log(formData)
  }
  prayerRequest = (formData) => {
    console.log(formData)
  }
  prayerEncourage = (formData) => {
    console.log(formData)
  }
  render(){
  return (
    <section id='dash-body'>
      <Route path='/*' component={DashSideNav} />
      <Route path='/dashboard' component={DashMain} />
      <Route path='/bible' component={Bible} />

      <Route path='/invite' render={() => {
        return (
          <Invite onInvite={this.invite}></Invite>
        )
          
      }} />
     <Route path='/groupinfo' render={() => {
        return (
          <GroupInfo onInvite={this.invite}></GroupInfo>
        )
     }} />
     <Route path='/creategroup' render={() => {
       return (
         <CreateGroup 
         onCreateGroup={this.createGroup}
         onJoinGroup={this.joinGroup}
         ></CreateGroup>
       )
     }} />
      <Route path='/createevent' render={() => {
        return (
          <CreateEvent onCreateEvent={this.createEvent}></CreateEvent>
        )
     }} />
     <Route path='/prayerrequests' render={() => {
        return (
          <PrayerRequests 
          onPrayerRequest={this.prayerRequest}
          onPrayerEncourage={this.prayerEncourage}></PrayerRequests>
        )
     }} />
      
    </section>
    )}
}
