import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout, login }) => {
  const sessionLinks = () => (
    <div>
      <nav className="nav-login-signup">
        <div>
          <a className='homeLogo' href="/"></a>
        </div>
        <div className='nav-li'>
          <Link to="/login" className='login-button'>LOGIN</Link>
          <Link to="/signup" className='signup-button'>SIGN UP</Link>
        </div>

      </nav>
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
