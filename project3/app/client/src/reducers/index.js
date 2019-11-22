import { combineReducers } from 'redux';
import user from 'reducers/user_reducer';

const rootReducer = combineReducers({
  user
});

export default rootReducer;
