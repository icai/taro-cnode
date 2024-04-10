import React, { useState } from 'react';
import { showToast, redirectTo } from '@tarojs/taro';
import { View } from '@tarojs/components'
import { Button, Input } from '@nutui/nutui-react-taro';
import { Scan, Tips } from '@nutui/icons-react-taro'
import { useDispatch } from 'react-redux';
import { auth } from '@/reducers/auth';
import './index.scss';
import Page from '@/components/page';
import Taro from '@tarojs/taro';

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const [token, setToken] = useState('');

  const showMessage = message => {
    showToast({ title: message });
  };

  const logon = () => {
    if (token === '') {
      showMessage('令牌格式错误,应为36位UUID字符串');
      return false;
    }
    auth(token)(dispatch)
    redirectTo({ url: '/pages/index/index' });
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

  return (
    <Page className="login-page" title={'登录'}>
      <View className="page-body">
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
            {process.env.TARO_ENV !== 'h5' && <View
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
