import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {AuthRoute, ProtectedRoute} from '../utils/route_util'
import {Route, Switch} from 'react-router-dom'
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container'
// import SearchContainer from './search/search_container'
import MappingIndexContainer from './mapping/mapping_index_container'
import RoutesLogIndexContainer from "./routeslog/routeslog_index_container"



const App = () => (
  <div className='app-container'>
    <nav className='nav-link'>
    <GreetingContainer />
    </nav>
      <ProtectedRoute exact path="/dashboard" component={RoutesLogIndexContainer}/> 
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <ProtectedRoute exact path="/create_route" component={MappingIndexContainer}/> 
      <AuthRoute path="/" component={SplashContainer}/>
    </Switch>

  </div>
);

export default App;