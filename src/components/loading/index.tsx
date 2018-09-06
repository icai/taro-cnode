import Taro, { Component } from '@tarojs/taro'
import { View, Icon } from "@tarojs/components";
// import { connect } from '@tarojs/redux'

import './index.scss'

interface IProps {
  showTxt?: string
  show: boolean
}


class Loading extends Component<IProps, {}> {
  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps);
  }
  componentWillUnmount() {}
  componentDidMount() {}
  componentDidHide() {}
  render() {
    const { showTxt, show } = this.props;
    return (
      <View className="index">
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
