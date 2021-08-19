import { RECEIVE_CURRENT_USER } from '../actions/session';
import { RECEIVE_USERS, RECEIVE_FRIENDS, RECEIVE_USER } from '../actions/user';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let userId;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      userId = parseInt(Object.keys(action.currentUser)[0]);
      nextState[userId] = action.currentUser[userId];
      return nextState;
    case RECEIVE_USER:
      userId = Object.keys(action.user)[0];
      nextState[userId] = Object.values(action.user)[0];
      return nextState;
    case RECEIVE_FRIENDS:
      nextState = {...nextState, ...action.friends}
      return nextState;
    case RECEIVE_USERS:
      nextState = {...nextState, ...action.users}
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
