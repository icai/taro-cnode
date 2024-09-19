import React, { useState, useEffect } from 'react';
import Taro, { useRouter } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import Link from "@/components/link";
import Reply from '@/components/reply';
import classNames from "classnames";
import * as utils from '@/libs/utils';
import BackTop from "@/components/backtotop/index";
import { useSelector, useDispatch } from 'react-redux';
import { authCheckState } from "@/reducers/auth";
import { getTopic, upReply } from '@/api';

import './index.scss';
import Page from '@/components/page';
import NoData from '@/components/nodata';
import { Heart, HeartFill, Comment } from '@nutui/icons-react-taro';
import { Space } from '@nutui/nutui-react-taro';
import useObjState from '@/hooks/useObjState';

const Topic: React.FC = () => {
  const userInfo = useSelector((state: { auth: any }) => state.auth.user || {});
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const [topic, setTopic] = useObjState({
    title: "",
    create_at: "",
    visit_count: 0,
    content: "",
    tab: "",
    good: false,
    top: false,
    reply_count: 0,
    author: {
      avatar_url: "",
      loginname: ""
    },
    replies: []
  } as any);
  const [noData, setNoData] = useState(false);
  const [topicId, setTopicId] = useState("");
  const [curReplyId, setCurReplyId] = useState("");
  const router = useRouter();

  useEffect(() => {
    dispatch(authCheckState());
    fetchTopic();
  }, [dispatch]);


  // watch route change
  useEffect(() => {
    fetchTopic();
  }, [router.params.id]);

  const addReply = (id: string) => {
    setCurReplyId(id);
    if (!userInfo.userId) {
      // Handle case when user is not logged in
    }
  };

  const hideItemReply = () => {
    setCurReplyId('');
  };

  const fetchUpReply = (item: any, index: number) => {
    if (!userInfo.userId) {
      utils.navigateTo({
        url: "/pages/login/index",
        params: {
          redirect: encodeURIComponent(router.path + (router.params ? '?' + utils.param(router.params) : ''))
        }
      });
    } else {
      upReply({
        accesstoken: userInfo.token,
        replyId: item.id
      }).then(resp => {
        let res = resp.data;
        if (res.success) {
          if (res.action === "down") {
            let index = utils.inArray(userInfo.userId, item.ups);
            item.ups.splice(index, 1);
          } else {
            item.ups.push(userInfo.userId);
          }
          setTopic({
            replies: topic.replies.map((reply, idx) =>
              idx === index ? item : reply
            )
          });
        }
      });
    }
  };

  const fetchTopic = () => {
    const topicId = router?.params.id || '';
    if (!topicId) {
      // navigate to home page
      return utils.redirectTo({
        url: "/pages/index/index"
      });
    }
    setTopicId(topicId);
    getTopic({
      topicId: topicId
    }).then(resp => {
      let d = resp.data;
      if (d && d.data) {
        setTopic(d.data);
      } else {
        setNoData(true);
      }
    });
  };
  const getLastTimeStr = (Text, ago) => {
    return utils.getLastTimeStr(Text, ago);
  };

  const updateReplies = (fn) => { fn(topic, setTopic) }

  const replayList = topic.replies.map((item: any, index: number) => {
    return (
      <View className="li flex-wrp" key={index}>
        <View className="user">
          <Link to={{ url: "/pages/user/index", params: { loginname: item.author.loginname } }}>
            <Image className="head" src={item.author.avatar_url} />
          </Link>
          <View className="info">
            <Text className="cl">
              <Text className="name">{item.author.loginname}</Text>
              <Text className="name mt10">
                <Text />
                发布于:
                {getLastTimeStr(item.create_at, true)}
              </Text>
            </Text>
            <Text className="cr">
              <Space>
                <Space>
                  {
                    item.ups.includes(userInfo.userId) ?
                      <HeartFill color='#9d8352' size={14} onClick={() => fetchUpReply(item, index)} />
                      : <Heart size={14} onClick={() => fetchUpReply(item, index)} />
                  }
                  <Text className='txt'>{item.ups.length}</Text>
                </Space>
                <Text>
                  <Comment size={14} onClick={() => addReply(item.id)} />
                </Text>
              </Space>
            </Text>
          </View>
        </View>
        <View className="reply_content" dangerouslySetInnerHTML={{ __html: item.content }} />
        {userInfo && userInfo.userId && curReplyId === item.id ? <Reply topic={topic} updateReplies={updateReplies} topicId={topicId} replyId={item.id} replyTo={item.author.loginname} show={curReplyId} onClose={hideItemReply} /> : ""}
      </View>
    );
  });

  return (
    <Page className="flex-wrp" title={"主题"} >
      {topic.title ? (
        <View id="page" className={classNames({
          "show-menu": showMenu
        })}>
          <View className="topic-title">{topic.title}</View>
          <View className="author-info">
            <Link to={{ url: "/pages/user/index", params: { loginname: topic.author.loginname } }}>
              <Image className="avatar" src={topic.author.avatar_url} />
            </Link>
            <View className="col">
              <Text className='name'>{topic.author.loginname}</Text>
              <Text className="time">
                发布于:
                {getLastTimeStr(topic.create_at, true)}
              </Text>
            </View>
            <View className="right">
              <Text
                className={
                  "tag " +
                  utils.getTabInfo(topic.tab, topic.good, topic.top, true)
                }
              >
                {utils.getTabInfo(topic.tab, topic.good, topic.top, false)}
              </Text>
              <Text className="name">
                {topic.visit_count}
                次浏览
              </Text>
            </View>
          </View>
          <View className="markdown-body topic-content" dangerouslySetInnerHTML={{ __html: topic.content }} />
          <View className="topic-reply">
            <Text className="strong">{topic.reply_count}</Text> 回复
          </View>
          <View className="reply-list">
            <View className="ul">{replayList}</View>
          </View>
          <BackTop />
          {userInfo && userInfo.userId ? <Reply topic={topic} updateReplies={updateReplies} topicId={topicId} /> : <Link className="login-no" to={{ url: "/pages/login/index" }}>
            <View className="login">
              <View>登录</View>
            </View>
          </Link>}
        </View>
      ) : ""}
      {noData ? <NoData>
        该话题不存在!
      </NoData> : ""}
    </Page>
  );
};

export default Topic
