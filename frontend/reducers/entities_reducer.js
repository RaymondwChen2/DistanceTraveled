import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import mappingReducer from './mapping_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  mappings: mappingReducer
});

export default entitiesReducer;
