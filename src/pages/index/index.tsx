// import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'


import './index.scss';

class Index extends Component {

    /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
    config: Config = {
    navigationBarTitleText: '首页'
  }


  componentDidMount () {
    // setTimeout(()=> {
    //   Taro.navigateTo({
    //     url: "/pages/list/index"
    //   });
    // }, 1000)
  }

  componentDidHide () { }

  render () {
    return <View>
        <Image className="index" mode="widthFix" src={require("../../assets/images/index.png")} />
        <View className="index-subtitle">Taro Cnode.js社区</View>
      </View>;
  }
}


export default Index
