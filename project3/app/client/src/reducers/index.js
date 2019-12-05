import { combineReducers } from 'redux';
import user from 'reducers/user_reducer';
import products from 'reducers/products_reducer';
import site from 'reducers/site_reducer';

const rootReducer = combineReducers({
  user,
  products,
  site
});

export default rootReducer;
