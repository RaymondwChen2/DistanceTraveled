import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/store'
import Root from "./components/root";
// import { login, signup, logout } from './utils/session';
import {fetchRoutes, createRoute} from './actions/mapping'


document.addEventListener('DOMContentLoaded', ()=> {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser },
      },
      session: { id: window.currentUser.id, apikey: window.googleAPIKey }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
    window.getState = store.getState;
    window.dispatch = store.dispatch
    window.fetchRoutes = fetchRoutes
    window.createRoute = createRoute
  const root = document.getElementById('root')
  ReactDOM.render(<Root store={store}/>, root)

});