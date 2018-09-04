import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import Header from '../../components/header/index'
import { AtTextarea, AtInput, AtTabs, AtTabsPane  } from 'taro-ui'
import { trim } from '../../libs/utils'
import classNames from "classnames";
import * as utils from '../../libs/utils';

import { connect } from '@tarojs/redux'
import { get, set } from '../../actions/userinfo'


import './index.scss'

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  getUserInfo: () => void
  setUserInfo: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Message {
  props: IProps;
}

@connect(({ userinfo }) => ({
  userinfo
}), (dispatch) => ({
  getUserInfo () {
    return dispatch(get())
  },
  setUserInfo(s) {
    dispatch(set(s))
  }
}))
class Message extends Component {

  config: Config = {
      navigationBarTitleText: '消息'
  }

  state = {
    showMenu: false,
    selectItem: 2,
    message: {
      hasnot_read_messages: []
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
  markall = ()=>{

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
        <View className="page">
            <View className="tabs">
                <View className={classNames({'item': 1 , 'br': 1, "selected": selectItem === 2})} onClick={(e)=> this.changeItem(2)}>已读消息</View>
                <View className={classNames({'item': 1 , "selected": selectItem === 1})}  onClick={(e)=> this.changeItem(1)}>
                    未读消息
                    {no_read_len > 0 ?  <i className="iconfont read"
                        onClick={this.markall}>&#xe60c;</i> : ''}
                </View>
            </View>
            <View className='tab-content'>
              { currentData.map((item, idx)=> {
                  <View className="message markdown-body">
                    <View className="user">
                        <Image className="head" src={item.author.avatar_url} ></Image>
                        <View className="info">
                            <Text className="cl">
                                <Text className="name">{item.author.loginname}</Text>
                                { item.type==='at' ? <Text className="name" >在回复中@了您</Text> : ''}
                                { item.type==='reply' ? <Text className="name">回复了您的话题</Text> : ''}
                            </Text>
                            <Text className="cr">
                                <Text className="name">{getLastTimeStr(item.reply.create_at, true)}</Text>
                            </Text>
                        </View>
                    </View>
                    <View className="reply_content">{item.reply.content}</View>
                    <Link to={'/topic/' + item.topic.id } >
                        <View className="topic-title">
                            话题：{item.topic.title}
                        </View>
                    </Link>
                </View>
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

export default Message as ComponentClass<PageOwnProps, PageState>
