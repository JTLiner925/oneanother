import React from 'react'
import { Link } from "react-router-dom";
import './LogIn.css'

export default function LogIn() {
  return (
    <form className="container">
    <h1>Welcome Back! <span role='img' aria-label='wave' className="wave">👋🏾</span></h1>

    Email:
    <input type="email" />

    Password:
    <input type="password" />
    <a href="#">Forgot Password</a>
    <Link to='/dashboard'><button className="login">Login</button></Link>
    <Link to='/signup'><button className="signup">Sign Up</button></Link>
    
    
    <p className="disclaimer">This is a demo! Please do not enter any personal information.</p>
  </form>
    // <div>
    //   <h2>Log In</h2>
    // <form>
    //   <div>
    //   <label htmlFor='username-input'>Username</label>
    //   <input id='username-input'></input>
    //   </div>
    //   <div>
    //   <label htmlFor='password-input'>Password</label>
    //   <input id='password-input'></input>
    //   </div>
    //   <div className="buttons">
    //         <button type="submit">Log In</button>
    //         <Link to='/signup'>Sign Up</Link>
    //       </div>
    // </form>
    // </div>
  )
}
