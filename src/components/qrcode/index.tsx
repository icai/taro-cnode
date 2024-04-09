import { View } from '@tarojs/components';
import { QRCodeSVG } from 'qrcode.react';

import './index.scss';

const QRCode = ({ url }) => {
  return (
    <View className="m-qrcode-container">
      <View className="m-qrcode-txt">支付宝</View>
      <View className="m-qrcode-image" id="m-qrcode">
        <QRCodeSVG value={url} size={158} />
      </View>
      <View className="m-qrcode-txt">“扫一扫”浏览</View>
    </View>
  );
}

export default QRCode;
