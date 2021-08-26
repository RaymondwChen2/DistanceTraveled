import {RECEIVE_ALL_ROUTESLOGS, RECEIVE_ROUTE, REMOVE_ROUTE} from '../actions/routeslog_actions';

const routeslogReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state);

  switch (action.type){
    case RECEIVE_ALL_ROUTESLOGS:
      action.routes.forEach(route => {
        nextState[route.id] = route;
      });
      return nextState;
    case RECEIVE_ROUTE:
      let routeKey = Object.keys(action.route)[0];
      nextState[routeKey] = Object.values(action.route)[0];
      return nextState;
    case REMOVE_ROUTE:
      delete nextState[action.routeId];
      return nextState;
    default: 
      return state;
  }
}

export default routeslogReducer;