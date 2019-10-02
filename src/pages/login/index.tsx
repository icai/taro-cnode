import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Header from '../../components/header/index'
import {  AtInput } from 'taro-ui'
import { connect } from "@tarojs/redux";
import * as actions from "../../actions/auth";
import './index.scss'

@connect( ({ auth }) => ({ userInfo: auth }),
(dispatch: Function) => ({
  authLogin: (...args: any) => dispatch(actions.auth(...args)),
  authCheckState: () => dispatch(actions.authCheckState())
}))
class Login extends Component<Iprops, PageState> {
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
  handleChange(val) {
    this.setState({ token: val });
  }
  render() {
    const { token } = this.state;
    return <View className="login-page">
        <Header pageType={"登录"} fixHead={true} needAdd={true} />
        <View className="page-body">
          <View className="label">
          <AtInput className="txt" type="text" placeholder="Access Token" value={token} onChange={this.handleChange.bind(this)} maxlength="36" />
          </View>
          <View className="label">
            <View className="button" onClick={this.logon}>
              登录
            </View>
          </View>
        </View>
      </View>;
  }
}

export default Login //withUser(Login, true);
