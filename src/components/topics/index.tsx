import React from 'react';
import { View } from '@tarojs/components';
import { Topic } from '../topic';
import { ITopic } from '@/interfaces/topic';


interface IProps {
  topics: ITopic[];
}

const TopicsList: React.FC<IProps> = ({ topics = [] }) => {
  const renderTopics = topics.map((topic) => <Topic key={topic.id} topic={topic} />);
  return <View className="topic-list">{renderTopics}</View>;
};

export { TopicsList };
