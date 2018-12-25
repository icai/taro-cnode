import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { Topic } from "../topic";
import { ITopic } from "../../interfaces/topic";

import "../topic/index.scss";

interface IProps {
  topics: ITopic[];
}

class TopicsList extends Component<IProps, {}> {
  static defaultProps = {
    topics: []
  };

  render() {
    const { topics } = this.props;
    const element = topics.map(topic => {
      return <Topic key={topic.id} topic={topic} />;
    });
    return <View className="topic-list">{element}</View>;
  }
}

export { TopicsList };
