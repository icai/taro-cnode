import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import Header from '../../components/header/index'
import { AtTextarea, AtInput, AtToast } from 'taro-ui'
import { trim } from '../../libs/utils'
import classNames from "classnames";

import { connect } from '@tarojs/redux'
import { auth, set } from "../../actions/auth";


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
  auth: (e) => void;
  checkAuthTimeout: () => void;
};

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Login {
  props: IProps;
}

@connect(
  state => {
    return { userInfo: state.auth };
  },
  dispatch => ({
    auth: (...args) => dispatch(auth(...args)),
    checkAuthTimeout: (...args) => dispatch(checkAuthTimeout(...args))
  })
)
class Login extends Component {
  config: Config = {
    navigationBarTitleText: "主题"
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

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  showMessage(message) {
    this.setState(prevState => {
      // ...prevState,
      err: {
        // ...prevState.err,
        text: message;
      }
    });
  }
  componentDidMount() {
    console.info(this);
  }
  logon = () => {
    if (this.state.token === "") {
      this.showMessage("令牌格式错误,应为36位UUID字符串");
      return false;
    }
    this.props.auth(this.state.token)
    .then(()=> {
      Taro.navigateTo({
        url: "/pages/list/index",
      });
    });
  };
  handleChange(val) {
    this.setState({ token: val });
  }
  render() {
    const { err, token } = this.state;
    return (
      <View className="login-page">
        <Header pageType={"登录"} />
        <View className="page-body">
          <View className="label">
            <AtInput
              className="txt"
              type="text"
              placeholder="Access Token"
              value={token}
              onChange={e => {
                this.handleChange(e);
              }}
              maxlength="36"
            />
          </View>
          <View className="label">
            <a className="button" onClick={this.logon}>
              登录
            </a>
          </View>
        </View>
        {/* <AtToast
          text={err.text}
          iconSize={err.iconSize}
          iconType={err.iconType}
          iconColor={err.iconColor}
          isHiddenIcon={err.isHiddenIcon}></AtToast> */}
      </View>
    );
  }
}

export default Login as ComponentClass<PageOwnProps, PageState>
