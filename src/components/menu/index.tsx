import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import UserInfo from '../user-info';
import classNames from "classnames";
import Drawer from '../drawer'
import Link from "../link"


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
      "nav-list": true,
      show: showMenu
    });
    return <View id="sideBar" className={classnames}>
        <Drawer mask={false} show={showMenu}>
          <UserInfo />
          <View className="list-ul">
            <Link className="icon-quanbu iconfont item" to={{ url: "/pages/list/index?tab=all" }}>
              全部
            </Link>
            <Link className="icon-hao iconfont item" to={{ url: "/pages/list/index?tab=good" }}>
              精华
            </Link>
            <Link className="icon-fenxiang iconfont item" to={{ url: "/pages/list/index?tab=share" }}>
              分享
            </Link>
            <Link className="icon-wenda iconfont item" to={{ url: "/pages/list/index?tab=ask" }}>
              问答
            </Link>
            <Link className="icon-zhaopin iconfont item" to={{ url: "/pages/list/index?tab=job" }}>
              招聘
            </Link>
            <Link className="icon-xiaoxi iconfont item line" to={{ url: "/pages/message/index" }}>
              消息
            </Link>
            <Link className="icon-about iconfont item" to={{ url: "/pages/about/index" }}>
              关于
            </Link>
          </View>
        </Drawer>
      </View>;
  }
}


export default NvMenu;
