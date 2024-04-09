import Tabbar from '@/components/tabbar';
import Header from '@/components/header';
import { View } from '@tarojs/components';

import './index.scss';

const Page = (props) => {
  const title = props.title || '';
  return (
    <View className='page-wrap'>
      <Header pageType={title} />
      <View className='page-content'>
        {props.children}
      </View>
      <Tabbar />
    </View>
  );
}

export default Page;
