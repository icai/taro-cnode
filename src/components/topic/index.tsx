import React from 'react';
import { View, Text, Image } from '@tarojs/components';
import { ITopic } from '@/interfaces/topic';
import Link from '@/components/link';
import Tag from '@/components/tag';
import * as utils from '@/libs/utils';

import './index.scss';

interface IProps {
  topic: ITopic;
  key: string;
}

const getTabInfo = (tab: string, good: boolean, top: boolean, isClass: boolean) => {
  return utils.getTabInfo(tab, good, top, isClass);
};

const Topic: React.FC<IProps> = ({ topic }) => {
  const { title, tab, good, top, author, visit_count, reply_count, create_at, last_reply_at, id } = topic;

  const classnames = 'stitle';
  const type = getTabInfo(tab, good, top, true)
  const tit = getTabInfo(tab, good, top, false);
  return (
    <Link className="topic" to={{ url: '/pages/topic/index?id=' + id }}>
      <View className={classnames}>
        <Tag type={type}>{tit}</Tag>
        {title}
      </View>
      <View className="content">
        <View>
          <Image src={author.avatar_url} className="avatar" />
        </View>
        <View className="info">
          <View>
            <View className="name">{author.loginname}</View>
            {reply_count > 0 ? (
              <Text className="status">
                <Text className='b'>{reply_count}</Text> / <Text>{visit_count}</Text>
              </Text>
            ) : (
              ''
            )}
          </View>
          <View>
            <Text className="time">{utils.getLastTimeStr(create_at, true)}</Text>
            <Text className="time">{utils.getLastTimeStr(last_reply_at, true)}</Text>
          </View>
        </View>
      </View>
    </Link>
  );
};

export { Topic };
