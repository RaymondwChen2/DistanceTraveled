import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import mappingReducer from './mapping_reducer';
import routeslog_reducer from './routeslog_reducer';
import friendshipsReducer from './friend_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  mappings: mappingReducer,
  // routeslog: routeslog_reducer
  friendships: friendshipsReducer
});

export default entitiesReducer;
