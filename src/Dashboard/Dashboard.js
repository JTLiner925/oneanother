import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import DashSideNav from '../DashSideNav/DashSideNav'
import DashMain from '../DashMain/DashMain'
import Bible from '../Bible/Bible'
import Invite from '../Invite/Invite'
import GroupInfo from '../GroupInfo/GroupInfo'
import './Dashboard.css'

export default class Dashboard extends Component {
  invite = (formData) => {
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
      
      
    </section>
    )}
}
