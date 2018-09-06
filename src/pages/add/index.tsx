import { ComponentClass } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View, ScrollView } from '@tarojs/components'
import Header from '../../components/header/index'
import { AtTextarea, AtInput } from 'taro-ui'
import { trim } from '../../libs/utils'
import classNames from "classnames";

import { connect } from '@tarojs/redux'
import { get, set, asyncAdd } from '../../actions/userinfo'


import './index.scss'

// interface IProps {
//   props: IProps;
// }


// interface IState {
//   props: IProps;
// }

type PageStateProps = {
  counter: {
    num: number
  }
}

type PageDispatchProps = {
  getUserInfo: () => void
  setUserInfo: () => void
}

type PageOwnProps = {}

type PageState = {}

type IProps = PageStateProps & PageDispatchProps & PageOwnProps

interface Add {
  props: IProps;
}

@connect(({ userinfo }) => ({
  userinfo
}), (dispatch) => ({
  getUserInfo () {
    return dispatch(get())
  },
  setUserInfo(s) {
    dispatch(set(s))
  }
}))
class Add extends Component {
  config: Config = {
      navigationBarTitleText: '主题'
  }

  state = {
    topic: {
        tab: 'share',
        title: '',
        content: ''
    },
    err: '',
    authorTxt: '<br/><br/><a class="from" href="https://github.com/icai/taro-cnodejs">by taro-cnodejs</a>'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidMount () { }

  componentDidHide () { }
  addTopic() {
      let title = utils.trim(this.state.topic.title);
      let contents = utils.trim(this.state.topic.content);

      if (!title || title.length < 10) {
          this.setState({
            err: 'title'
          })
          return false;
      }
      if (!contents) {
          this.setState({
            err: 'content'
          })
          return false;
      }
      let postData = {
          ...this.topic,
          content: this.topic.content + this.authorTxt,
          accesstoken: this.props.userInfo.token
      };

     Taro.request({
          method: 'POST',
          url: 'https://cnodejs.org/api/v1/topics',
          data: postData,
          // dataType: 'json',
          // success: (res) => {
          //     if (res.success) {
          //         this.$router.push({
          //             name: 'list'
          //         });
          //     }
          // },
          // error: (res) => {
          //     let error = JSON.parse(res.responseText);
          //     this.$alert(error.error_msg);
          //     return false;
          // }
      }).then(resp => {
        let res = resp.data;
        if (res.success) {
          Taro.navigateTo({
            url: "/pages/list/index",
          });
        }
      });
  }
  handleTopicTabChange =(e)=> {
    this.state.topic.tab = e.target.value;
  }
  handleTopicContentChange =(e)=> {
    this.state.topic.content = e.target.value;
  }
  handleTopicChange = (e)=> {
    this.state.topic.title = e.target.value;
  }
  render () {
    const { err } = this.state;
    return (
      <View className="flex-wrp"  >
        <Header pageType={"主题"} fixHead={true} showMenu={true} ></Header>
        <View className="add-container">
            <View className="line">选择分类：
                <select
                  className="add-tab"
                  value={this.state.topic.tab}
                  onChange={this.handleTopicTabChange}>
                    <option value="share">分享</option>
                    <option value="ask">问答</option>
                    <option value="job">招聘</option>
                </select>
                <a className="add-btn" onClick={this.addTopic}>发布</a>
            </View>
            <View className="line">
                <AtInput className={classNames({
                  "add-title": 1,
                  'err': err == 'title'
                })}
                value={this.state.topic.title}
                onChange={this.handleTopicChange}
                type="text"
                placeholder="标题，字数10字以上"
                max-length="100"
                ></AtInput>
            </View>
            <AtTextarea
                className={classNames({
                  "add-content": 1,
                  'err': err == 'content'
                })}
                value={this.state.topic.title}
                onChange={this.handleTopicContentChange}
                rows="35"
                placeholder='回复支持Markdown语法,请注意标记代码'>
            </AtTextarea>
        </View>
      </View>

    )
  }
}

export default Add as ComponentClass<PageOwnProps, PageState>
