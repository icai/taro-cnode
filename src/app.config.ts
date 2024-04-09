export default defineAppConfig({
  pages: [

    "pages/index/index",
    "pages/about/index",
    "pages/add/index",
    "pages/message/index",
    "pages/login/index",
    "pages/topic/index",
    "pages/user/index",
  ],
  // tabBar: {
  //   color: "#999",
  //   selectedColor: "#5CC59F",
  //   backgroundColor: "#fff",
  //   // borderStyle: "black",
  //   list: [
  //     {
  //       pagePath: "pages/index/index",
  //       text: "首页",
  //       iconPath: "./assets/images/icons/home.png",
  //       selectedIconPath: "./assets/images/icons/home_active.png"
  //     },
  //     {
  //       pagePath: "pages/add/index",
  //       text: "发布",
  //       iconPath: "./assets/images/icons/add.png",
  //       selectedIconPath: "./assets/images/icons/add_active.png"
  //     },
  //     {
  //       pagePath: "pages/message/index",
  //       text: "消息",
  //       iconPath: "./assets/images/icons/message.png",
  //       selectedIconPath: "./assets/images/icons/message_active.png"
  //     },
  //     {
  //       pagePath: "pages/user/index",
  //       text: "我的",
  //       iconPath: "./assets/images/icons/user.png",
  //       selectedIconPath: "./assets/images/icons/user_active.png"
  //     }
  //   ]
  // },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
})
