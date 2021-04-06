import { combineReducers } from 'redux';
import entitiesReducer from './entities_reducer';
import errorsReducer from './errors_reducer';
import session_reducer from './session_reducer';


const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: session_reducer,
  errors: errorsReducer ,
});

export default rootReducer;
