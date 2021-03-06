import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import {AuthRoute, ProtectedRoute} from '../utils/route_util';
import {Route, Switch} from 'react-router-dom';
import LogInFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import SplashContainer from './splash/splash_container';
import MappingIndexContainer from './mapping/mapping_index_container';
import RoutesLogIndexContainer from "./routeslog/routeslog_index_container";
import RoutesLogEditContainer from './routeslog/routeslog_edit_container';
import FriendsIndexContainer from './friend/friend_index_container';
import FriendFinderContainer from './friend/friend_finder_container';
import UsersShowContainer from './user/user_show_container';
import RouteslogShowContainer from './routeslog/routeslog_show_container';
import LikeIndexContainer from './like/like_index_container';
import { connect } from 'react-redux';
import { clearSessionErrors } from "../actions/session_actions";


const App = () => (
  <div className='app-container'>
    <nav className='nav-link'>
    <GreetingContainer/>
    </nav>
      <ProtectedRoute exact path='/likes' component={LikeIndexContainer}/>
      <ProtectedRoute exact path='/dashboard/friends' component={FriendsIndexContainer} />
      <ProtectedRoute exact path='/dashboard/friends/find' component={FriendFinderContainer} />
      <ProtectedRoute exact path="/dashboard" component={RoutesLogIndexContainer} /> 
      <ProtectedRoute exact path="/routeslog/:id/edit" component={RoutesLogEditContainer} /> 
      <ProtectedRoute exact path='/users/:userId' component={UsersShowContainer} />
      <ProtectedRoute exact path="/create_route" component={MappingIndexContainer} /> 
      <ProtectedRoute exact path="/routeslog/:id" component={RouteslogShowContainer} />
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
      <AuthRoute path="/" component={SplashContainer} />
    </Switch>

  </div>
);


export default App;