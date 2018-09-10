import Taro, { Component, Config } from "@tarojs/taro";
import { withUser } from "../../hoc/router";
import { View, Picker } from '@tarojs/components'
import Header from '../../components/header/index'
import { AtTextarea, AtInput } from "taro-ui";
import * as utils from '../../libs/utils'
import classNames from "classnames";


import './index.scss'


class Add extends Component<{}, {}> {
  config: Config = {
    navigationBarTitleText: "主题"
  };

  state = {
    topic: {
      tab: "share",
      title: "",
      content: ""
    },
    selectorIndex: 0,
    selector: [{
      name: '分享',
      value: 'share'
    }, {
        name: '问答',
        value: 'ask'
    }, {
        name: '招聘',
        value: 'job'
    }],
    err: "",
    authorTxt:
      "\n 来自拉风的 [Taro-cnode](https://github.com/icai/taro-cnode)"
  };
  addTopic() {
    let title = utils.trim(this.state.topic.title);
    let contents = utils.trim(this.state.topic.content);
    if (!title || title.length < 10) {
      this.setState({
        err: "title"
      });
      return false;
    }
    if (!contents) {
      this.setState({
        err: "content"
      });
      return false;
    }
    let postData = {
      ...this.state.topic,
      content: this.state.topic.content + this.state.authorTxt,
      accesstoken: this.props.userInfo.token
    };

    Taro.request({
      method: "POST",
      data: utils.param(postData),
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json"
      },
      url: "https://cnodejs.org/api/v1/topics"
    })
      .then(resp => {
        let res = resp.data;
        if (res.success) {
          Taro.navigateTo({ url: "/pages/list/index" });
        } else {
          Taro.showToast({ title: res.error_msg });
        }
      })
      .catch(resp => {
        console.info(resp);
      });
  }
  handleTopicTabChange = e => {
    this.setState(prevState => ({
      topic: {
        ...prevState.topic,
        tab: prevState.selector[e.detail.value]["value"]
      },
      selectorIndex: e.detail.value
    }));
  };
  handleTopicContentChange = e => {
    this.setState(prevState => ({
      topic: {
        ...prevState.topic,
        content: e.target.value
      }
    }));
  };
  handleTopicChange = e => {
    this.setState(prevState => ({
      topic: {
        ...prevState.topic,
        title: e
      }
    }));
  };
  render() {
    const { err, selectorIndex } = this.state;
    return <View className="flex-wrp">
        <Header pageType={"主题"} fixHead={true} showMenu={true} />
        <View className="add-container">
          <View className="line">
            选择分类：
            <Picker className="add-tab" mode="selector" value={selectorIndex} range={this.state.selector} rangeKey={"name"} onChange={this.handleTopicTabChange}>
              <View className="picker">{this.state.selector[selectorIndex]['name']}</View>
            </Picker>
            {/* <select className="add-tab" value={this.state.topic.tab} onChange={this.handleTopicTabChange}>
              <option value="share">分享</option>
              <option value="ask">问答</option>
              <option value="job">招聘</option>
            </select> */}
            <View className="add-btn" onClick={e => {
                this.addTopic();
              }}>
              发布
            </View>
          </View>
          <View className="line">
            <AtInput className={classNames({
                "add-title": 1,
                err: err == "title"
              })} value={this.state.topic.title} onChange={this.handleTopicChange} type="text" placeholder="标题，字数10字以上" max-length="100" />
          </View>
          <AtTextarea className={classNames({
              "add-content": 1,
              err: err == "content"
            })} value={this.state.topic.content} onChange={this.handleTopicContentChange} maxlength={9999} height="400" placeholder="回复支持Markdown语法,请注意标记代码" />
        </View>
      </View>;
  }
}

export default withUser(Add);
