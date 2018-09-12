import { View } from "@tarojs/components";
import Taro, { Component, Config } from "@tarojs/taro";
import * as utils from '../../libs/utils';

type IProps = {
  props: {
    to: {
      url: string;
      params?: object;
    };
    className?: string;
    klassName?: string;
  };
};
type PageState = {

}

class ALink extends Component<IProps, PageState> {
  static defaultProps = {
    to: {
      url: "",
      params: ""
    },
    className: "",
    klassName: ""
  };

  static externalClasses = ["link-class"];

  // static options = {
  //   addGlobalClass: true
  // };

  goTo = ({ url, params }) => {
    Taro.navigateTo({
      url: url + (params ? "?" + utils.param(params) : "")
    });
    return false;
  };
  render() {
    const props = this.props;
    const cprops = {
      ...props,
      style: {
        cursor: "pointer"
      }
    };
    delete cprops.to;
    const className = cprops.className;
    return (
      <View
        className=" link-class"
        style={cprops.style}
        onClick={this.goTo.bind(this, props.to)}
      >
        {this.props.children}
      </View>
    );
  }
}

export default ALink;
