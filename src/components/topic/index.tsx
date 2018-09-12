import Taro, { Component, eventCenter } from '@tarojs/taro'
import { View, Text, Navigator, Image } from '@tarojs/components'
import ALink from "../../components/link";
import classNames from "classnames";
import * as utils from '../../libs/utils'
import { ITopic } from "../../interfaces/topic";

import './index.scss'

interface IProps {
  topic: ITopic,
  key: string
}



class Topic extends Component<IProps, {}> {

  getTabInfo(tab, good, top, isClass) {
    return utils.getTabInfo(tab, good, top, isClass);
  }
  render() {
    const { title,  tab, good, top,
      author, visit_count, reply_count, create_at, last_reply_at, id } = this.props.topic;

    const classnames = "t-tag " + this.getTabInfo(tab, good, top, true);
    const tit = this.getTabInfo(tab, good, top, false)
    return <ALink to={{ url: "/pages/topic/index?id=" + id }}>
      <View className="topic__topic">
          <View className="topic__stitle" title={tit}>
            <Text className={classnames}>{tit}</Text>
            {title}
          </View>
          <View className="topic__content">
            <View>
              <Image src={author.avatar_url} className="topic__avatar" />
            </View>
            <View className="topic__info">
              <View className="region first">
                <Text className="name">{author.loginname}</Text>
                {reply_count > 0 ?
                  <Text className="status">
                    <Text className="b">{reply_count}</Text><Text> / </Text><Text>{visit_count}</Text>
                  </Text> : ""}
              </View>
              <View className="region second">
                <Text className="time">
                  {utils.getLastTimeStr(create_at, true)}
                </Text>
                <Text className="time time2">
                  {utils.getLastTimeStr(last_reply_at, true)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ALink>;
  }
}

export { Topic }
