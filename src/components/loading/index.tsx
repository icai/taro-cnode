import Taro, { Component } from '@tarojs/taro'
import { View, Icon } from "@tarojs/components";
// import { connect } from '@tarojs/redux'

import './index.scss'

interface IProps {
  showTxt?: string
  show: boolean
}


class Loading extends Component<IProps, {}> {
  render() {
    const { showTxt, show } = this.props;
    return (
      <View>
        {show ? <View id="wxloading" className="wx_loading">
          <View className="wx_loading_inner">
            <i class="wx_loading_icon"></i>
            {showTxt}...
          </View>
        </View> : ''}
      </View>
    );
  }
}


export default Loading;
