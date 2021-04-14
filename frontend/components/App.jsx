import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {AuthRoute} from '../utils/route_util'
import {Route, Switch} from 'react-router-dom'
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container'
// import SearchContainer from './search/search_container'
import MappingContainer from './mapping/mapping_index_container'


const App = () => (
  <div className='app-container'>
    <nav className='nav-link'>
    <GreetingContainer />
    </nav>
    <Switch>
    <AuthRoute exact path="/login" component={LogInFormContainer} />
    <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    <AuthRoute exact path="/" component={SplashContainer}/>
    <Route exact path="/mapping" component={MappingContainer}/> 
    </Switch>

  </div>
);

export default App;