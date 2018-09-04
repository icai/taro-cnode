import Taro, { Component, eventCenter } from '@tarojs/taro'
import { View, Text, Navigator, Image } from '@tarojs/components'

import classNames from "classnames";

// import api from '../lib/utils/api'
import * as utils from '../../libs/utils'
// import { IMember } from '../../interfaces/member'
// import { INode } from '../../interfaces/node';
// import { IAuthor } from "../../interfaces/author";
import { ITopic } from "../../interfaces/topic";

import './index.scss'

interface IProps {
  topic: ITopic,
  key: string
}



class Topic extends Component<IProps, {}> {

  handleNavigate = (id) => {
    // 这里必须显式指名 this.props 包含 tid
    // 或设置 defaultProps
    // const { tid, not_navi } = this.props
    // if (not_navi) {
    //   return
    // }
    // // 懒得用 redux 了
    // eventCenter.trigger(Thread_DETAIL_NAVIGATE, this.props)
    Taro.navigateTo({
      url: '/pages/topic/index?id=' + id
    })
  }
  getTabInfo(tab, good, top, isClass) {
    return utils.getTabInfo(tab, good, top, isClass);
  }
  render() {
    const { title,  tab, good, top,
      author, visit_count, reply_count, create_at, last_reply_at, id } = this.props.topic;

    const classnames = 'stitle ' + this.getTabInfo(tab, good, top, true)
    const tit = this.getTabInfo(tab, good, top, false)
    return (
      <View className="topic" onClick={(e)=> {this.handleNavigate(id)}}>
        <h3 className={classnames}  title={tit} >
          {title}
        </h3>
        <View className="content">
          <View>
            <Image src={author.avatar_url} className="avatar" />
          </View>
          <View className="info">
            <View>
              <View className="name">{author.loginname}</View>
              {reply_count > 0 ? <Text className="status">
                  <b>{reply_count}</b>/ <Text>{visit_count}</Text>
                </Text> : ""}
            </View>
            <View>
              <Text className="time">{utils.getLastTimeStr(create_at, true)}</Text>
              <Text className="time">{utils.getLastTimeStr(last_reply_at, true)}</Text>
            </View>
          </View>
        </View>
      </View>
      );
  }
}

export { Topic }
