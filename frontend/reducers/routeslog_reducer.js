import {RECEIVE_ALL_ROUTESLOGS} from '../actions/routeslog';

const routeslogReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch (action.type){
    case RECEIVE_ALL_ROUTESLOGS:
      return action.routes
    default: 
      return state;
  }
}

export default routeslogReducer;