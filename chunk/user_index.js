(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"163":function(e,t,r){var n=r(164);"string"==typeof n&&(n=[[e.i,n,""]]);var a={"sourceMap":!0,"hmr":!0,"transform":void 0,"insertInto":void 0};r(3)(n,a);n.locals&&(e.exports=n.locals)},"164":function(e,t,r){(e.exports=r(2)(!0)).push([e.i,"","",{"version":3,"sources":[],"names":[],"mappings":"","file":"index.scss","sourceRoot":""}])},"68":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),o=_interopRequireDefault(r(4)),i=_interopRequireWildcard(r(73)),u=_interopRequireDefault(r(0)),l=r(70),s=r(69),c=r(9),f=_interopRequireDefault(r(72)),p=_interopRequireDefault(r(74)),d=_interopRequireDefault(r(71)),m=_interopRequireWildcard(r(10)),h=_interopRequireWildcard(r(6)),_=r(11);function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}r(163);var v=function(e){function User(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,User);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(User.__proto__||Object.getPrototypeOf(User)).apply(this,arguments));return e.config={"navigationBarTitleText":"用户信息"},e.changeItem=function(t){var r=1===t?e.state.user.recent_replies:e.state.user.recent_topics;e.setState(function(e){return n({},e,{"selectItem":t,"currentData":r})})},e.state={"currentData":[],"user":{"avatar_url":""},"showMenu":!1,"selectItem":1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(User,l.Component),a(User,[{"key":"componentDidMount","value":function componentDidMount(){this.getUser()}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"getUser","value":function getUser(){var e=this,t=this.$router.params.loginname;if(!t)return o.default.showToast({"title":"缺少用户名参数"}),o.default.navigateTo({"url":"/pages/list/index"}),!1;(0,_.get)({"url":"https://cnodejs.org/api/v1/user/"+t}).then(function(t){var r=t.data;if(r&&r.data){var n=r.data;e.setState({"user":n}),n.recent_replies.length>0?e.setState({"currentData":n.recent_replies}):e.setState({"currentData":n.recent_topics,"selectItem":2})}})}},{"key":"render","value":function render(){var e=this.state,t=e.selectItem,r=e.user,n=e.currentData,a=function getLastTimeStr(e,t){return h.getLastTimeStr(e,t)};return u.default.createElement(s.View,{"className":"flex-wrp"},u.default.createElement(f.default,{"pageType":"用户信息","fixHead":!0,"showMenu":!0,"needAdd":!0}),u.default.createElement(s.View,{"className":"userinfo"},u.default.createElement(s.Image,{"className":"u-img","src":r.avatar_url}),u.default.createElement("br",null),u.default.createElement(s.Text,{"className":"u-name"},r.loginname),u.default.createElement(s.View,{"className":"u-bottom"},u.default.createElement(s.Text,{"className":"u-time"},a(r.create_at,!1)),u.default.createElement(s.Text,{"className":"u-score"},"积分：",r.score))),u.default.createElement(s.View,{"className":"topics"},u.default.createElement(s.View,{"className":"user-tabs"},u.default.createElement(s.View,{"className":(0,d.default)({"item":1,"br":1,"selected":1===t}),"onClick":this.changeItem.bind(this,1)},"最近回复"),u.default.createElement(s.View,{"className":(0,d.default)({"item":1,"selected":2===t}),"onClick":this.changeItem.bind(this,2)},"最新发布")),n.map(function(e){return u.default.createElement(s.View,{"className":"message"},u.default.createElement(s.View,{"className":"user"},u.default.createElement(p.default,{"className":"head","to":{"url":"/pages/user/index","params":{"loginname":e.author.loginname}}},u.default.createElement(s.Image,{"class":"head","src":e.author.avatar_url})),u.default.createElement(p.default,{"className":"info","to":{"url":"/pages/topic/index","params":{"id":e.id}}},u.default.createElement(s.View,{"className":"t-title"},e.title),u.default.createElement(s.Text,{"className":"cl mt12"},u.default.createElement(s.Text,{"className":"name"},e.author.loginname)),u.default.createElement(s.Text,{"className":"cr mt12"},u.default.createElement(s.Text,{"className":"name"},a(e.last_reply_at,!0))))))}),0===n.length?u.default.createElement(s.View,{"className":"no-data"},u.default.createElement(s.Text,{"className":"iconfont icon-empty"},""),"暂无数据!"):""))}}]),User}();v=i.__decorate([(0,c.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(m.authCheckState())}}})],v),t.default=v},"70":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.withUser=t.Component=void 0;var n=function(){function defineProperties(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,t,r){return t&&defineProperties(e.prototype,t),r&&defineProperties(e,r),e}}(),a=function get(e,t,r){null===e&&(e=Function.prototype);var n=Object.getOwnPropertyDescriptor(e,t);if(void 0===n){var a=Object.getPrototypeOf(e);return null===a?void 0:get(a,t,r)}if("value"in n)return n.value;var o=n.get;return void 0!==o?o.call(r):void 0},o=r(4),i=_interopRequireDefault(o),u=_interopRequireWildcard(r(73)),l=(_interopRequireDefault(r(0)),r(9)),s=_interopRequireWildcard(r(10));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.Component=o.Component,t.withUser=function withUser(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=function(r){function WithUserHOC(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WithUserHOC);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WithUserHOC.__proto__||Object.getPrototypeOf(WithUserHOC)).apply(this,arguments));return e.props.authCheckState(),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WithUserHOC,e),n(WithUserHOC,[{"key":"isSuperRender","value":function isSuperRender(){var e=this.props;return t||e.userInfo&&e.userInfo.userId}},{"key":"perform","value":function perform(){this.isSuperRender()||i.default.redirectTo({"url":"/pages/login/index"})}},{"key":"componentWillMount","value":function componentWillMount(){this.perform()}},{"key":"render","value":function render(){return this.isSuperRender()?a(WithUserHOC.prototype.__proto__||Object.getPrototypeOf(WithUserHOC.prototype),"render",this).call(this):null}}]),WithUserHOC}();return r=u.__decorate([(0,l.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authLogin":function authLogin(){return e(s.auth.apply(s,arguments))},"authCheckState":function authCheckState(){return e(s.authCheckState())}}})],r)}}}]);