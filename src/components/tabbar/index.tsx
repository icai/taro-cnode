import { Tabbar } from '@nutui/nutui-react-taro';
import { Home, Message, AddRectangle, User } from '@nutui/icons-react-taro';
import Taro, { useRouter } from '@tarojs/taro';
import { useEffect, useState } from 'react';
import { isH5, navigateTo } from '@/libs/utils';
const BottomTabbar = () => {
  const tabBar = {
    color: "#999",
    selectedColor: "#5CC59F",
    backgroundColor: "#fff",
    // borderStyle: "black",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        icon: () => (<Home />)
      },
      {
        pagePath: "pages/add/index",
        text: "发布",
        icon: () => (<AddRectangle />)
      },
      {
        pagePath: "pages/message/index",
        text: "消息",
        icon: () => (<Message />)
      },
      {
        pagePath: "pages/user/index",
        text: "我的",
        icon: () => (<User />)
      }
    ]
  };
  const [value, setValue] = useState(0);
  const router = useRouter(true);
  useEffect(() => {
    setValue(tabBar.list.findIndex(item => router.path.includes(item.pagePath)));
  }, [router.path]);


  let tabbarStyle = {}
  let option = {}
  // if h5 environment
  if (isH5()) {
    tabbarStyle = {
      position: 'absolute',
      bottom: 0,
      width: '100%'
    }
  } else {
    option = {
      fixed: true,
      safeAreaInsetBottom: true
    }
  }
  return (
    <Tabbar
      style={tabbarStyle}
      {...option}
      value={value}
      inactiveColor="#999" activeColor="#5CC59F"
      onSwitch={(value) => {
        navigateTo({
          url: `/${tabBar.list[value].pagePath}`
        })
      }}
    >
      {tabBar.list.map((item, index) => {
        const Icon = item.icon
        return (
          <Tabbar.Item key={index} title={item.text} icon={<Icon />} />
        )
      })}
    </Tabbar>
  )
}

export default BottomTabbar;

