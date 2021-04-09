import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {AuthRoute} from '../utils/route_util'
import {Route, Switch} from 'react-router-dom'
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container'

const App = () => (
  <div className='app-container'>
    <nav className='nav-link'>
    <GreetingContainer />
    </nav>
    <Switch>
    <AuthRoute path="/login" component={LogInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    <AuthRoute path="/" component={SplashContainer}/>
    </Switch>

  </div>
);

export default App;