import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import auth from './auth';
import products from './products';

export default combineReducers({
  router: routerReducer,
  auth,
  products
})
