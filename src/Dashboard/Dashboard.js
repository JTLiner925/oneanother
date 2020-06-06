import React, { Component } from 'react'
import DashSideNav from '../DashSideNav/DashSideNav'
import DashMain from '../DashMain/DashMain'
import './Dashboard.css'

export default class Dashboard extends Component {
  render(){
  return (
    <section id='dash-body'>
      <DashSideNav />
      <DashMain />
    </section>
    )}
}
