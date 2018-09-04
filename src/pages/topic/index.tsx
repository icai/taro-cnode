import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import Header from '../../components/header/index'
import classNames from "classnames";
import * as utils from '../../libs/utils';

import { connect } from '@tarojs/redux'
import { get, set } from '../../actions/userinfo'


import './index.scss'

type PageStateProps = {
  userInfo: {
    userId: string;
  };
};

type PageDispatchProps = {
  getUserInfo: () => void
  setUserInfo: () => void
}

type PageOwnProps = {
  userInfo: object
};

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Topic {
  props: IProps;
}

@connect(
  ({ userInfo }) => ({
    userInfo
  }),
  dispatch => ({
    getUserInfo() {
      return dispatch(get());
    },
    setUserInfo(s) {
      dispatch(set(s));
    }
  })
)
class Topic extends Component {
  config: Config = {
    navigationBarTitleText: "主题"
  };

  state = {
    showMenu: false,
    topic: {
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
    },
    noData: false,
    topicId: "",
    curReplyId: ""
  };

  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps);
  }
  componentDidShow() {
    this.getTopic();
  }
  addReply(id) {
    // this.curReplyId = id;
    // if (!this.props.userInfo.userId) {
    //     this.$router.push({
    //         name: 'login',
    //         params: {
    //             redirect: encodeURIComponent(this.$route.path)
    //         }
    //     });
    // }
  }
  getTopic = () => {
    const topicId = this.$router.params.id;
    Taro.request({
      method: "GET",
      url: "https://cnodejs.org/api/v1/topic/" + topicId
    }).then(resp => {
      let d = resp.data;
      if (d && d.data) {
        this.setState({
          topic: d.data
        });
      } else {
        this.setState({
          noData: true
        });
      }
    });
  };
  render() {
    console.info(this)
    const { noData, topicId, showMenu, curReplyId, topic } = this.state;
    const getLastTimeStr = (Text, ago) => {
      return utils.getLastTimeStr(Text, ago);
    };

    const getTabInfo = (tab, good = false, top, isClass) => {
      return utils.getTabInfo(tab, good, top, isClass);
    };

    const isUps = ups => {
      return ups.includes((this.props.userInfo || {}).userId)
       //Array.inArray(this.props.userInfo.userId || '', ups) >= 0;
    };

    const replayList = topic.replies.map(item => {
        return <View className="li flex-wrp">
          <View className="user">
            <View>
              <Image className="head" src={item.author.avatar_url} />
            </View>
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
                <Text
                  className={classNames({
                    iconfont: 1,
                    icon: 1,
                    uped: isUps(item.ups)
                  })}
                  onClick={e => {
                    this.upReply(item);
                  }}
                >
                  &#xe608;
                </Text>
                {item.ups.length}
                <Text
                  className="iconfont icon"
                  onClick={e => {
                    this.addReply(item.id);
                  }}
                >
                  &#xe609;
                </Text>
              </Text>
            </View>
          </View>
          <View className="reply_content" dangerouslySetInnerHTML={{ __html: item.content }} />
        </View>;
      });

    return <View className="flex-wrp">
        <Header pageType={"主题"} fixHead={true} needAdd={true} />
        {topic.title ? <View id="page" className={classNames({
              "show-menu": showMenu
            })}>
            <View className="topic-title">{topic.title}</View>
            <View className="author-info">
              <Image className="avatar" src={topic.author.avatar_url} />
              <View className="col">
                <Text>{topic.author.loginname}</Text>
                <Text className="time">
                  发布于:
                  {getLastTimeStr(topic.create_at, true)}
                </Text>
              </View>
              <View className="right">
                <Text
                  className={
                    "tag " +
                    getTabInfo(topic.tab, topic.good, topic.top, true)
                  }
                >
                  {getTabInfo(topic.tab, topic.good, topic.top, false)}
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
            {/* <nv-top></nv-top>
              <nv-reply v-if="userInfo.userId"
                      :topic="topic"
                      :topic-id="topicId">
              </nv-reply> */}
          </View> : ""}
        {noData ? <View className="no-data">
            <i className="iconfont icon-empty">&#xe60a;</i>
            该话题不存在!
          </View> : ""}
      </View>;
  }
}

export default Topic as ComponentClass<PageOwnProps, PageState>
