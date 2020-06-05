import React from 'react'
import { Link } from "react-router-dom";
import './LogIn.css'

export default function LogIn() {
  return (
    <div>
      <h2>Log In</h2>
    <form>
      <div>
      <label htmlFor='username-input'>Username</label>
      <input id='username-input'></input>
      </div>
      <div>
      <label htmlFor='password-input'>Password</label>
      <input id='password-input'></input>
      </div>
      <div className="buttons">
            <button type="submit">Log In</button>
            <Link to='/signup'>Sign Up</Link>
          </div>
    </form>
    </div>
  )
}
