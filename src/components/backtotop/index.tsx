import { ComponentClass } from 'react'
import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
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
  componentScrollBox;
  constructor() {
    super(...arguments);
    if (Taro.getEnv() == 'WEB') {
      this.componentScrollBox = document.documentElement;
    }
  }
  state = {
    show: false
  };

  componentWillUnmount() {
    if (Taro.getEnv() == 'WEB') {
      window.removeEventListener("scroll", this.scrollbinding);
    }
  }

  componentDidMount() {
    if (Taro.getEnv() == 'WEB') {
      this.scrollbinding = throttle(300, this.handleScroll);
      window.addEventListener("scroll", this.scrollbinding);
    }
  }
  // web
  handleScroll = () => {
    const scrollTop = this.componentScrollBox.scrollTop;
    const show = scrollTop >= 0.5 * document.body.clientHeight;
    this.setState({
      show: show
    });
  }
  // weapp
  onPageScroll =  (e) => {
    const scrollTop = e.scrollTop
    const show = scrollTop > 500 ? true : false
    this.setState({ show: show });
  }

  goTop = () => {
    if (Taro.getEnv() == 'WEB') {
      this.componentScrollBox.scrollTop = 0;
    } else if (Taro.getEnv() == 'WEAPP') {
      Taro.pageScrollTo({
        scrollTop: 0
      })
    }
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


export default BackTop as ComponentClass<PageOwnProps, PageState>
