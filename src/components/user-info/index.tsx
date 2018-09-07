import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button, Image, Text } from "@tarojs/components";
import { connect } from '@tarojs/redux'
import * as actions from "../../actions/auth";
// import { IAuth } from "../../interfaces/auth";


import './index.scss'

type PageStateProps = {
  authData: IAuth;
};

// interface PageStateProps {
//   authData: IAuth;
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
    authData: auth
  }),
  (dispatch: Function) => ({
    authCheckState() {
      dispatch(actions.authCheckState());
    }
  })
)
class UserInfo extends Component<IProps, PageState> {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  goEnter = () => {
    Taro.navigateTo({
      url: "/pages/login/index"
    });
  };
  goUser = () => {
    Taro.navigateTo({
      url: "/pages/user/index"
    });
  };
  componentWillMount() {
    this.props.authCheckState();
  }
  render() {
    const userInfo = this.props.authData;
    return (
      <View className="user-info">
        {!userInfo.loginname ? (
          <View className="login-no">
            <View className="login" onClick={this.goEnter}>
              <a>登录</a>
            </View>
          </View>
        ) : (
          <View className="login-yes" onClick={this.goUser}>
            <View className="avertar">
                {userInfo.avatar_url ? <Image class="avertar" src={userInfo.avatar_url} /> : ""}
            </View>
            <View className="info">
              {userInfo.loginname ? <Text>{userInfo.loginname}</Text> : ""}
            </View>
          </View>
        )}
      </View>
    );
  }
}



export default UserInfo as ComponentClass<IProps, PageState>;
