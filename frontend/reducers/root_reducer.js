import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import routeslogReducer from './routeslog_reducer'


const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer ,
  routeslog: routeslogReducer
});

export default rootReducer;
