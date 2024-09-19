import { View } from '@tarojs/components';
import * as utils from '@/libs/utils';
import React from 'react';

interface IProps {
  to: {
    url: string;
    params?: object;
  };
  className?: string;
  children: React.ReactNode;
}


const urlParse = (url: string, params?: object) => {
  const arr = url.split('?');
  const path = arr[0];
  const query = arr[1] || '';
  if (query === '') {
    return {
      path,
      params,
    };
  }
  const queryArr = query.split('&');
  const queryObj = {};
  queryArr.forEach((item) => {
    const itemArr = item.split('=');
    queryObj[itemArr[0]] = itemArr[1];
  });
  // merge params
  Object.assign(queryObj, params || {});
  return {
    path,
    params: queryObj,
  };
}

const Link: React.FC<IProps> = ({ to, className, children }) => {
  const goTo = () => {
    const { path, params } = urlParse(to.url, to.params);
    utils.navigateTo({
      url: path,
      params,
    });
  };

  return (
    <View className={className} style={{ cursor: 'pointer' }} onClick={goTo}>
      {children}
    </View>
  );
};


export default Link;
