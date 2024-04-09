import { View, ScrollView } from '@tarojs/components';
import Header from '@/components/header/index';
import Link from '@/components/link';

import './index.scss';
import Page from '@/components/page';

const About = () => {
  return (
    <Page className="flex-wrp" title={"关于"} >
      <ScrollView className="about-info">
        <View className="dt">关于项目</View>
        <View className="dd">该项目是基于 https://cnodejs.org 的 API，使用 Taro 编写的多端应用。</View>
        <View className="dt">源码地址</View>
        <View className='dd'>
          <Link to={{ url: "https://github.com/icai/taro-cnode"}}>
            https://github.com/icai/taro-cnode
          </Link>
        </View>
        <View className="dt">意见反馈</View>
        <View className='dd'>
          <Link to={{ url: "https://github.com/icai/taro-cnode/issues"}}>
            发表意见或提需求 https://github.com/icai/taro-cnode/issues
          </Link>
        </View>
        <View className="dt">当前版本</View>
        <View className="dd">V1.0</View>
      </ScrollView>
    </Page>
  );
};

About.config = {
  navigationBarTitleText: '关于'
};

export default About;
