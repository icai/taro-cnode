
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { accessToken } from '@/api';
import store from '@/utils/store';

const initialState = {
  error: null,
  loading: false,

  loginname: null,
  avatar_url: null,
  userId: null,
  token: null,

  user: {},
  authRedirectPath: '/'
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart: (state) => {
      state.error = null
      state.loading = true
    },
    authSuccess: (state, action) => {
      state.token = action.token
      state.userId = action.userId
      state.loginname = action.loginname
      state.avatar_url = action.avatar_url
      state.error = null
      state.loading = false
    },
    authFail: (state, action) => {
      state.error = action.error
      state.loading = false
    },
    authLogout: (state, action) => {
      state.loginname = null
      state.avatar_url = null
      state.userId = null
      state.token = null
    },
    setAuthRedirectPath: (state, action) => {
      state.authRedirectPath = action.payload
    },
    authCheckState: (state) => {
      const token = store.getItem('user');
      console.log(':::token', token);
      if (!token) {
        state.user = {};
      } else {
        state.user = JSON.parse(token);
      }
    }
  }
})

export const { authStart, authSuccess, authFail, authLogout, setAuthRedirectPath, authCheckState } = authSlice.actions;

export const auth = (token) => async (dispatch) => {
  dispatch(authStart());
  try {
    const userInfo = { accesstoken: token };

    const response = await accessToken(userInfo);
    if (response.data && response.data.success) {
      const res = response.data;
      const user = {
        loginname: res.loginname,
        avatar_url: res.avatar_url,
        userId: res.id,
        token: token,
      };
      store.setItem('user', JSON.stringify(user));
      dispatch(authSuccess(user));
      return user;
    } else {
      return dispatch(authFail(response.data.error));
    }
  } catch (error) {
    console.log(error);
    return dispatch(authFail(error));
  }
};



export default authSlice.reducer;
