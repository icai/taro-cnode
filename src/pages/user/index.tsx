import React, { useState, useEffect } from "react";
import Taro, { useRouter } from "@tarojs/taro";
import { View, Image, Text } from '@tarojs/components';
import { useSelector, useDispatch } from 'react-redux';
import Link from '@/components/link';
import classNames from "classnames";
import * as utils from '@/libs/utils';
import { getUser } from "@/api";
import withUser from '@/components/withUser';

import './index.scss';
import Page from "@/components/page";
import NoData from "@/components/nodata";
import { Tabs } from "@nutui/nutui-react-taro";

const User: React.FC = () => {
  const [currentData, setCurrentData] = useState<any[]>([]);
  const [user, setUser] = useState<any>({ avatar_url: "", create_at: "2018-09-06T17:46:48.352Z", loginname: "", recent_replies: [], recent_topics: [], score: 0 });
  const [showMenu, setShowMenu] = useState(false);
  const [selectItem, setSelectItem] = useState(1);

  const userInfo = useSelector((state: any) => state.auth.user);

  useEffect(() => {
    getUserData();
  }, []);

  const changeItem = (idx: number) => {
    const newData =
      idx === 1
        ? user.recent_replies
        : user.recent_topics;
    setSelectItem(idx);
    setCurrentData(newData);
  };

  const getUserData = () => {
    let loginname = userInfo.loginname;
    if (!loginname) {
      Taro.showToast({
        title: "缺少用户名参数"
      });
      Taro.navigateTo({
        url: "/pages/index/index"
      });
      return false;
    }
    getUser({
      loginname
    }).then(res => {
      let d = res.data;
      if (d && d.data) {
        let data = d.data;
        setUser(data);
        if (data.recent_replies.length > 0) {
          setCurrentData(data.recent_replies);
        } else {
          setCurrentData(data.recent_topics);
          setSelectItem(2);
        }
      }
    });
  }
  const getLastTimeStr = (date: string, friendly: boolean) => {
    return utils.getLastTimeStr(date, friendly);
  };

  return (
    <Page className="flex-wrp" title={"用户信息"}>
      <View className="userinfo">
        <Image className="u-img" src={user.avatar_url} />
        <br />
        <View className="u-name">{user.loginname}</View>
        <View className="u-bottom">
          <Text className="u-time">
            {getLastTimeStr(user.create_at, false)}
          </Text>
          <Text className="u-score">
            积分：
            {user.score}
          </Text>
        </View>
      </View>
      <View className="topics">

        <Tabs
          value={selectItem}
          title={() => {
            return [
              (<View key={1} className={classNames({ 'nut-tabs-titles-item': 1, 'br': 1, "nut-tabs-titles-item-active": selectItem === 1 })} onClick={() => changeItem(1)}>
                <Text className="nut-tabs-titles-item-text">最近回复</Text>
                <Text className="nut-tabs-titles-item-line" />
              </View>),
              (<View key={2} className={classNames({ 'nut-tabs-titles-item': 1, "nut-tabs-titles-item-active": selectItem === 2 })} onClick={() => changeItem(2)}>

                <Text className="nut-tabs-titles-item-text">最新发布</Text>
                <Text className="nut-tabs-titles-item-line" />
              </View>)
            ]
          }}
        >
        </Tabs>
        {currentData.map(item => {
          return (
            <View className="message">
              <View className="user">
                <Link
                  className="head"
                  to={{
                    url: "/pages/user/index",
                    params: { loginname: item.author.loginname }
                  }}
                >
                  <Image className="head" src={item.author.avatar_url} />
                </Link>
                <Link
                  className="info"
                  to={{ url: "/pages/topic/index", params: { id: item.id } }}
                >
                  <View className="t-title">{item.title}</View>
                  <Text className="cl mt12">
                    <Text className="name">{item.author.loginname}</Text>
                  </Text>
                  <Text className="cr mt12">
                    <Text className="name">
                      {getLastTimeStr(item.last_reply_at, true)}
                    </Text>
                  </Text>
                </Link>
              </View>
            </View>
          );
        })}
        {currentData.length === 0 ? (
          <NoData>暂无数据!</NoData>
        ) : (
          ""
        )}
      </View>
    </Page>
  );
};

export default withUser(User);
