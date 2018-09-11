import { ComponentClass } from "react";
import Taro, { Component } from "@tarojs/taro";
import { connect } from "@tarojs/redux";
import * as actions from "../actions/auth";
import { IAuth } from "../interfaces/auth";

type PageStateProps = {
  userInfo: IAuth;
};


type PageDispatchProps = {
  authLogin:(token)=> void;
  authCheckState:() => void;
};

type PageOwnProps = {};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

function withUser(WrappedComponent, allowNologin = false) {
  @connect( ({ auth }) => ({ userInfo: auth }),
    (dispatch: Function) => ({
      authLogin: (...args) => dispatch(actions.auth(...args)),
      authCheckState: () => dispatch(actions.authCheckState())
    })
  )
  class WithUserHOC extends WrappedComponent<IProps, PageState> {
    constructor() {
      super(...arguments);
      this.props.authCheckState();
    }
    isSuperRender() {
      const props = this.props;
      return allowNologin || (props.userInfo && props.userInfo.userId)
    }
    // refer  https://github.com/ReactTraining/react-router/blob/master/packages/react-router/modules/Redirect.js
    perform() {
      if (!this.isSuperRender()) {
        Taro.redirectTo({ url: "/pages/login/index" });
      }
    }
    componentWillMount() {
      this.perform();
    }
    render() {
      if (this.isSuperRender()) {
        return super.render();
      } else {
        return null;
      }
    }
  };
  return WithUserHOC;
}


export { Component, withUser };


