import Taro, { Component, Config } from '@tarojs/taro'
// import '@tarojs/async-await'
import { Provider } from "@tarojs/redux";
import Index from './pages/index'
import configStore from './store';
import * as actions from "./actions/auth";


import './app.scss'

if (process.env.TARO_ENV === "weapp") {
  require("taro-ui/dist/weapp/css/index.css");
} else if (process.env.TARO_ENV === "h5") {
  require("taro-ui/dist/h5/css/index.css");
}

const store = configStore()
store.dispatch(actions.authCheckState());

class App extends Component {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    pages: [
      "pages/list/index",
      "pages/add/index",
      "pages/login/index",
      "pages/message/index",
      "pages/index/index",
      "pages/about/index",
      "pages/topic/index",
      "pages/user/index"
    ],
    tabBar: {
      // color: "#c1c1c1",
      // selectedColor: "#222",
      // borderStyle: "white",
      // backgroundColor: "#fff",
      list: [
        {
          iconPath: "./assets/images/icons/latest.png",
          selectedIconPath: "./assets/images/icons/lastest_on.png",
          pagePath: "pages/list/index",
          text: "最新"
        },
        {
          iconPath: "./assets/images/icons/hotest.png",
          selectedIconPath: "./assets/images/icons/hotest_on.png",
          pagePath: "pages/add/index",
          text: "精华"
        },
        {
          iconPath: "./assets/images/icons/node.png",
          selectedIconPath: "./assets/images/icons/node_on.png",
          pagePath: "pages/login/index",
          text: "招聘"
        }
      ],
      color: "#000",
      selectedColor: "#56abe4",
      backgroundColor: "#fff",
      borderStyle: "white"
    },

    window: {
      backgroundTextStyle: "light",
      navigationBarBackgroundColor: "#fff",
      navigationBarTitleText: "TaroCNodejs",
      navigationBarTextStyle: "black"
    }
  };

  componentDidMount() {
    store.subscribe(function() {});
  }
  componentDidHide() {}
  componentCatchError() {}
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

Taro.render(<App/>, document.getElementById("app"));
