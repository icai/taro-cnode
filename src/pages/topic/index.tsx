import Taro, { Component, Config } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import Header from '../../components/header/index';
import Link from "../../components/link";
import Reply from '../../components/reply';
import classNames from "classnames";
import * as utils from '../../libs/utils';
// import { withUser } from "../../hoc/router";
import update from "immutability-helper";
import { post, get } from "../../utils/request";
import BackTop from "../../components/backtotop/index";
import { connect } from "@tarojs/redux";
import * as actions from "../../actions/auth";


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

@connect( ({ auth }) => ({ userInfo: auth }),
(dispatch: Function) => ({
  authLogin: (...args: any) => dispatch(actions.auth(...args)),
  authCheckState: () => dispatch(actions.authCheckState())
}))
class Topic extends Component<Iprops, PageState> {
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
  componentDidMount() {
    this.getTopic();
  }
  addReply(id) {
    this.setState({ curReplyId: id });
    if (!this.props.userInfo.userId) {

    }
  }
  hideItemReply() {
    this.setState({ curReplyId: '' });
  }
  upReply(item, index) {
    const { userInfo = { userId: ''} } = this.props;
    const { topic } = this.state;
    console.log(this.$router)
    if (!userInfo.userId) {

      utils.navigateTo({
        url: "/pages/login/index",
        params: {
          redirect: encodeURIComponent(this.$router.path + (this.$router.params?  '?' + utils.param(this.$router.params) : ''))
        }
      });
    } else {
      post({
        url: "https://cnodejs.org/api/v1/reply/" + item.id + "/ups",
        data: {
          accesstoken: userInfo.token
        }
      }).then(resp => {
        let res = resp.data;
        if (res.success) {
          if (res.action === "down") {
            let index = utils.inArray(userInfo.userId, item.ups);
            item.ups.splice(index, 1);
          } else {
            item.ups.push(userInfo.userId);
          }
          update(topic.replies, {
            [index]: {
              $set: item
            }
          });
          this.setState({ topic: topic });
        }
      });
    }
  }
  getTopic = () => {
    const topicId = this.$router.params.id;
    this.setState({ topicId });
    get({
      url: "https://cnodejs.org/api/v1/topic/" + topicId,
      // data: {
      //   mdrender: false
      // }
    }).then(resp => {
      let d = resp.data;
      if (d && d.data) {
        this.setState({ topic: d.data });
      } else {
        this.setState({ noData: true });
      }
    });
  };
  render() {
    const { noData, topicId, showMenu, curReplyId, topic } = this.state;
    const { userInfo } = this.props;
    const getLastTimeStr = (Text, ago) => {
      return utils.getLastTimeStr(Text, ago);
    };

    const getTabInfo = (tab, good = false, top, isClass) => {
      return utils.getTabInfo(tab, good, top, isClass);
    };
    const isUps = ups => {
      return ups.includes((userInfo || {}).userId)
    };
    const updateReplies = (fn) => { fn(topic, this) }
    const replayList = topic.replies.map((item, index) => {
      return <View className="li flex-wrp">
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
              <Text className={classNames({
                iconfont: 1,
                icon: 1,
                uped: isUps(item.ups)
              })} onClick={this.upReply.bind(this, item, index)}>
                &#xe608;
                </Text>
              {item.ups.length}
              <Text className="iconfont icon" onClick={this.addReply.bind(this, item.id)}>
                &#xe609;
                </Text>
            </Text>
          </View>
        </View>
        <View className="reply_content" dangerouslySetInnerHTML={{ __html: item.content }} />
        {userInfo && userInfo.userId && curReplyId === item.id ? <Reply topic={topic} updateReplies={updateReplies} topicId={topicId} replyId={item.id} replyTo={item.author.loginname} show={curReplyId} onClose={this.hideItemReply.bind(this)} /> : ""}
      </View>;
    });

    return <View className="flex-wrp">
      <Header pageType={"主题"} fixHead={true} needAdd={true} />
      {topic.title ? <View id="page" className={classNames({
        "show-menu": showMenu
      })}>
        <View className="topic-title">{topic.title}</View>
        <View className="author-info">
          <Link to={{ url: "/pages/user/index", params: { loginname: topic.author.loginname } }}>
            <Image className="avatar" src={topic.author.avatar_url} />
          </Link>
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
        <BackTop />
        {userInfo && userInfo.userId ? <Reply topic={topic} updateReplies={updateReplies} topicId={topicId} /> :  <Link className="login-no" to={{ url: "/pages/login/index" }}>
            <View className="login">
              <View>登录</View>
            </View>
          </Link> }
      </View> : ""}
      {noData ? <View className="no-data">
        <i className="iconfont icon-empty">&#xe60a;</i>
        该话题不存在!
          </View> : ""}
    </View>;
  }
}

export default Topic // withUser(Topic as ComponentClass<PageOwnProps, PageState>, true);
