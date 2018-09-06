import Taro, { Component, Config } from "@tarojs/taro";

function withUser(WrappedComponent) {
  return class WithUserHOC extends WrappedComponent {
    render() {
      console.info(this.props);
      const props = this.props;
      if (props.userInfo) {
        return super.render();
      } else {
        Taro.navigateTo({
          url: "/pages/login/index",
        });
        return null;
      }
    }
  };
}


export { Component, withUser };


