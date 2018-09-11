import { View } from "@tarojs/components";
import { Component } from "@tarojs/taro";
import { AtActivityIndicator } from "taro-ui";
import "./index.scss";

export default class Loading extends Component<{
  height: string
}> {
  render() {
    const { height = "8rem" } = this.props;
    return (
      <View className="loading2" style={{ minHeight: height, height }}>
        <AtActivityIndicator color="#9d8352" />
      </View>
    );
  }
}
