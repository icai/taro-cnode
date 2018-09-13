import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Header from '../../components/header/index'
import {  AtInput } from 'taro-ui'
import { withUser } from "../../hoc/router";

import './index.scss'


class Login extends Component {
  config: Config = {
    navigationBarTitleText: "登录"
  };

  state = {
    token: "",
    err: {
      isHiddenIcon: true,
      iconSize: 36,
      iconType: "error",
      iconColor: "#f00",
      text: ""
    }
  };

  showMessage(message) {
    Taro.showToast({ title: message });
  }
  logon = () => {
    if (this.state.token === "") {
      this.showMessage("令牌格式错误,应为36位UUID字符串");
      return false;
    }
    this.props.authLogin(this.state.token).then(() => {
      Taro.navigateTo({ url: "/pages/list/index" });
    });
  };

  scanCode = () => {
    // charSet: "UTF-8"
    // errMsg: "scanCode:ok"
    // result: "xxx-xxx-xx-xxx-xxx"
    // scanType: "QR_CODE"
    Taro.scanCode({
      success: (res) => {
        if (res.errMsg == "scanCode:ok") {
          if (res.result.length == 36) {
            debugger;
            this.props.authLogin(res.result).then(() => {
              Taro.navigateTo({ url: "/pages/list/index" });
            });
          }
        } else {
          this.showMessage("令牌格式错误,应为36位UUID字符串");
          return false;
        }
      }
    })
  };

  handleChange(val) {
    this.setState({ token: val });
  }
  render() {
    const { token } = this.state;
    return <View className="page-box login-page">
        <Header pageType={"登录"} fixHead={true} needAdd={true} />
        <View className="page-body">
          {Taro.getEnv() == "WEAPP" ? <View>
              <View className="tip"> 前往 主页/ 设置 </View>
              <View className="label">
                <View className="button" onClick={this.scanCode}>
                  扫码登陆
                </View>
              </View>
            </View> : <View>
              <View className="label">
                <AtInput className="txt" type="text" placeholder="Access Token" value={token} onChange={this.handleChange.bind(this)} maxlength="36" />
              </View>
              <View className="label">
                <View className="button" onClick={this.logon}>
                  登录
                </View>
              </View>
            </View>}
        </View>
      </View>;
  }
}

export default withUser(Login, true);
