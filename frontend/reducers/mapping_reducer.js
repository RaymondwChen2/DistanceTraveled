import { RECEIVE_ALL_MAPPINGS, RECEIVE_MAPPING } from "../actions/mapping_actions";

const mappingReducer = (state = {}, action) => {
  Object.freeze(state)
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_MAPPINGS:
      return action.mappings
    case RECEIVE_MAPPING:
      nextState[action.route.id] = action.route
      return nextState;
    default:
      return state;
  }
}

export default mappingReducer;