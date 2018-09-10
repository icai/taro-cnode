// import { ComponentClass } from 'react'
import Taro, { Component, Config } from "@tarojs/taro";
import { View, ScrollView } from '@tarojs/components'
import { TopicsList } from '../../components/topics/index'
import Header from '../../components/header/index';
import { throttle } from "throttle-debounce";
import { ITopic } from "../../interfaces/topic";
import BackTop from "../../components/backtotop/index";
import update from "immutability-helper";
import { post, get } from "../../utils/request";


import './index.scss'

// type IProps =  {};
interface IProps {
  props: object
}


type TsearchKey = {
  page: number,
  limit: number,
  tab: string,
  mdrender: boolean
}


interface IState {
  scroll: boolean,
  loading: boolean,
  topics: ITopic[],
  searchKey: TsearchKey
}


class List extends Component<IProps, IState> {
  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: "全部"
  };
  componentScrollBox = document.documentElement;

  throttledScrollHandler: (e)=> void;

  constructor() {
    super(...arguments);
    this.throttledScrollHandler = throttle(300, this.getScrollData);
  }

  state = {
    scroll: true,
    topics: [],
    index: {},
    searchKey: {
      page: 1,
      limit: 20,
      tab: "all",
      mdrender: true
    },
    loading: true,
    searchDataStr: ""
  };
  index = {};

  componentDidHide() {
    window.removeEventListener("scroll", this.throttledScrollHandler);
  }
  componentDidShow() {
    if (this.$router.params && this.$router.params.tab) {
      this.setState(
        prevState => {
          searchKey: Object.assign(prevState.searchKey, {
            tab: this.$router.params.tab
          });
        },
        () => {
          this.getTopics();
        }
      );
    } else {
      this.getTopics();
    }
    window.addEventListener("scroll", this.throttledScrollHandler);
  }
  getTitleStr(tab) {
    let str = "";
    switch (tab) {
      case "share":
        str = "分享";
        break;
      case "ask":
        str = "问答";
        break;
      case "job":
        str = "招聘";
        break;
      case "good":
        str = "精华";
        break;
      default:
        str = "全部";
        break;
    }
    return str;
  }

  getTopics() {
    let params = this.state.searchKey;
    try {
      get({
        url: "https://cnodejs.org/api/v1/topics",
        data: params
      }).then(res => {
        let data = res.data;
        this.setState({
          scroll: true,
          loading: false
        });
        if (data && data.data) {
          this.mergeTopics(data.data);
        }
      });
    } catch (error) {
      Taro.showToast({
        title: "载入远程数据错误"
      });
    }
  }
  mergeTopics = (topics) => {
    const newData = update(this.state.topics, { $push: topics });
    this.setState({
      topics: newData
    });
  }

  getScrollData = () => {
    if (this.state.scroll) {
      let totalheight =
        document.documentElement.clientHeight +
        document.documentElement.scrollTop;
      if (document.documentElement.scrollHeight <= totalheight + 200) {
        this.setState(
          prevState => ({
            scroll: false,
            searchKey: {
              ...prevState.searchKey,
              page: prevState.searchKey.page + 1
            }
          }),
          () => {
            this.getTopics();
          }
        );
      }
    }
  }
  render() {
    const { searchKey, topics, loading } = this.state;
    return (
      <View className="flex-wrp">
        <Header
          pageType={this.getTitleStr(searchKey.tab)}
          fixHead={true}
          needAdd={true}
        />
        <View id="page">
          <View className="posts-list">
            <TopicsList topics={topics} loading={loading} />
          </View>
        </View>
        <BackTop />
      </View>
    );
  }
}

export default List
