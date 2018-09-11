import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import * as utils from '../../libs/utils';

type IProps = {
  props: {
    to: {
      url: string,
      params: object
    }
    className: string,
    children: any
  }
}
type PageState = {

}

class Link extends Component<IProps, PageState> {
  static defaultProps = {
    to: {
      url: "",
      params: ""
    }
  };

  goTo = ({ url, params }) => {
    Taro.navigateTo({
      url: url + (params ? "?" + utils.param(params) : "")
    });
    return false;
  };
  render() {
    const props = this.props;
    const cprops = {
      ...props, style: {
        cursor: 'pointer'
      }};
    delete cprops.to;
    return <View className={cprops.className} style={cprops.style} onClick={this.goTo.bind(this, props.to)}>
        {this.props.children}
      </View>;
  }
}

export default Link;
