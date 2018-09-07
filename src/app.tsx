import { ComponentClass } from "react";
import Taro, { Component, Config } from '@tarojs/taro'
import '@tarojs/async-await'
import { Provider, connect } from "@tarojs/redux";
import { View } from "@tarojs/components";
import Index from './pages/index'
import About from "./pages/about";
import List from "./pages/list";
import configStore from './store';
import * as actions from "./actions/auth";
import { IAuth } from "./interfaces/auth";

import './assets/scss/CV.scss';
import './assets/scss/iconfont/iconfont.css';
import './assets/scss/github-markdown.css';

import './app.scss'

const store = configStore()



type PageStateProps = {
  authData: IAuth;
};

// interface PageStateProps {
//   authData: IAuth;
// }

type PageDispatchProps = {
  authData: IAuth;
  authCheckState: () => void;
};

type PageOwnProps = {
  authData: IAuth;
};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;


class Container extends Component<IProps, PageState> {
  componentDidMount() {
    this.props.authCheckState();
    debugger
    console.info(this)
  }
  render() {
    return <View>
        <Index/>
      </View>;
  }
}

const AppContainer = connect(
  ({ auth }) => ({
    authData: auth
  }),
  (dispatch: Function) => ({
    authCheckState() {
      dispatch(actions.authCheckState());
    }
  })
)(Container);

class App extends Component{
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      "pages/index/index",
      "pages/about/index",
      "pages/add/index",
      "pages/list/index",
      "pages/message/index",
      "pages/login/index",
      "pages/topic/index",
      "pages/user/index"
    ],
    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "WeChat",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {
    store.subscribe(function() {});

    console.info(store);
  }
  componentDidHide() {}
  componentCatchError() {}
  render() {
    return <Provider store={store}>
        <AppContainer />
      </Provider>;
  }
}

Taro.render(<App/>, document.getElementById("app"));
