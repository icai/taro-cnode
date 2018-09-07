import { ComponentClass } from "react";
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Button, Image, Text } from "@tarojs/components";
import { connect } from "@tarojs/redux";
import * as actions from "../actions/auth";
import { IAuth } from "../interfaces/auth";

type PageStateProps = {
  userInfo: IAuth;
};

// interface PageStateProps {
//   userInfo: IAuth;
// }

type PageDispatchProps = {
  authCheckState: () => void;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

function withUser(WrappedComponent) {

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
  class WithUserHOC extends WrappedComponent {
    constructor(){
      super(...arguments);
      this.props.authCheckState();
    }
    render() {
      const props = this.props;
      if (props.userInfo && props.userInfo.userId) {
        return super.render();
      } else {
        Taro.navigateTo({ url: "/pages/login/index" });
        return null;
      }
    }
  };
  return WithUserHOC;
}


export { Component, withUser };


