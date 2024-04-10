import { createSlice } from '@reduxjs/toolkit';
import Taro from '@tarojs/taro';
import { isAlipay, isH5, isWeapp } from '@/libs/utils';

// Create a thunk to handle the async operation
export const fetchSystemInfo = () => async (dispatch) => {
  try {
    const res = await getWindowBarInfo();
    const systemInfo = {
      StatusBar: res.statusBarHeight,
      CustomBar: res.statusBarHeight + res.titleBarHeight,
      statusAndTitleBarHeight: (res.statusBarHeight + res.titleBarHeight) * 2 || 0,
      platform: res.platform,
      windowHeight: res.windowHeight,
      windowWidth: res.windowWidth,
      model: res.model || '',
      brand: (res.brand || '').toLowerCase(),
      navBarHeight: res.navBarHeight,
      titleBarHeight: res.titleBarHeight,
      statusBarHeight: res.statusBarHeight
    };
    // Dispatch the action with the fetched system info
    dispatch(setSystemInfo(systemInfo));
  } catch (error) {
    console.error('fetchSystemInfo error', error);
    // Handle error if needed
  }
};

export const baseSlice = createSlice({
  name: 'base',
  initialState: {
    systemInfo: {
      navBarHeight: 0,
      titleBarHeight: 0,
      statusBarHeight: 0,
      StatusBar: 0,
      CustomBar: 0,
      statusAndTitleBarHeight: 0,
      platform: '',
      windowHeight: 0,
      windowWidth: 0,
      model: '',
      brand: '',
    },
  },
  reducers: {
    setSystemInfo: (state, action) => {
      state.systemInfo = action.payload;
    }
  },
  // Remove the async function from extraReducers
  extraReducers: (builder) => {
    // Add extra reducers here if needed
  }
});

export const { setSystemInfo } = baseSlice.actions;

export const selectNavBarInfo = (state) => state.base.navBarInfo;
export const selectSystemInfo = (state) => state.base.systemInfo;

export default baseSlice.reducer;

// No changes needed in getWindowBarInfo function
export const getWindowBarInfo = async () => {
  let navBarHeight = 0;
  let titleBarHeight = 0;
  let statusBarHeight = 0;

  let windowInfo = Taro.getSystemInfoSync() as Taro.getSystemInfoSync.Result & { titleBarHeight: number, statusBarHeight: number };
  let menuButtonInfo = { top: 0, height: 0 } as any;

  if (isWeapp()) {
    const res = await Taro.getMenuButtonBoundingClientRect();
    menuButtonInfo = res;
    titleBarHeight = (menuButtonInfo.top - (windowInfo.statusBarHeight || 0)) * 2 + menuButtonInfo.height;
    statusBarHeight = windowInfo.statusBarHeight;
    navBarHeight = titleBarHeight + statusBarHeight;
  } else if (isAlipay()) {
    titleBarHeight = windowInfo.titleBarHeight || 0;
    statusBarHeight = windowInfo.statusBarHeight;
    navBarHeight = titleBarHeight + statusBarHeight;
  } else if (isH5()) {
    windowInfo.statusBarHeight = 0;
    titleBarHeight = 64;
    statusBarHeight = 0;
    navBarHeight = 64;
  }
  return {
    ...windowInfo,
    navBarHeight,
    titleBarHeight,
    statusBarHeight,
  };
};
