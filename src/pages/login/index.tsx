import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import Header from '../../components/header/index'
import { AtTextarea, AtInput, AtToast } from 'taro-ui'
import { trim } from '../../libs/utils'
import classNames from "classnames";

import { connect } from '@tarojs/redux'
import { get, set } from '../../actions/userinfo'


import './index.scss'

// interface IProps {
//   props: IProps;
// }


// interface IState {
//   props: IProps;
// }

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  getUserInfo: () => void
  setUserInfo: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Login {
  props: IProps;
}

@connect(({ userinfo }) => ({
  userinfo
}), (dispatch) => ({
  getUserInfo () {
    return dispatch(get())
  },
  setUserInfo(s) {
    dispatch(set(s))
  }
}))
class Login extends Component {
  config: Config = {
      navigationBarTitleText: '主题'
  }

  state = {
    token: '',
    err: {
      isHiddenIcon: true,
      iconSize: 36,
      iconType: 'error',
      iconColor: '#f00',
      text: ''
    }
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  showMessage(message) {
    this.setState(prevState => {
      // ...prevState,
      err: {
        // ...prevState.err,
        text: message
      }
    })
  }
  logon = () => {
    if (this.state.token === '') {
      this.showMessage('令牌格式错误,应为36位UUID字符串');
      return false;
    }
    Taro.request({
        method: 'POST',
        url: 'https://cnodejs.org/api/v1/accesstoken',
        data: {
            accesstoken: this.state.token
        },
        success: (res) => {
            let user = {
                loginname: res.loginname,
                avatar_url: res.avatar_url,
                userId: res.id,
                token: this.token
            };
            window.window.sessionStorage.user = JSON.stringify(user);

            // this.$store.dispatch('setUserInfo', user);
            // let redirect = decodeURIComponent(this.$route.query.redirect || '/');
            // this.$router.push({
            //     path: redirect
            // });
        },
        error: (res) => {
            var error = JSON.parse(res.responseText);
            this.showMessage(error.error_msg);
        }
    })
  }
  render () {
    const { err, token } = this.state;
    return (
      <View className="login-page">
        <Header pageType={"登录"}></Header>
        <View className="page-body">
            <View className="label">
                <AtInput className="txt" type="text" placeholder="Access Token" value={token} maxlength="36"></AtInput>
            </View>
            <View className="label">
                <a className="button" onClick={this.logon}>登录</a>
            </View>
        </View>
        {/* <AtToast
          text={err.text}
          iconSize={err.iconSize}
          iconType={err.iconType}
          iconColor={err.iconColor}
          isHiddenIcon={err.isHiddenIcon}></AtToast> */}
      </View>
    )
  }
}

export default Login as ComponentClass<PageOwnProps, PageState>
