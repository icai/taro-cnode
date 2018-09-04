import Taro, { Component, Config, eventCenter } from "@tarojs/taro";
import { View, Button, Text, Navigator, Image } from "@tarojs/components";
import { AtDrawer } from 'taro-ui'
import UserInfo from '../user-info/index';
import classNames from "classnames";
import Drawer from '../drawer/index'
import { param } from '../../libs/utils'


import './index.scss'


interface IProps {
  showMenu : boolean,
  pageType : string,
  nickName: string,
  profileUrl : string
}

class NvMenu extends Component<IProps, {}> {
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  toList(pm) {
    Taro.navigateTo({
      url: "/pages/list/index?" + param(pm),
    });
  }
  listAll = () => {
    this.toList({tab: 'all'})
  };
  listGood = () => {
    this.toList({tab: 'good'})
  };
  listShare = () => {
    this.toList({tab: 'share'})
  };

  listAsk = () => {
    this.toList({tab: 'ask'})
  };

  listJob = () => {
    this.toList({tab: 'job'})
  };
  listMessage = () => {
    Taro.navigateTo({
      url: "/pages/message/index",
    });
  };
  listAbout = () => {
    Taro.navigateTo({
      url: "/pages/about/index",
    });
  };
  render() {
    const { showMenu } = this.props;
    const classnames = classNames({
      "nav-list": true,
      show: showMenu
    });
    return <View id="sideBar" className={classnames}>
        <Drawer
         show={showMenu}
         mask
        >
          <UserInfo />
          <View className="list-ul">
            <View className="icon-quanbu iconfont item" onClick={this.listAll}>
              全部
            </View>
            <View className="icon-hao iconfont item" onClick={this.listGood}>
              精华
            </View>
          <View className="icon-fenxiang iconfont item" onClick={this.listShare}>
              分享
            </View>
          <View className="icon-wenda iconfont item" onClick={this.listAsk}>
              问答
            </View>
          <View className="icon-zhaopin iconfont item" onClick={this.listJob}>
              招聘
            </View>
            <View className="icon-xiaoxi iconfont item line" onClick={this.listMessage}>
              消息
            </View>
            <View className="icon-about iconfont item" onClick={this.listAbout}>
              关于
            </View>
          </View>
        </Drawer>
      </View>;
  }
}


export default NvMenu;
