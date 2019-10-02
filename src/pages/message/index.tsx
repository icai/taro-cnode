import { ComponentClass } from 'react'
import Taro, { Component, Config } from "@tarojs/taro";
import { View, Image, Text } from '@tarojs/components';
import Link from "../../components/link";
import Header from '../../components/header/index'
import classNames from "classnames";
import * as utils from '../../libs/utils';
import { post, get } from "../../utils/request";
import { connect } from "@tarojs/redux";
import * as actions from "../../actions/auth";


import './index.scss'

@connect( ({ auth }) => ({ userInfo: auth }),
(dispatch: Function) => ({
  authLogin: (...args: any) => dispatch(actions.auth(...args)),
  authCheckState: () => dispatch(actions.authCheckState())
}))
class Message extends Component<Iprops, PageState> {

  config: Config = {
      navigationBarTitleText: '消息'
  }

  state = {
    showMenu: false,
    selectItem: 2,
    message: {
      hasnot_read_messages: [],
      has_read_messages: []
    },
    noData: false,
    currentData: [],
    no_read_len: 0
  }
  changeItem = (idx)=> {
    const currentData = idx === 1 ? this.state.message.hasnot_read_messages : this.state.message.has_read_messages
    this.setState(prevState => ({
      ...prevState,
      selectItem: idx,
      currentData: currentData,
      noData: currentData.length === 0
    }))
  }
  componentDidShow() {
    const { userInfo } = this.props;
    get({
      url: 'https://cnodejs.org/api/v1/messages?accesstoken=' + userInfo.token
    }).then(resp => {
      const d = resp.data;
      const willdata = {};
      if (d && d.data) {
        willdata.message = d.data;
        willdata.no_read_len = d.data.hasnot_read_messages.length;
        if (d.data.hasnot_read_messages.length > 0) {
          willdata.currentData = d.data.hasnot_read_messages;
        } else {
          willdata.currentData = d.data.has_read_messages;
          willdata.selectItem = 2;
        }
        willdata.noData = willdata.currentData.length === 0;
      } else {
        willdata.noData = true;
      }
      this.setState({...willdata})
    })
  }
  markall = ()=>{
    const { userInfo } = this.props;
    post({
      url: 'https://cnodejs.org/api/v1/message/mark_all',
      data: {
        accesstoken: userInfo.token
      }
    }).then(resp => {
      const d = resp.data;
      if (d && d.success) {
        window.location.reload();
      }
    })
  }
  render () {
    const { currentData, no_read_len, selectItem,  noData } = this.state;
    const getLastTimeStr = (date, friendly) => {
      return utils.getLastTimeStr(date, friendly);
    }
    return (
      <View className="flex-wrp"  >
        <Header pageType={"消息"} fixHead={true} showMenu={true}
        needAdd={true} messageCount={no_read_len}></Header>
        <View id="page" className="page">
            <View className="tabs">
            <View className={classNames({ 'item': 1, 'br': 1, "selected": selectItem === 2 })} onClick={this.changeItem.bind(this, 2)}>已读消息</View>
            <View className={classNames({ 'item': 1, "selected": selectItem === 1 })} onClick={this.changeItem.bind(this, 1)}>
                    未读消息
                    {no_read_len > 0 ?  <Text className="iconfont read"
                onClick={this.markall}>&#xe60c;</Text> : ''}
                </View>
            </View>
            <View className='tab-content'>
              { currentData.map((item, idx)=> {
                  return <View className="message markdown-body">
                      <View className="user">
                        <Image className="head" src={item.author.avatar_url} />
                        <View className="info">
                          <Text className="cl">
                            <Text className="name">
                              {item.author.loginname}
                            </Text>
                            {item.type === 'at' ? <Text className="name">
                                在回复中@了您
                              </Text> : ""}
                            {item.type === 'reply' ? <Text className="name">
                                回复了您的话题
                              </Text> : ""}
                          </Text>
                          <Text className="cr">
                            <Text className="name">
                              {getLastTimeStr(
                                item.reply.create_at,
                                true
                              )}
                            </Text>
                          </Text>
                        </View>
                      </View>
                    <View className="reply_content" dangerouslySetInnerHTML={{ __html: item.reply.content }}>
                      </View>
                      <Link to={{ url: "/pages/topic/index", params: { id: item.topic.id } }}>
                        <View className="topic-title">
                          话题：
                          {item.topic.title}
                        </View>
                      </Link>
                    </View>;
              })}
              { noData ?
                <View className="no-data">
                    <i className="iconfont icon-empty">&#xe60a;</i>
                    暂无数据!
                </View> : ''
              }
            </View>

        </View>

    </View>
    )
  }
}

export default Message// withUser(Message)
