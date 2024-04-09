
import React from 'react';
import { View } from "@tarojs/components";
import { Loading, ConfigProvider } from '@nutui/nutui-react-taro';
import "./index.scss";

const LoadingX: React.FC<any> = ({ height = "8rem" }) => {
  return (
    <View className="loading" style={{ minHeight: height, height }}>
      <ConfigProvider theme={{ nutuiLoadingIconColor: '#9d8352',nutuiLoadingIconSize: '40px' }}>
        <Loading type="circular" />
      </ConfigProvider>
    </View>
  );
}

export default LoadingX;

