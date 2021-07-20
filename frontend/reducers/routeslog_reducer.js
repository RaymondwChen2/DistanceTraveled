import {RECEIVE_ALL_ROUTESLOGS, RECEIVE_ROUTE, REMOVE_ROUTE} from '../actions/routeslog';

const routeslogReducer = (state = {}, action) => {
  Object.freeze(state)
  const nextState = Object.assign({}, state);

  switch (action.type){
    case RECEIVE_ALL_ROUTESLOGS:
      return action.routes;
    case RECEIVE_ROUTE:
      return action.route;
      case REMOVE_ROUTE:
        delete nextState[action.routeId];
        return nextState;
    default: 
      return state;
  }
}

export default routeslogReducer;