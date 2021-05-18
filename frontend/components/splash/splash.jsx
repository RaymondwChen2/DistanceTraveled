import React from 'react';
import { Link } from 'react-router-dom';

const Splash = () => {
  return (
    <div className='splash-container'>
      <div>
        <div className='splash'>
          <h2>Your Journey Starts Here</h2>
          <p>The app that will change the way you workout</p>
          <div><Link to="/signup" className='splash-signup'>SIGN UP</Link></div>
          <div className='splash-login'>Already a member? <Link to="/login" className='login-button'>LOGIN</Link></div>
          </div>

      </div>
        <div className='splashDiag' ></div>
        <div className='splash2'></div>
    </div>
    
  )
}

export default Splash