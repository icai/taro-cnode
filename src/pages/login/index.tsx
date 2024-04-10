import React, { useState } from 'react';
import { showToast, redirectTo } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { Button, Input } from '@nutui/nutui-react-taro';
import { Scan, Tips } from '@nutui/icons-react-taro'
import { useDispatch } from 'react-redux';
import { auth } from '@/reducers/auth';
import { Comment } from '@nutui/icons-react-taro'
import './index.scss';
import Page from '@/components/page';
import Taro from '@tarojs/taro';
import { isH5 } from '@/libs/utils';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const showMessage = message => {
    showToast({ title: message });
  };

  const logon = () => {
    if (token === '') {
      showMessage('请输入令牌');
      return false;
    }
    auth(token)(dispatch).then((res: any) => {
      if (res.type === 'auth/authSuccess') {
        redirectTo({ url: '/pages/index/index' });
      } else {
        showMessage(res.payload.data?.error_msg || '登录失败');
      }
    });
  };

  const handleChange = (val: string) => {
    setToken(val);
  };

  const handleScan = () => {
    Taro.scanCode({
      success: res => {
        setToken(res.result);
      }
    });
  }
  const copyUrl = () => {
    Taro.setClipboardData({
      data: 'https://cnodejs.org/setting',
      success: function () {
        showMessage('复制成功');
      }
    });
  }

  return (
    <Page className="login-page" title={'登录'}>
      <View className="page-body">

        <View className="header">
          <Comment size={80} color='#55B83B' />
          <View className='content' onClick={copyUrl}>打开 https://cnodejs.org/setting 获取 token</View>
        </View>

        <View className="label">
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              // background: '#fff',
              padding: '0 10px',
            }}
          >
            <Tips />
            <Input
              placeholder="Access Token"
              style={{ '--nutui-input-padding': '10px' }}
              value={token}
              onChange={handleChange} maxLength={36}
            />
            {!isH5() && <View
              className="right"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Button size="small" onClick={handleScan} icon={<Scan />} >
                扫一扫
              </Button>
            </View>}
          </View>
        </View>
        <View className="label">
          <Button className="button" shape="round" size="xlarge" type="success" block onClick={logon} >
            登录
          </Button>
        </View>
      </View>
    </Page>
  );
};

export default Login;
