(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"114":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0},i=_interopRequireDefault(n(1)),u=n(128),l=n(3),c=_interopRequireDefault(l),s=n(120),f=_interopRequireDefault(n(131)),p=n(142),d=_interopRequireWildcard(n(7)),h=_interopRequireDefault(n(121)),m=n(19),_=n(17),y=_interopRequireWildcard(n(18));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(440);var b=function(e){function Add(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Add);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Add.__proto__||Object.getPrototypeOf(Add)).apply(this,arguments));return e.config={"navigationBarTitleText":"主题"},e.state={"topic":{"tab":"share","title":"","content":""},"selectorIndex":0,"selector":[{"name":"分享","value":"share"},{"name":"问答","value":"ask"},{"name":"招聘","value":"job"}],"err":"","authorTxt":"\n\n 来自拉风的 [Taro-cnode](https://github.com/icai/taro-cnode)"},e.handleTopicTabChange=function(t){e.setState(function(e){return{"topic":r({},e.topic,{"tab":e.selector[t.detail.value].value}),"selectorIndex":t.detail.value}})},e.handleTopicContentChange=function(t){e.setState(function(e){return{"topic":r({},e.topic,{"content":t.target.value})}})},e.handleTopicChange=function(t){e.setState(function(e){return{"topic":r({},e.topic,{"title":t})}})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Add,c.default.Component),o(Add,[{"key":"addTopic","value":function addTopic(){var e=d.trim(this.state.topic.title),t=d.trim(this.state.topic.content);if(!e||e.length<10)return this.setState({"err":"title"}),!1;if(!t)return this.setState({"err":"content"}),!1;var n=r({},this.state.topic,{"content":this.state.topic.content+this.state.authorTxt,"accesstoken":this.props.userInfo.token});(0,m.post)({"data":n,"url":"https://cnodejs.org/api/v1/topics"}).then(function(e){var t=e.data;t.success?c.default.navigateTo({"url":"/pages/list/index"}):(0,l.showToast)({"title":t.error_msg})}).catch(function(e){console.info(e)})}},{"key":"render","value":function render(){var e=this.state,t=e.err,n=e.selectorIndex;return i.default.createElement(s.View,{"className":"flex-wrp"},i.default.createElement(f.default,{"pageType":"主题","fixHead":!0,"showMenu":!0}),i.default.createElement(s.View,{"className":"add-container"},i.default.createElement(s.View,{"className":"line"},"选择分类：",i.default.createElement(s.Picker,{"className":"add-tab","mode":"selector","value":n,"range":this.state.selector,"rangeKey":"name","onChange":this.handleTopicTabChange},i.default.createElement(s.View,{"className":"picker"},this.state.selector[n].name)),i.default.createElement(s.View,{"className":"add-btn","onClick":this.addTopic.bind(this)},"发布")),i.default.createElement(s.View,{"className":"line"},i.default.createElement(p.AtInput,{"className":(0,h.default)({"add-title":1,"err":"title"==t}),"value":this.state.topic.title,"onChange":this.handleTopicChange,"type":"text","placeholder":"标题，字数10字以上","max-length":"100"})),i.default.createElement(p.AtTextarea,{"className":(0,h.default)({"add-content":1,"err":"content"==t}),"value":this.state.topic.content,"onChange":this.handleTopicContentChange,"maxlength":9999,"height":"400","placeholder":"回复支持Markdown语法,请注意标记代码"})))}},{"key":"componentDidMount","value":function componentDidMount(){a(Add.prototype.__proto__||Object.getPrototypeOf(Add.prototype),"componentDidMount",this)&&a(Add.prototype.__proto__||Object.getPrototypeOf(Add.prototype),"componentDidMount",this).call(this)}},{"key":"componentDidShow","value":function componentDidShow(){a(Add.prototype.__proto__||Object.getPrototypeOf(Add.prototype),"componentDidShow",this)&&a(Add.prototype.__proto__||Object.getPrototypeOf(Add.prototype),"componentDidShow",this).call(this)}},{"key":"componentDidHide","value":function componentDidHide(){a(Add.prototype.__proto__||Object.getPrototypeOf(Add.prototype),"componentDidHide",this)&&a(Add.prototype.__proto__||Object.getPrototypeOf(Add.prototype),"componentDidHide",this).call(this)}}]),Add}();b=(0,u.__decorate)([(0,_.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authLogin":function authLogin(){return e(y.auth.apply(y,arguments))},"authCheckState":function authCheckState(){return e(y.authCheckState())}}})],b),t.default=b},"124":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),i=n(120),u=_interopRequireDefault(n(3)),l=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(7));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function Link(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Link);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));return e.goTo=function(e){var t=e.url,n=e.params;return u.default.navigateTo({"url":t+(n?"?"+l.param(n):"")}),!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Link,u.default.Component),o(Link,[{"key":"render","value":function render(){var e=this.props,t=r({},e,{"style":{"cursor":"pointer"}});return delete t.to,a.default.createElement(i.View,{"className":t.className,"style":t.style,"onClick":this.goTo.bind(this,e.to)},this.props.children)}}]),Link}();c.defaultProps={"to":{"url":"","params":{}}},t.default=c},"131":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(3)),i=_interopRequireDefault(n(121)),u=n(120),l=_interopRequireDefault(n(132)),c=_interopRequireDefault(n(124));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(140);var s=function(e){function Header(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));return e.openMenu=function(){e.setState({"show":!e.state.show})},e.showMenus=function(){e.setState({"show":!e.state.show})},e.state={"nickname":"","profileimgurl":"","show":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,a.default.Component),r(Header,[{"key":"render","value":function render(){var e=this.state,t=e.show,n=e.nickname,r=e.profileimgurl,a=this.props,s=a.needAdd,f=a.pageType,p=a.fixHead,d=a.messageCount,h=(0,i.default)({"show":t&&p,"fix-header":p,"no-fix":!p});return o.default.createElement(u.View,{"className":"header"},t&&p?o.default.createElement(u.View,null,o.default.createElement(u.View,{"className":"page-cover","onClick":this.showMenus})):"",o.default.createElement(u.View,{"className":h,"id":"hd"},o.default.createElement(u.View,{"className":"nv-toolbar"},p?o.default.createElement(u.View,{"className":"toolbar-nav","onClick":this.openMenu}):"",o.default.createElement(u.Text,null,f),d>0?o.default.createElement(u.Text,{"className":"num"},d):"",s&&!d||d<=0?o.default.createElement(c.default,{"className":"iconfont add-icon","to":{"url":"/pages/add/index"}},""):"")),o.default.createElement(l.default,{"showMenu":t,"pageType":f,"nickName":n,"profileUrl":r}))}}]),Header}();s.defaultProps={"messageCount":0,"scrollTop":0},t.default=s},"132":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=_interopRequireDefault(n(3)),i=n(120),u=_interopRequireDefault(n(133)),l=_interopRequireDefault(n(121)),c=_interopRequireDefault(n(136)),s=_interopRequireDefault(n(124));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(138);var f=function(e){function NvMenu(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NvMenu),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NvMenu.__proto__||Object.getPrototypeOf(NvMenu)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NvMenu,a.default.Component),r(NvMenu,[{"key":"render","value":function render(){var e=this.props.showMenu,t=(0,l.default)({"nav-list":!0,"show":e});return o.default.createElement(i.View,{"id":"sideBar","className":t},o.default.createElement(c.default,{"mask":!1,"show":e},o.default.createElement(u.default,null),o.default.createElement(i.View,{"className":"list-ul"},o.default.createElement(s.default,{"className":"icon-quanbu iconfont item","to":{"url":"/pages/list/index?tab=all"}},"全部"),o.default.createElement(s.default,{"className":"icon-hao iconfont item","to":{"url":"/pages/list/index?tab=good"}},"精华"),o.default.createElement(s.default,{"className":"icon-fenxiang iconfont item","to":{"url":"/pages/list/index?tab=share"}},"分享"),o.default.createElement(s.default,{"className":"icon-wenda iconfont item","to":{"url":"/pages/list/index?tab=ask"}},"问答"),o.default.createElement(s.default,{"className":"icon-zhaopin iconfont item","to":{"url":"/pages/list/index?tab=job"}},"招聘"),o.default.createElement(s.default,{"className":"icon-xiaoxi iconfont item line","to":{"url":"/pages/message/index"}},"消息"),o.default.createElement(s.default,{"className":"icon-about iconfont item","to":{"url":"/pages/about/index"}},"关于"))))}}]),NvMenu}();t.default=f},"133":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=n(128),i=_interopRequireDefault(n(3)),u=n(120),l=_interopRequireDefault(n(124)),c=n(17),s=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(18));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(134);var f=function(e){function UserInfo(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfo),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfo,i.default.Component),r(UserInfo,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillMount","value":function componentWillMount(){this.props.authCheckState()}},{"key":"render","value":function render(){var e=this.props.userInfo;return o.default.createElement(u.View,{"className":"user-info"},e.loginname?o.default.createElement(l.default,{"className":"login-yes","to":{"url":"/pages/user/index","params":{"loginname":e.loginname}}},o.default.createElement(u.View,{"className":"avertar"},e.avatar_url?o.default.createElement(u.Image,{"class":"avertar","src":e.avatar_url}):""),o.default.createElement(u.View,{"className":"info"},e.loginname?o.default.createElement(u.Text,null,e.loginname):"")):o.default.createElement(l.default,{"className":"login-no","to":{"url":"/pages/login/index"}},o.default.createElement(u.View,{"className":"login"},o.default.createElement(u.View,null,"登录"))))}}]),UserInfo}();f=(0,a.__decorate)([(0,c.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(s.authCheckState())}}})],f),t.default=f},"134":function(e,t,n){},"136":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),a=(_interopRequireDefault(n(3)),n(120)),i=n(142);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function Drawer(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments));return e.state={"animShow":!1,"show":e.props.show},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,i.AtDrawer),r(Drawer,[{"key":"onHide","value":function onHide(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"animHide","value":function animHide(){var e=this,t=arguments;this.setState({"animShow":!1}),this.props.onStartHide&&this.props.onStartHide(),setTimeout(function(){e.onHide.apply(e,t)},300)}},{"key":"animShow","value":function animShow(){var e=this;this.setState({"show":!0}),setTimeout(function(){e.setState({"animShow":!0})},200)}},{"key":"onMaskClick","value":function onMaskClick(){this.animHide.apply(this,arguments)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.show;t!==this.props.show&&(t?this.animShow():this.animHide.apply(this,arguments))}},{"key":"render","value":function render(){var e=this.props,t=e.mask,n=(e.width,e.right),r=this.state,i=r.animShow,u=r.show,l=["at-drawer"],c={"display":t?"block":"none","opacity":i?1:0};return n?l.push("at-drawer--right"):l.push("at-drawer--left"),i&&l.push("at-drawer--show"),l=l.filter(function(e){return""!==e}),u&&o.default.createElement(a.View,{"className":l},o.default.createElement(a.View,{"className":"at-drawer__mask","style":c,"onClick":this.onMaskClick.bind(this)}),o.default.createElement(a.View,{"className":"at-drawer__content","style":{}},this.props.children))}}]),Drawer}();t.default=u},"138":function(e,t,n){},"140":function(e,t,n){},"440":function(e,t,n){}}]);