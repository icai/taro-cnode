import { useEffect } from 'react';
import { View, Image, Text } from '@tarojs/components';
import { useSelector, useDispatch } from 'react-redux';
import Link from '@/components/link';
import { authCheckState } from '@/reducers/auth';
import './index.scss';
import { Login } from '@nutui/icons-react-taro';

const UserInfo = () => {
  const userInfo = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authCheckState());
  }, [dispatch]);

  return (
    <View className="user-info">
      {!userInfo.loginname ? (
        <Link className="login-no" to={{ url: '/pages/login/index' }}>
          <View className="login">
            <Login color='#F29291' size={24} style={{ marginRight: '10px'}} /><View>登录</View>
          </View>
        </Link>
      ) : (
        <Link className="login-yes" to={{ url: '/pages/user/index', params: { loginname: userInfo.loginname } }}>
          <View className="avertar">{userInfo.avatar_url ? <Image className="avertar" src={userInfo.avatar_url} /> : ''}</View>
          <View className="info">{userInfo.loginname ? <Text>{userInfo.loginname}</Text> : ''}</View>
        </Link>
      )}
    </View>
  );
};

export default UserInfo;
