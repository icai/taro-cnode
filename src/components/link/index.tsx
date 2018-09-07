import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import * as utils from '../../libs/utils';

type IProps = {
  props: {
    to: {
      url: string,
      params: object
    }
  }
}
type PageState = {

}

class Link extends Component<IProps, PageState> {
  defaultProps = {
    to: {
      url: "",
      params: ""
    }
  };

  goTo = ({ url, params }) => {
    Taro.navigateTo({
      url: url + "?" + utils.param(params)
    });
    return false;
  };
  render() {
    const props = this.props;
    return (
      <View
        onClick={e => {
          this.goTo(props.to);
        }}
      >
        {this.props.children}
      </View>
    );
  }
}

export default Link;
