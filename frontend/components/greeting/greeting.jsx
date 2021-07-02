import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, login }) => {
  const sessionLinks = () => (
    <div className='nav-container'>
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
    <div>
      <div className="dash-board-container">
        <div className='dash-board-nav'>
          <div><a className='homeLogo' href="/"></a></div>
          <div><Link to="/create_route" className="create-route-button">Create Route</Link></div>
          <div><button className="logout-button" onClick={logout}>Log Out</button></div>
        </div>
      </div>

    </div>
  );

  return currentUser ? personalDashbaord() : sessionLinks();
};

export default Greeting;
