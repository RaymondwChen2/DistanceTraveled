import { RECEIVE_CURRENT_USER } from '../actions/session';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  let userId;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      userId = parseInt(Object.keys(action.currentUser)[0]);
      nextState[userId] = action.currentUser[userId];
      return nextState;
    default:
      return state;
  }
};

export default usersReducer;
