import React from 'react'
import DashSideNav from '../DashSideNav/DashSideNav'
import DashMain from '../DashMain/DashMain'
import './Dashboard.css'

export default function Dashboard() {
  return (
    <section id='dash-body'>
      <DashSideNav />
      <DashMain />
    </section>
  )
}
