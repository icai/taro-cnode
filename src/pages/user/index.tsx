import { ComponentClass } from 'react'
import Taro, { Config } from "@tarojs/taro";
import { Component } from "../../hoc/router";
import { View, Image, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import Header from "../../components/header/index";
import Link from '../../components/link'

import * as actions from "../../actions/auth";
import classNames from "classnames";
import * as utils from '../../libs/utils';

import './index.scss'


type PageStateProps = {
  authData: IAuth;
};

// interface PageStateProps {
//   authData: IAuth;
// }

type PageDispatchProps = {
  authCheckState: () => void;
};

type PageOwnProps = {

};

type PageState = {};

type IProps = PageStateProps & PageDispatchProps & PageOwnProps;

@connect(
  ({ auth }) => ({
    authData: auth
  }),
  (dispatch: Function) => ({
    authCheckState() {
      dispatch(actions.authCheckState());
    }
  })
)
class User extends Component<IProps, PageState> {
  config: Config = {
    navigationBarTitleText: "用户信息"
  };
  state = {
    currentData: [],
    user: {
      avatar_url: ""
    },
    showMenu: false,
    selectItem: 1
  };

  componentDidMount() {
    this.getUser();
  }

  componentDidHide() {}

  changeItem = idx => {
    const currentData =
      idx === 1
        ? this.state.user.recent_replies
        : this.state.user.recent_topics;
    this.setState(prevState => ({
      ...prevState,
      selectItem: idx,
      currentData: currentData
    }));
  };
  getUser() {
    let loginname = this.$router.params.loginname;
    if (!loginname) {
      Taro.showToast({
        title: "缺少用户名参数"
      });
      Taro.navigateTo({
        url: "/pages/list/index"
      });
      return false;
    }
    Taro.request({
      url: "https://cnodejs.org/api/v1/user/" + loginname
    }).then(res => {
      let d = res.data;
      if (d && d.data) {
        let data = d.data;
        this.setState({
          user: data
        });
        if (data.recent_replies.length > 0) {
          this.setState({
            currentData: data.recent_replies
          });
        } else {
          this.setState({
            currentData: data.recent_topics,
            selectItem: 2
          });
        }
      }
    });
  }

  render() {
    const { selectItem, user, currentData } = this.state;
    const getLastTimeStr = (date, friendly) => {
      return utils.getLastTimeStr(date, friendly);
    };
    return (
      <View className="flex-wrp">
        <Header
          pageType={"用户信息"}
          fixHead={true}
          showMenu={true}
          needAdd={true}
        />
        <View className="userinfo">
          <Image className="u-img" src={user.avatar_url} />
          <br />
          <Text className="u-name">{user.loginname}</Text>
          <View className="u-bottom">
            <Text className="u-time">
              {getLastTimeStr(user.create_at, false)}
            </Text>
            <Text className="u-score">
              积分：
              {user.score}
            </Text>
          </View>
        </View>
        <View className="topics">
          <View className="user-tabs">
            <View
              className={classNames({
                item: 1,
                br: 1,
                selected: selectItem === 1
              })}
              onClick={e => {
                this.changeItem(1);
              }}
            >
              最近回复
            </View>
            <View
              className={classNames({ item: 1, selected: selectItem === 2 })}
              onClick={e => {
                this.changeItem(2);
              }}
            >
              最新发布
            </View>
          </View>
          {currentData.map(item => {
            return (
              <View className="message">
                <View className="user">
                  <Link
                    className="head"
                    to={{
                      url: "/page/user/index",
                      params: { loginname: item.author.loginname }
                    }}
                  >
                    <Image class="head" src={item.author.avatar_url} />
                  </Link>
                  <Link
                    className="info"
                    to={{ url: "/page/topic/index", params: { id: item.id } }}
                  >
                    <View className="t-title">{item.title}</View>
                    <Text className="cl mt12">
                      <Text className="name">{item.author.loginname}</Text>
                    </Text>
                    <Text className="cr mt12">
                      <Text className="name">
                        {getLastTimeStr(item.last_reply_at, true)}
                      </Text>
                    </Text>
                  </Link>
                </View>
              </View>
            );
          })}
          {currentData.length === 0 ? (
            <View className="no-data">
              <Text className="iconfont icon-empty">&#xe60a;</Text>
              暂无数据!
            </View>
          ) : (
            ""
          )}
        </View>
      </View>
    );
  }
}



export default User as ComponentClass<PageOwnProps, PageState>
