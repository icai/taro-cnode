import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { Topic } from "../topic";
import Loading from "../loading";

import { ITopic } from "../../interfaces/topic";


import '../topic/index.scss'

interface IProps {
  topics: ITopic[],
  loading: boolean
}


class TopicsList extends Component<IProps, {}> {
  static defaultProps = {
    topics: [],
    loading: true
  }

  render() {
    const { loading, topics } = this.props
    // if (loading) {
    //   return <Loading show={true} />
    // }
    const element = topics.map((topic) => {
      return <Topic key={topic.id} topic={topic} ></Topic>;
    })

    return (
      <View className='topic-list'>
        {element}
      </View>
    )
  }
}

export { TopicsList }
