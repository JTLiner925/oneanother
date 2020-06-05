import React from 'react'
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from '@fontawesome/react-fontawesome';
// import { fas } from '@fontawesome/free-solid-svg-icons'
import './SignUp.css'

export default function SignUp() {
  return (
    <div>
      <h2>Sign Up</h2>
    <form>
      <div>
      <label htmlFor='username-input'>Username</label>
      <input id='username-input'></input>
      </div>
      <div>
      <label htmlFor='password-input'>Password</label>
      <input id='password-input'></input>
      </div>
      <div>
      {/* <FontAwesomeIcon icon={fas}/>
      <i class="far fa-user-circle"></i> */}
        need to code in an image selection
      </div>
      <div>
        <label htmlFor='first-name-input'>First Name</label>
        <input id='first-name-input'></input>
      </div>
      <div>
        <label htmlFor='last-name-input'>Last Name</label>
        <input id='last-name-input'></input>
      </div>
      <div>
        <label htmlFor='address-input'>Address</label>
        <input id='address-input'></input>
      </div>
      <div>
        <label htmlFor='bio-input'>Tell us about yourself!</label>
        <input id='bio-input'></input>
      </div>
      <div className="buttons">
            <button type="submit">Sign Up</button>
            <Link to='/login'>Log In</Link>
          </div>
    </form>
    </div>
  )
}
