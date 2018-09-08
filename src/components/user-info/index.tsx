import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Image, Text } from "@tarojs/components";
import Link from "../../components/link";
import { connect } from '@tarojs/redux'
import * as actions from "../../actions/auth";
import { IAuth } from "../../interfaces/auth";


import './index.scss'

type PageStateProps = {
  userInfo: IAuth;
};

// interface PageStateProps {
//   userInfo: IAuth;
// }

type PageDispatchProps = {
  authCheckState: () => void;
};

type PageOwnProps = {

};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

@connect(
  ({ auth }) => ({
    userInfo: auth
  }),
  (dispatch: Function) => ({
    authCheckState() {
      dispatch(actions.authCheckState());
    }
  })
)
class UserInfo extends Component<IProps, PageState> {
  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps);
  }
  componentWillMount() {
    this.props.authCheckState();
  }
  render() {
    const userInfo = this.props.userInfo;
    return <View className="user-info">
        {!userInfo.loginname ? <Link className="login-no" to={{ url: "/pages/login/index" }}>
            <View className="login">
              <View>登录</View>
            </View>
          </Link> : <Link className="login-yes" to={{ url: "/pages/user/index", params: { loginname: userInfo.loginname } }}>
            <View className="avertar">
              {userInfo.avatar_url ? (
                <Image class="avertar" src={userInfo.avatar_url} />
              ) : (
                ""
              )}
            </View>
            <View className="info">
              {userInfo.loginname ? <Text>{userInfo.loginname}</Text> : ""}
            </View>
          </Link>}
      </View>;
  }
}



export default UserInfo as ComponentClass<IProps, PageState>;
