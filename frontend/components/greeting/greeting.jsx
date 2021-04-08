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
  const personalDashbaord = () => (
    <div className="dash-board-container">
      <div>
        <a className='homeLogo' href="/"></a>
      </div>
      <div>
        <h2 className="header-name">Hi, {currentUser.username}!</h2>
        <button className="logout-button" onClick={logout}>Log Out</button>
      </div>
    </div>

    // <hgroup className="header-group">
    //   <h2 className="header-name">Hi, {currentUser.username}!</h2>
    //   <button className="header-button" onClick={logout}>Log Out</button>
    // </hgroup>
    
  );

  return currentUser ? personalDashbaord() : sessionLinks();
};

export default Greeting;
