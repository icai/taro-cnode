import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components';
import { connect } from '@tarojs/redux'

import { get, set, asyncAdd } from '../../actions/userinfo'

import './index.scss'

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

interface Message {
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
class UserInfo extends Component {

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  goEnter = ()=> {
    Taro.navigateTo({
      url: "/pages/login/index",
    });
  }
  goUser = ()=> {
    Taro.navigateTo({
      url: "/pages/user/index",
    });
  }
  render () {
    const { userInfo } = this.props.userInfo || { userInfo : {}};
    return (

     <View className="user-info">
        {!userInfo.loginname ?
          (
          <View className="login-no">
            <View className="login" onClick={this.goEnter}><a>登录</a></View>
          </View>
          ) : (
        <View className="login-yes" onClick={this.goUser}>
            <View className="avertar">{userInfo.avatar_url ? <Image src={userInfo.avatar_url}></Image> : ''}</View>
            <View className="info">
                {userInfo.loginname ? <Text>{userInfo.loginname}</Text> : ''}
            </View>
        </View>

        )}
    </View>
    )
  }
}



export default UserInfo as ComponentClass<PageOwnProps, PageState>
