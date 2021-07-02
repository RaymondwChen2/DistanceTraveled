import { RECEIVE_CURRENT_USER } from '../actions/session'

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = {...state};
  let userId;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      userId = parseInt(Object.keys(action.currentUser)[0])
      nextState[userId] = action.currentUser[userId]
      return nextState
    // case RECEIVE_CURRENT_USER:
    //   return Object.assign({}, state, { [action.currentUser.id]: action.currentUser });
    default:
      return state;
  }
};

export default usersReducer;
