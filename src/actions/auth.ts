import Taro from "@tarojs/taro";
import * as actionTypes from "../constants/auth";
import { post, get } from "../utils/request";
import store from "../utils/store";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (user) => {
  return { type: actionTypes.AUTH_SUCCESS, ...user };
};

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  store.removeItem("user");
  // store.removeItem('expirationDate');
  // store.removeItem('userId');
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

export const auth = (accesstoken) => {
  return dispatch => {
    dispatch(authStart());
    const userInfo = { accesstoken: accesstoken };
    return post({
      url: "https://cnodejs.org/api/v1/accesstoken",
      data: userInfo
    })
      .then(response => {
        if (response.data && response.data.success) {
          let res = response.data;
          let user = {
            loginname: res.loginname,
            avatar_url: res.avatar_url,
            userId: res.id,
            token: accesstoken
          };
          // const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
          store.setItem("user", JSON.stringify(user));
          dispatch(authSuccess(user));
          // store.setItem("expirationDate", expirationDate);
          // store.setItem("userId", response.data.localId);
          // dispatch(checkAuthTimeout(response.data.expiresIn));
        }
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      });
  };
};

export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

export const authCheckState = () => {
  return dispatch => {
    const token = store.getItem('user');
    if (!token) {
      // dispatch(logout());
    } else {
        //  const expirationDate = new Date(store.getItem("expirationDate"));
        // && expirationDate <= new Date()
      if (false) {
        dispatch(logout());
      } else {
        // const userId = store.getItem("userId");
        dispatch(authSuccess(JSON.parse(token)));
        // dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
      }
    }
  };
};
