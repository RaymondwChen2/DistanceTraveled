import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, login }) => {
  const sessionLinks = () => (
    <div>
      <nav className="login-signup">
        <ul>
          <li><a className='homeLogo' href="/">DistanceTraveled</a></li>
        </ul>
        <ul className='nav-li'>
          <li className='login-submit'><Link to="/login" >Login</Link></li>
          <li className='sign-submit'><Link to="/signup" >Sign up</Link></li>
        </ul>
      </nav>
      <div className='splash'>
      </div>
    </div>  
    
);
  const personalGreeting = () => (
    <hgroup className="header-group">
      <h2 className="header-name">Hi, {currentUser.username}!</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </hgroup>
    
  );

  return currentUser ? personalGreeting() : sessionLinks();
};

export default Greeting;
