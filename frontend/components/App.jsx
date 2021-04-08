import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {AuthRoute} from '../utils/route_util'
import {Route, Switch} from 'react-router-dom'
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div className='nav-login-signup'>
    <header className='nav-link'>
    <GreetingContainer />
    <AuthRoute path="/login" component={LogInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
    </header>
  </div>
);

export default App;