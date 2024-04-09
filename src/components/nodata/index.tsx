import { Jimi } from "@nutui/icons-react-taro";
import { View } from "@tarojs/components";
import './index.scss';

const NoData = (props) => {
  return (
    <View className="no-data">
      <Jimi size={100} />
      <View className="txt">{props.children || '暂无数据!'}</View>
    </View>
  );
}


export default NoData;
