import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import mappingReducer from './mapping_reducer';
import routeslog_reducer from './routeslog_reducer';
import friendshipsReducer from './friend_reducer';
import commentsReducer from './comments_reducer';
import likeReducer from './like_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  mappings: mappingReducer,
  routeslog: routeslog_reducer,
  friendships: friendshipsReducer,
  comments: commentsReducer,
  likes: likeReducer
});

export default entitiesReducer;
