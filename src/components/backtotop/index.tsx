import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, Button } from '@tarojs/components'
// import { connect } from '@tarojs/redux'
import { throttle } from 'throttle-debounce';


import './index.scss'



type PageOwnProps = {}

type PageState = {}

type IProps = PageOwnProps

interface BackTop {
  props: IProps,
  scrollbinding: () => void
}


class BackTop extends Component {
  // constructor() {
  //   super(...arguments);
  // }
  state = {
    show: false
  };

  componentScrollBox = document.documentElement;
  // componentScrollHander = window;

  componentWillReceiveProps(nextProps) {
    // console.log(this.props, nextProps);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollbinding);
  }

  componentDidMount() {
    this.scrollbinding = throttle(300, this.handleScroll);
    window.addEventListener("scroll", this.scrollbinding);
  }

  componentDidHide() {}

  handleScroll = () => {
    const scrollTop = this.componentScrollBox.scrollTop;
    const show = scrollTop >= 0.5 * document.body.clientHeight;

    this.setState({
      show: show
    });
  };
  goTop = () => {
    this.componentScrollBox.scrollTop = 0;
  };
  render() {
    const { show } = this.state;

    return (
      <View>
        {show ? (
          <View className="iconfont icon-top" onClick={this.goTop}>
            &#xe611;
          </View>
        ) : (
          ""
        )}
      </View>
    );
  }
}

// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

export default BackTop as ComponentClass<PageOwnProps, PageState>
