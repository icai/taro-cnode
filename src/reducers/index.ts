import { combineReducers } from 'redux'
import counter from './counter'
import userinfo from './userinfo'
import auth from "./auth";

export default combineReducers({
  counter,
  userinfo,
  auth
});
