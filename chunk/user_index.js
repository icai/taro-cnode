(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"119":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0},i=_interopRequireDefault(n(1)),u=n(128),l=n(3),s=_interopRequireDefault(l),c=n(120),f=n(17),p=_interopRequireDefault(n(131)),d=_interopRequireDefault(n(124)),m=_interopRequireDefault(n(121)),h=_interopRequireWildcard(n(18)),_=_interopRequireWildcard(n(7)),y=n(19);function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(465);var b=function(e){function User(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,User);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(User.__proto__||Object.getPrototypeOf(User)).apply(this,arguments));return e.config={"navigationBarTitleText":"用户信息"},e.state={"currentData":[],"user":{"avatar_url":""},"showMenu":!1,"selectItem":1},e.changeItem=function(t){var n=1===t?e.state.user.recent_replies:e.state.user.recent_topics;e.setState(function(e){return r({},e,{"selectItem":t,"currentData":n})})},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(User,s.default.Component),a(User,[{"key":"componentDidMount","value":function componentDidMount(){this.getUser()}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"getUser","value":function getUser(){var e=this,t=this.$router.params.loginname;if(!t)return(0,l.showToast)({"title":"缺少用户名参数"}),s.default.navigateTo({"url":"/pages/list/index"}),!1;(0,y.get)({"url":"https://cnodejs.org/api/v1/user/"+t}).then(function(t){var n=t.data;if(n&&n.data){var r=n.data;e.setState({"user":r}),r.recent_replies.length>0?e.setState({"currentData":r.recent_replies}):e.setState({"currentData":r.recent_topics,"selectItem":2})}})}},{"key":"render","value":function render(){var e=this.state,t=e.selectItem,n=e.user,r=e.currentData,a=function getLastTimeStr(e,t){return _.getLastTimeStr(e,t)};return i.default.createElement(c.View,{"className":"flex-wrp"},i.default.createElement(p.default,{"pageType":"用户信息","fixHead":!0,"showMenu":!0,"needAdd":!0}),i.default.createElement(c.View,{"className":"userinfo"},i.default.createElement(c.Image,{"className":"u-img","src":n.avatar_url}),i.default.createElement("br",null),i.default.createElement(c.Text,{"className":"u-name"},n.loginname),i.default.createElement(c.View,{"className":"u-bottom"},i.default.createElement(c.Text,{"className":"u-time"},a(n.create_at,!1)),i.default.createElement(c.Text,{"className":"u-score"},"积分：",n.score))),i.default.createElement(c.View,{"className":"topics"},i.default.createElement(c.View,{"className":"user-tabs"},i.default.createElement(c.View,{"className":(0,m.default)({"item":1,"br":1,"selected":1===t}),"onClick":this.changeItem.bind(this,1)},"最近回复"),i.default.createElement(c.View,{"className":(0,m.default)({"item":1,"selected":2===t}),"onClick":this.changeItem.bind(this,2)},"最新发布")),r.map(function(e){return i.default.createElement(c.View,{"className":"message"},i.default.createElement(c.View,{"className":"user"},i.default.createElement(d.default,{"className":"head","to":{"url":"/pages/user/index","params":{"loginname":e.author.loginname}}},i.default.createElement(c.Image,{"class":"head","src":e.author.avatar_url})),i.default.createElement(d.default,{"className":"info","to":{"url":"/pages/topic/index","params":{"id":e.id}}},i.default.createElement(c.View,{"className":"t-title"},e.title),i.default.createElement(c.Text,{"className":"cl mt12"},i.default.createElement(c.Text,{"className":"name"},e.author.loginname)),i.default.createElement(c.Text,{"className":"cr mt12"},i.default.createElement(c.Text,{"className":"name"},a(e.last_reply_at,!0))))))}),0===r.length?i.default.createElement(c.View,{"className":"no-data"},i.default.createElement(c.Text,{"className":"iconfont icon-empty"},""),"暂无数据!"):""))}},{"key":"componentDidShow","value":function componentDidShow(){o(User.prototype.__proto__||Object.getPrototypeOf(User.prototype),"componentDidShow",this)&&o(User.prototype.__proto__||Object.getPrototypeOf(User.prototype),"componentDidShow",this).call(this)}}]),User}();b=(0,u.__decorate)([(0,f.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(h.authCheckState())}}})],b),t.default=b},"124":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireDefault(n(1)),i=n(120),u=_interopRequireDefault(n(3)),l=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(7));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var s=function(e){function Link(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Link);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));return e.goTo=function(e){var t=e.url,n=e.params;return u.default.navigateTo({"url":t+(n?"?"+l.param(n):"")}),!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Link,u.default.Component),a(Link,[{"key":"render","value":function render(){var e=this.props,t=r({},e,{"style":{"cursor":"pointer"}});return delete t.to,o.default.createElement(i.View,{"className":t.className,"style":t.style,"onClick":this.goTo.bind(this,e.to)},this.props.children)}}]),Link}();s.defaultProps={"to":{"url":"","params":{}}},t.default=s},"131":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(3)),i=_interopRequireDefault(n(121)),u=n(120),l=_interopRequireDefault(n(132)),s=_interopRequireDefault(n(124));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(140);var c=function(e){function Header(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));return e.openMenu=function(){e.setState({"show":!e.state.show})},e.showMenus=function(){e.setState({"show":!e.state.show})},e.state={"nickname":"","profileimgurl":"","show":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,o.default.Component),r(Header,[{"key":"render","value":function render(){var e=this.state,t=e.show,n=e.nickname,r=e.profileimgurl,o=this.props,c=o.needAdd,f=o.pageType,p=o.fixHead,d=o.messageCount,m=(0,i.default)({"show":t&&p,"fix-header":p,"no-fix":!p});return a.default.createElement(u.View,{"className":"header"},t&&p?a.default.createElement(u.View,null,a.default.createElement(u.View,{"className":"page-cover","onClick":this.showMenus})):"",a.default.createElement(u.View,{"className":m,"id":"hd"},a.default.createElement(u.View,{"className":"nv-toolbar"},p?a.default.createElement(u.View,{"className":"toolbar-nav","onClick":this.openMenu}):"",a.default.createElement(u.Text,null,f),d>0?a.default.createElement(u.Text,{"className":"num"},d):"",c&&!d||d<=0?a.default.createElement(s.default,{"className":"iconfont add-icon","to":{"url":"/pages/add/index"}},""):"")),a.default.createElement(l.default,{"showMenu":t,"pageType":f,"nickName":n,"profileUrl":r}))}}]),Header}();c.defaultProps={"messageCount":0,"scrollTop":0},t.default=c},"132":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=_interopRequireDefault(n(3)),i=n(120),u=_interopRequireDefault(n(133)),l=_interopRequireDefault(n(121)),s=_interopRequireDefault(n(136)),c=_interopRequireDefault(n(124));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(138);var f=function(e){function NvMenu(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NvMenu),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NvMenu.__proto__||Object.getPrototypeOf(NvMenu)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NvMenu,o.default.Component),r(NvMenu,[{"key":"render","value":function render(){var e=this.props.showMenu,t=(0,l.default)({"nav-list":!0,"show":e});return a.default.createElement(i.View,{"id":"sideBar","className":t},a.default.createElement(s.default,{"mask":!1,"show":e},a.default.createElement(u.default,null),a.default.createElement(i.View,{"className":"list-ul"},a.default.createElement(c.default,{"className":"icon-quanbu iconfont item","to":{"url":"/pages/list/index?tab=all"}},"全部"),a.default.createElement(c.default,{"className":"icon-hao iconfont item","to":{"url":"/pages/list/index?tab=good"}},"精华"),a.default.createElement(c.default,{"className":"icon-fenxiang iconfont item","to":{"url":"/pages/list/index?tab=share"}},"分享"),a.default.createElement(c.default,{"className":"icon-wenda iconfont item","to":{"url":"/pages/list/index?tab=ask"}},"问答"),a.default.createElement(c.default,{"className":"icon-zhaopin iconfont item","to":{"url":"/pages/list/index?tab=job"}},"招聘"),a.default.createElement(c.default,{"className":"icon-xiaoxi iconfont item line","to":{"url":"/pages/message/index"}},"消息"),a.default.createElement(c.default,{"className":"icon-about iconfont item","to":{"url":"/pages/about/index"}},"关于"))))}}]),NvMenu}();t.default=f},"133":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=n(128),i=_interopRequireDefault(n(3)),u=n(120),l=_interopRequireDefault(n(124)),s=n(17),c=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(18));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(134);var f=function(e){function UserInfo(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfo),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfo,i.default.Component),r(UserInfo,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillMount","value":function componentWillMount(){this.props.authCheckState()}},{"key":"render","value":function render(){var e=this.props.userInfo;return a.default.createElement(u.View,{"className":"user-info"},e.loginname?a.default.createElement(l.default,{"className":"login-yes","to":{"url":"/pages/user/index","params":{"loginname":e.loginname}}},a.default.createElement(u.View,{"className":"avertar"},e.avatar_url?a.default.createElement(u.Image,{"class":"avertar","src":e.avatar_url}):""),a.default.createElement(u.View,{"className":"info"},e.loginname?a.default.createElement(u.Text,null,e.loginname):"")):a.default.createElement(l.default,{"className":"login-no","to":{"url":"/pages/login/index"}},a.default.createElement(u.View,{"className":"login"},a.default.createElement(u.View,null,"登录"))))}}]),UserInfo}();f=(0,o.__decorate)([(0,s.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(c.authCheckState())}}})],f),t.default=f},"134":function(e,t,n){},"136":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireDefault(n(1)),o=(_interopRequireDefault(n(3)),n(120)),i=n(142);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function Drawer(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments));return e.state={"animShow":!1,"show":e.props.show},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,i.AtDrawer),r(Drawer,[{"key":"onHide","value":function onHide(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"animHide","value":function animHide(){var e=this,t=arguments;this.setState({"animShow":!1}),this.props.onStartHide&&this.props.onStartHide(),setTimeout(function(){e.onHide.apply(e,t)},300)}},{"key":"animShow","value":function animShow(){var e=this;this.setState({"show":!0}),setTimeout(function(){e.setState({"animShow":!0})},200)}},{"key":"onMaskClick","value":function onMaskClick(){this.animHide.apply(this,arguments)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.show;t!==this.props.show&&(t?this.animShow():this.animHide.apply(this,arguments))}},{"key":"render","value":function render(){var e=this.props,t=e.mask,n=(e.width,e.right),r=this.state,i=r.animShow,u=r.show,l=["at-drawer"],s={"display":t?"block":"none","opacity":i?1:0};return n?l.push("at-drawer--right"):l.push("at-drawer--left"),i&&l.push("at-drawer--show"),l=l.filter(function(e){return""!==e}),u&&a.default.createElement(o.View,{"className":l},a.default.createElement(o.View,{"className":"at-drawer__mask","style":s,"onClick":this.onMaskClick.bind(this)}),a.default.createElement(o.View,{"className":"at-drawer__content","style":{}},this.props.children))}}]),Drawer}();t.default=u},"138":function(e,t,n){},"140":function(e,t,n){},"465":function(e,t,n){}}]);