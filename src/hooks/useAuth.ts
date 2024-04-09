import { useState, useEffect } from "react";
import store from "@/utils/store";
import { accessToken } from "@/api";

export const useAuth = () => {
  const [authState, setAuthState] = useState({
    user: null,
    loading: false,
    error: null,
  });

  const authStart = () => {
    setAuthState((prevState) => ({
      ...prevState,
      loading: true,
      error: null,
    }));
  };

  const authSuccess = (user) => {
    setAuthState({
      user: user,
      loading: false,
      error: null,
    });
  };

  const authFail = (error) => {
    setAuthState({
      user: null,
      loading: false,
      error: error,
    });
  };

  const logout = () => {
    store.removeItem("user");
    setAuthState({
      user: null,
      loading: false,
      error: null,
    });
  };

  const checkAuthTimeout = (expirationTime) => {
    setTimeout(() => {
      logout();
    }, expirationTime * 1000);
  };

  const auth = (accesstoken) => {
    authStart();
    const userInfo = { accesstoken: accesstoken };
    accessToken(userInfo).then((response) => {
      if (response.data && response.data.success) {
        let res = response.data;
        let user = {
          loginname: res.loginname,
          avatar_url: res.avatar_url,
          userId: res.id,
          token: accesstoken,
        };
        store.setItem("user", JSON.stringify(user));
        authSuccess(user);
      }
    })
      .catch((err) => {
        authFail(err.response.data.error);
      });
  };

  const authCheckState = () => {
    const token = store.getItem("user");
    if (token) {
      authSuccess(JSON.parse(token));
    }
  };

  useEffect(() => {
    authCheckState();
  }, []);

  return {
    authState,
    auth,
    logout,
    checkAuthTimeout,
  };
};
