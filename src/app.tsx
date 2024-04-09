import { useEffect } from 'react'
import { useDidShow, useDidHide, useLaunch } from '@tarojs/taro'
import { Provider } from "react-redux";
import store from './store';
import { authCheckState } from "@/reducers/auth";
import { View } from '@tarojs/components';
import QRCode from '@/components/qrcode';
import useRouterCodeUrl from '@/hooks/useRouterCodeUrl';
import { isH5 } from '@/libs/utils';
// 全局样式


import './assets/scss/common/reset.scss';
import './assets/scss/github-markdown.css';
import './app.scss'

function App(props) {
  // 可以使用所有的 React Hooks
  useEffect(() => {
    store.subscribe(function () { });
  })

  useLaunch(() => {
    store.dispatch(authCheckState());
  })

  // 对应 onShow
  useDidShow(() => { })

  // 对应 onHide
  useDidHide(() => { })

  if (isH5()) {
    const { url } = useRouterCodeUrl();
    return (
      <Provider store={store}>
        <View>
          <View>{props.children}</View>
          <QRCode url={url} />
        </View>
      </Provider>
    )
  }
  return (
    <Provider store={store}>
      <View>{props.children}</View>
    </Provider>
  )
}

export default App
