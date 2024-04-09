import { useState, useEffect } from 'react';
import { View, Image, Text } from '@tarojs/components';
import Link from '@/components/link';
import classNames from "classnames";
import * as utils from '@/libs/utils';
import { useDispatch, useSelector } from "react-redux";
import { authCheckState } from "@/reducers/auth";
import { getMessages, markAllMessages } from '@/api';
import { Tabs } from '@nutui/nutui-react-taro'
import withUser from '@/components/withUser';
import Taro from '@tarojs/taro';

import './index.scss';
import Page from '@/components/page';
import { Jimi } from '@nutui/icons-react-taro';
import NoData from '@/components/nodata';

const Message = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector(state => state.auth.user);
  const [showMenu, setShowMenu] = useState(false);
  const [selectItem, setSelectItem] = useState(1);
  const [message, setMessage] = useState({
    hasnot_read_messages: [],
    has_read_messages: []
  });
  const [noData, setNoData] = useState(false);
  const [currentData, setCurrentData] = useState([] as any[]);
  const [no_read_len, setNoReadLen] = useState(0);

  useEffect(() => {
    dispatch(authCheckState());
  }, []);

  useEffect(() => {
    getMessages({ accesstoken: userInfo.token }).then(resp => {
      const d = resp.data;
      let willdata = {} as any;
      if (d && d.data) {
        willdata.message = d.data;
        willdata.no_read_len = d.data.hasnot_read_messages.length;
        if (d.data.hasnot_read_messages.length > 0) {
          willdata.currentData = d.data.hasnot_read_messages;
          willdata.selectItem = 1;
        } else {
          willdata.currentData = d.data.has_read_messages;
          willdata.selectItem = 2;
        }
        willdata.noData = willdata.currentData.length === 0;
      } else {
        willdata.noData = true;
      }
      setNoReadLen(willdata.no_read_len);
      setSelectItem(willdata.selectItem);
      setCurrentData(willdata.currentData);
      setMessage(willdata.message);
      setNoData(willdata.noData);
    });
  }, [userInfo]);

  const changeItem = (idx) => {
    const currentData = idx === 1 ? message.hasnot_read_messages : message.has_read_messages;
    setSelectItem(idx);
    setCurrentData(currentData);
    setNoData(currentData.length === 0);
  };

  const markall = () => {
    markAllMessages({ accesstoken: userInfo.token }).then(resp => {
      const d = resp.data;
      if (d && d.success) {
        Taro.reLaunch({ url: "/pages/message/index" });
      }
    });
  };

  const getLastTimeStr = (date, friendly) => {
    return utils.getLastTimeStr(date, friendly);
  };

  return (
    <Page className="flex-wrp" title={"消息"}>
      <View id="page" className="page">
        <Tabs
          value={selectItem}
          title={() => {
            return [
              (<View key={2} className={classNames({ 'nut-tabs-titles-item': 1, 'br': 1, "nut-tabs-titles-item-active": selectItem === 2 })} onClick={() => changeItem(2)}>
                <Text className="nut-tabs-titles-item-text">已读消息</Text>
                <Text className="nut-tabs-titles-item-line" />
              </View>),
              (<View key={1} className={classNames({ 'nut-tabs-titles-item': 1, "nut-tabs-titles-item-active": selectItem === 1 })} onClick={() => changeItem(1)}>

                <Text className="nut-tabs-titles-item-text">未读消息</Text>
                {no_read_len > 0 ? <Text className="iconfont read" onClick={markall}>&#xe60c;</Text> : ''}
                <Text className="nut-tabs-titles-item-line" />
              </View>)
            ]
          }}
        >
        </Tabs>
        <View className='tab-content'>
          {currentData.map((item, idx) => (
            <View className="message markdown-body" key={idx}>
              <View className="user">
                <Image className="head" src={item.author.avatar_url} />
                <View className="info">
                  <Text className="cl">
                    <Text className="name">{item.author.loginname}</Text>
                    {item.type === 'at' && <Text className="name">在回复中@了您</Text>}
                    {item.type === 'reply' && <Text className="name">回复了您的话题</Text>}
                  </Text>
                  <Text className="cr">
                    <Text className="name">{getLastTimeStr(item.reply.create_at, true)}</Text>
                  </Text>
                </View>
              </View>
              <View className="reply_content" dangerouslySetInnerHTML={{ __html: item.reply.content }} />
              <Link to={{ url: "/pages/topic/index", params: { id: item.topic.id } }}>
                <View className="topic-title">话题：{item.topic.title}</View>
              </Link>
            </View>
          ))}
          {noData && <NoData>
            暂无数据!
          </NoData>
          }
        </View>
      </View>
    </Page>
  );
};

export default withUser(Message);
