import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import UserInfo from '../user-info';
import classNames from "classnames";
import ADrawer from '../drawer'
import ALink from "../link"


import './index.scss'


interface IProps {
  showMenu : boolean,
  pageType : string,
  nickName: string,
  profileUrl : string
}

class NvMenu extends Component<IProps, {}> {
  render() {
    const { showMenu } = this.props;
    const classnames = classNames({
      "nav-list": 1,
      show: showMenu
    });

    return <View  className={classnames}>
        <ADrawer mask={false} show={showMenu}>
          <UserInfo />
          <View className="list-ul">
          <ALink link-class=" icon-quanbu iconfont item" to={{ url: "/pages/list/index?tab=all" }}>
              全部
            </ALink>
          <ALink link-class=" icon-hao iconfont item" to={{ url: "/pages/list/index?tab=good" }}>
              精华
            </ALink>
          <ALink link-class=" icon-fenxiang iconfont item" to={{ url: "/pages/list/index?tab=share" }}>
              分享
            </ALink>
          <ALink link-class=" icon-wenda iconfont item" to={{ url: "/pages/list/index?tab=ask" }}>
              问答
            </ALink>
          <ALink link-class=" icon-zhaopin iconfont item" to={{ url: "/pages/list/index?tab=job" }}>
              招聘
            </ALink>
          <ALink link-class=" icon-xiaoxi iconfont item line" to={{ url: "/pages/message/index" }}>
              消息
            </ALink>
          <ALink link-class=" icon-about iconfont item" to={{ url: "/pages/about/index" }}>
              关于
            </ALink>
          </View>
        </ADrawer>
      </View>;
  }
}


export default NvMenu;
