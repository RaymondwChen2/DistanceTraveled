import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {AuthRoute} from '../utils/route_util'
import {Route, Switch} from 'react-router-dom'
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';

const App = () => (
  <div>
    <header>
    <h1>DistanceTravelled</h1>
    <GreetingContainer />
    </header>
    <AuthRoute path="/login" component={LogInFormContainer} />
    <AuthRoute path="/signup" component={SignUpFormContainer} />
  </div>
);

export default App;