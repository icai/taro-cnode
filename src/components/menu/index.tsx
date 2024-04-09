
import React from 'react';
import { View } from '@tarojs/components';
import UserInfo from "../user-info";
import classNames from "classnames";
import Drawer from '../drawer'
import Link from "../link";

import "./index.scss";
import { Category, Fabulous, Share, Comment, Tips, Ask, PickedUp, Message } from '@nutui/icons-react-taro';

const NvMenu: React.FC<any> = ({ showMenu, pageType, nickName, profileUrl, style }) => {
  const classnames = classNames({
    "nav-list": true,
    show: showMenu
  });

  return (
    <View id="sideBar" className={classnames} >
      <Drawer mask={false} show={showMenu} navTopStyle={style}>
        <UserInfo />
        <View className="list-ul">
          <Link className="item" to={{ url: "/pages/index/index?tab=all" }}>
            <Category />
            全部
          </Link>
          <Link className="item" to={{ url: "/pages/index/index?tab=good" }}>
            <Fabulous />
            精华
          </Link>
          <Link className="item" to={{ url: "/pages/index/index?tab=share" }}>
            <Share />
            分享
          </Link>
          <Link className="item" to={{ url: "/pages/index/index?tab=ask" }}>

            <Comment />
            问答
          </Link>
          <Link className="item" to={{ url: "/pages/index/index?tab=job" }}>
            <PickedUp />
            招聘
          </Link>
          <Link className="item line" to={{ url: "/pages/message/index" }}>
            <Message />
            消息
          </Link>
          <Link className="item" to={{ url: "/pages/about/index" }}>
            <Tips />
            关于
          </Link>
        </View>
      </Drawer>
    </View>
  );
};

export default NvMenu;
