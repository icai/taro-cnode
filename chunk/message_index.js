(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"144":function(e,t,n){},"43":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),i=_interopRequireDefault(n(0)),u=n(71),l=n(48),s=_interopRequireDefault(n(52)),c=_interopRequireDefault(n(66)),f=_interopRequireDefault(n(49)),p=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5)),d=n(9);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(144);var h=function(e){function Message(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Message);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Message.__proto__||Object.getPrototypeOf(Message)).apply(this,arguments));return e.config={"navigationBarTitleText":"消息"},e.changeItem=function(t){var n=1===t?e.state.message.hasnot_read_messages:e.state.message.has_read_messages;e.setState(function(e){return r({},e,{"selectItem":t,"currentData":n,"noData":0===n.length})})},e.markall=function(){var t=e.props.userInfo;(0,d.post)({"url":"https://cnodejs.org/api/v1/message/mark_all","data":{"accesstoken":t.token}}).then(function(e){var t=e.data;t&&t.success&&window.location.reload()})},e.state={"showMenu":!1,"selectItem":2,"message":{"hasnot_read_messages":[],"has_read_messages":[]},"noData":!1,"currentData":[],"no_read_len":0},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Message,o.Component),a(Message,[{"key":"componentDidShow","value":function componentDidShow(){var e=this,t=this.props.userInfo;(0,d.get)({"url":"https://cnodejs.org/api/v1/messages?accesstoken="+t.token}).then(function(t){var n=t.data,a={};n&&n.data?(a.message=n.data,a.no_read_len=n.data.hasnot_read_messages.length,n.data.hasnot_read_messages.length>0?a.currentData=n.data.hasnot_read_messages:(a.currentData=n.data.has_read_messages,a.selectItem=2),a.noData=0===a.currentData.length):a.noData=!0,e.setState(r({},a))})}},{"key":"render","value":function render(){var e=this.state,t=e.currentData,n=e.no_read_len,r=e.selectItem,a=e.noData;return i.default.createElement(l.View,{"className":"flex-wrp"},i.default.createElement(c.default,{"pageType":"消息","fixHead":!0,"showMenu":!0,"needAdd":!0,"messageCount":n}),i.default.createElement(l.View,{"id":"page","className":"page"},i.default.createElement(l.View,{"className":"tabs"},i.default.createElement(l.View,{"className":(0,f.default)({"item":1,"br":1,"selected":2===r}),"onClick":this.changeItem.bind(this,2)},"已读消息"),i.default.createElement(l.View,{"className":(0,f.default)({"item":1,"selected":1===r}),"onClick":this.changeItem.bind(this,1)},"未读消息",n>0?i.default.createElement(l.Text,{"className":"iconfont read","onClick":this.markall},""):"")),i.default.createElement(l.View,{"className":"tab-content"},t.map(function(e,t){return i.default.createElement(l.View,{"className":"message markdown-body"},i.default.createElement(l.View,{"className":"user"},i.default.createElement(l.Image,{"className":"head","src":e.author.avatar_url}),i.default.createElement(l.View,{"className":"info"},i.default.createElement(l.Text,{"className":"cl"},i.default.createElement(l.Text,{"className":"name"},e.author.loginname),"at"===e.type?i.default.createElement(l.Text,{"className":"name"},"在回复中@了您"):"","reply"===e.type?i.default.createElement(l.Text,{"className":"name"},"回复了您的话题"):""),i.default.createElement(l.Text,{"className":"cr"},i.default.createElement(l.Text,{"className":"name"},function getLastTimeStr(e,t){return p.getLastTimeStr(e,t)}(e.reply.create_at,!0))))),i.default.createElement(l.View,{"className":"reply_content","dangerouslySetInnerHTML":{"__html":e.reply.content}}),i.default.createElement(s.default,{"to":{"url":"/pages/topic/index","params":{"id":e.topic.id}}},i.default.createElement(l.View,{"className":"topic-title"},"话题：",e.topic.title)))}),a?i.default.createElement(l.View,{"className":"no-data"},i.default.createElement("i",{"className":"iconfont icon-empty"},""),"暂无数据!"):"")))}},{"key":"componentDidMount","value":function componentDidMount(){}}]),Message}();t.default=(0,u.withUser)(h)},"52":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),i=_interopRequireDefault(o),u=n(48),l=_interopRequireDefault(n(0)),s=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function Link(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Link);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));return e.goTo=function(e){var t=e.url,n=e.params;return i.default.navigateTo({"url":t+(n?"?"+s.param(n):"")}),!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Link,o.Component),a(Link,[{"key":"render","value":function render(){var e=this.props,t=r({},e,{"style":{"cursor":"pointer"}});return delete t.to,l.default.createElement(u.View,{"className":t.className,"style":t.style,"onClick":this.goTo.bind(this,e.to)},this.props.children)}}]),Link}();c.defaultProps={"to":{"url":"","params":""}},t.default=c},"57":function(e,t,n){},"59":function(e,t,n){},"61":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),o=n(48),i=n(70);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var u=function(e){function Drawer(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments));return e.state={"animShow":!1,"show":e.props.show},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,i.AtDrawer),r(Drawer,[{"key":"onHide","value":function onHide(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"animHide","value":function animHide(){var e=this,t=arguments;this.setState({"animShow":!1}),this.props.onStartHide&&this.props.onStartHide(),setTimeout(function(){e.onHide.apply(e,t)},300)}},{"key":"animShow","value":function animShow(){var e=this;this.setState({"show":!0}),setTimeout(function(){e.setState({"animShow":!0})},200)}},{"key":"onMaskClick","value":function onMaskClick(){this.animHide.apply(this,arguments)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.show;t!==this.props.show&&(t?this.animShow():this.animHide.apply(this,arguments))}},{"key":"render","value":function render(){var e=this.props,t=e.mask,n=(e.width,e.right),r=this.state,i=r.animShow,u=r.show,l=["at-drawer"],s={"display":t?"block":"none","opacity":i?1:0};return n?l.push("at-drawer--right"):l.push("at-drawer--left"),i&&l.push("at-drawer--show"),l=l.filter(function(e){return""!==e}),u&&a.default.createElement(o.View,{"className":l},a.default.createElement(o.View,{"className":"at-drawer__mask","style":s,"onClick":this.onMaskClick.bind(this)}),a.default.createElement(o.View,{"className":"at-drawer__content","style":{}},this.props.children))}}]),Drawer}();t.default=u},"63":function(e,t,n){},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=_interopRequireWildcard(n(54)),o=n(1),i=_interopRequireDefault(n(0)),u=n(48),l=_interopRequireDefault(n(52)),s=n(8),c=_interopRequireWildcard(n(7));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(63);var f=function(e){function UserInfo(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfo),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfo,o.Component),r(UserInfo,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillMount","value":function componentWillMount(){this.props.authCheckState()}},{"key":"render","value":function render(){var e=this.props.userInfo;return i.default.createElement(u.View,{"className":"user-info"},e.loginname?i.default.createElement(l.default,{"className":"login-yes","to":{"url":"/pages/user/index","params":{"loginname":e.loginname}}},i.default.createElement(u.View,{"className":"avertar"},e.avatar_url?i.default.createElement(u.Image,{"class":"avertar","src":e.avatar_url}):""),i.default.createElement(u.View,{"className":"info"},e.loginname?i.default.createElement(u.Text,null,e.loginname):"")):i.default.createElement(l.default,{"className":"login-no","to":{"url":"/pages/login/index"}},i.default.createElement(u.View,{"className":"login"},i.default.createElement(u.View,null,"登录"))))}}]),UserInfo}();f=a.__decorate([(0,s.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(c.authCheckState())}}})],f),t.default=f},"65":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),o=_interopRequireDefault(n(0)),i=n(48),u=_interopRequireDefault(n(64)),l=_interopRequireDefault(n(49)),s=_interopRequireDefault(n(61)),c=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(59);var f=function(e){function NvMenu(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NvMenu),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NvMenu.__proto__||Object.getPrototypeOf(NvMenu)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NvMenu,a.Component),r(NvMenu,[{"key":"render","value":function render(){var e=this.props.showMenu,t=(0,l.default)({"nav-list":!0,"show":e});return o.default.createElement(i.View,{"id":"sideBar","className":t},o.default.createElement(s.default,{"mask":!1,"show":e},o.default.createElement(u.default,null),o.default.createElement(i.View,{"className":"list-ul"},o.default.createElement(c.default,{"className":"icon-quanbu iconfont item","to":{"url":"/pages/list/index?tab=all"}},"全部"),o.default.createElement(c.default,{"className":"icon-hao iconfont item","to":{"url":"/pages/list/index?tab=good"}},"精华"),o.default.createElement(c.default,{"className":"icon-fenxiang iconfont item","to":{"url":"/pages/list/index?tab=share"}},"分享"),o.default.createElement(c.default,{"className":"icon-wenda iconfont item","to":{"url":"/pages/list/index?tab=ask"}},"问答"),o.default.createElement(c.default,{"className":"icon-zhaopin iconfont item","to":{"url":"/pages/list/index?tab=job"}},"招聘"),o.default.createElement(c.default,{"className":"icon-xiaoxi iconfont item line","to":{"url":"/pages/message/index"}},"消息"),o.default.createElement(c.default,{"className":"icon-about iconfont item","to":{"url":"/pages/about/index"}},"关于"))))}}]),NvMenu}();t.default=f},"66":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),o=_interopRequireDefault(n(0)),i=_interopRequireDefault(n(49)),u=n(48),l=_interopRequireDefault(n(65)),s=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(57);var c=function(e){function Header(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));return e.openMenu=function(){e.setState({"show":!e.state.show})},e.showMenus=function(){e.setState({"show":!e.state.show})},e.state={"nickname":"","profileimgurl":"","show":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,a.Component),r(Header,[{"key":"render","value":function render(){var e=this.state,t=e.show,n=e.nickname,r=e.profileimgurl,a=this.props,c=a.needAdd,f=a.pageType,p=a.fixHead,d=a.messageCount,h=(0,i.default)({"show":t&&p,"fix-header":p,"no-fix":!p});return o.default.createElement(u.View,{"className":"header"},t&&p?o.default.createElement(u.View,null,o.default.createElement(u.View,{"className":"page-cover","onClick":this.showMenus})):"",o.default.createElement(u.View,{"className":h,"id":"hd"},o.default.createElement(u.View,{"className":"nv-toolbar"},p?o.default.createElement(u.View,{"className":"toolbar-nav","onClick":this.openMenu}):"",o.default.createElement(u.Text,null,f),d>0?o.default.createElement(u.Text,{"className":"num"},d):"",c&&!d||d<=0?o.default.createElement(s.default,{"className":"iconfont add-icon","to":{"url":"/pages/add/index"}},""):"")),o.default.createElement(l.default,{"showMenu":t,"pageType":f,"nickName":n,"profileUrl":r}))}}]),Header}();c.defaultProps={"messageCount":0,"scrollTop":0},t.default=c},"71":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.withUser=t.Component=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,n)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(n):void 0},o=n(1),i=_interopRequireDefault(o),u=_interopRequireWildcard(n(54)),l=(_interopRequireDefault(n(0)),n(8)),s=_interopRequireWildcard(n(7));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.Component=o.Component,t.withUser=function withUser(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=function(n){function WithUserHOC(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WithUserHOC);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WithUserHOC.__proto__||Object.getPrototypeOf(WithUserHOC)).apply(this,arguments));return e.props.authCheckState(),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WithUserHOC,e),r(WithUserHOC,[{"key":"isSuperRender","value":function isSuperRender(){var e=this.props;return t||e.userInfo&&e.userInfo.userId}},{"key":"perform","value":function perform(){this.isSuperRender()||i.default.redirectTo({"url":"/pages/login/index"})}},{"key":"componentWillMount","value":function componentWillMount(){this.perform()}},{"key":"render","value":function render(){return this.isSuperRender()?a(WithUserHOC.prototype.__proto__||Object.getPrototypeOf(WithUserHOC.prototype),"render",this).call(this):null}}]),WithUserHOC}();return n=u.__decorate([(0,l.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authLogin":function authLogin(){return e(s.auth.apply(s,arguments))},"authCheckState":function authCheckState(){return e(s.authCheckState())}}})],n)}}}]);