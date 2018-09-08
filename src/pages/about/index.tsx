// import { ComponentClass } from 'react'
import Taro, { Component, Config } from "@tarojs/taro";
import { View, ScrollView } from '@tarojs/components'
import Header from '../../components/header/index'


import './index.scss'

// interface IProps {
//   props: IProps;
// }


// interface IState {
//   props: IProps;
// }


class About extends Component<{}, {}> {

    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
    config: Config = {
      navigationBarTitleText: '关于'
  }

  componentWillReceiveProps (nextProps) {
    // console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidMount () { }

  componentDidHide () { }

  render () {
    return (
      <View className="flex-wrp"  >
        <Header pageType={"关于"} fixHead={true} needAdd={true} ></Header>
          <ScrollView  className="about-info" style="height:100vh">
            <dt>关于项目</dt>
            <dd>该项目是基于 https://cnodejs.org 的api，Taro 编写的 多端App。</dd>
            <dt>源码地址</dt>
            <dd>
              <a href="https://github.com/icai/taro-cnode">
                https://github.com/icai/taro-cnode</a>
            </dd>
            <dt>意见反馈</dt>
            <dd>
              <a href="https://github.com/icai/taro-cnode/issues">
                发表意见或者提需求</a>
            </dd>
            <dt>当前版本</dt>
            <dd>V1.0</dd>
          </ScrollView>
      </View>

    )
  }
}

export default About
