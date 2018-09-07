import Taro, { Component, Config } from "@tarojs/taro";

function withUser(WrappedComponent) {
  return class WithUserHOC extends WrappedComponent {
    render() {
      const props = this.props;
      if (props.userInfo && props.userInfo.userId) {
        return super.render();
      } else {
        Taro.navigateTo({ url: "/pages/login/index" });
        return null;
      }
    }
  };
}


export { Component, withUser };


