import { combineReducers } from 'redux'
import auth from "./auth";
import base from './base';

export default combineReducers({
  auth,
  base
});
