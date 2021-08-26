import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

const _nullUser = {
  id: null
};

const sessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let nextState = {...state};
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return { id: action.currentUser.id };
    case LOGOUT_CURRENT_USER:
      nextState.id = null;
      return nextState;
    default:
      return state;
  }
};

export default sessionReducer;