import Taro, { Component, Config } from '@tarojs/taro'
import classNames from "classnames";
import { View, Button, Text } from "@tarojs/components";
import NvMenu from "../menu/index"



import './index.scss'


type IProps = {
  pageType: string,
  fixHead: boolean,
  messageCount?: number,
  scrollTop?: number,
  needAdd: boolean
};

interface IState {
  nickname: string,
  profileimgurl: string,
  show: boolean
}

class Header extends Component<IProps, IState> {

  static defaultProps = {
    messageCount: 0,
    scrollTop: 0
  };

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "首页"
  };
  state = {
    nickname: "",
    profileimgurl: "",
    show: false
  };

  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidMount() {}

  componentDidHide() {}

  goToAdd = () => {
    // async
    Taro.navigateTo({
      url: "/pages/add/index"
    });
  };
  openMenu = () => {
    this.setState({
      show: !this.state.show
    })
  };
  showMenus = () => {
    this.setState({
      show: !this.state.show
    })
  };

  render() {
    const { show, nickname, profileimgurl } = this.state;
    const { needAdd, pageType, fixHead, messageCount } = this.props;
    const classnames = classNames({
      show: show && fixHead,
      "fix-header": fixHead,
      "no-fix": !fixHead
    });
    return (
      <View className="header">
        {show && fixHead ? <View>
          <View
            className="page-cover"
            onClick={this.showMenus}
          />
        </View> : ''}
        <View className={classnames} id="hd">
          <View className="nv-toolbar">
            {fixHead ? <View
              className="toolbar-nav"
              onClick={this.openMenu}

            ></View> : ''}
            <Text>{pageType}</Text>
            {messageCount > 0 ? (
              <Text className="num">{messageCount}</Text>
            ) : (
              ""
            )}
            {(needAdd && !messageCount) || messageCount <= 0 ? (
              <a className="iconfont add-icon" onClick={this.goToAdd}>
                &#xe60f;
              </a>
            ) : (
              ""
            )}
          </View>
        </View>
        {fixHead ? (
          <NvMenu
            showMenu={show}
            pageType={pageType}
            nickName={nickname}
            profileUrl={profileimgurl}
          />
        ) : (
          ""
        )}
      </View>
    );
  }
}


export default Header;
