(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"131":function(e,t,n){},"138":function(e,t,n){},"140":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=_interopRequireDefault(o),i=_interopRequireDefault(n(0)),l=n(48),u=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5)),s=n(71),c=n(70),f=_interopRequireDefault(n(49)),p=_interopRequireDefault(n(100)),d=n(9);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(138);var h=n(136).markdown,m=function(e){function Reply(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Reply);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Reply.__proto__||Object.getPrototypeOf(Reply)).apply(this,arguments));return e.handleChange=function(t){e.setState({"content":t.target.value})},e.state={"hasErr":!1,"content":"","author_txt":"\n\n 来自拉风的 [Taro-cnode](https://github.com/icai/taro-cnode)"},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Reply,o.Component),r(Reply,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentDidMount","value":function componentDidMount(){this.props.replyTo&&this.setState({"content":"@"+this.props.replyTo})}},{"key":"addReply","value":function addReply(){var e=this,t=this.state,n=t.content,r=t.author_txt,o=this.props,i=o.userInfo,l=(o.topic,o.topicId),s=o.replyId,c=o.show,f=o.updateReplies;if(n){var m=new Date,y=u.linkUsers(n),_=h.toHTML(y)+r,b=u.getContentHtml(_),v={"accesstoken":i.token,"content":n+r};s&&(v.reply_id=s),(0,d.post)({"data":v,"url":"https://cnodejs.org/api/v1/topic/"+l+"/replies"}).then(function(t){var n=t.data;n.success?(f&&f(function(e,t){var r=(0,p.default)(e.replies,{"$push":[{"id":n.reply_id,"author":{"loginname":i.loginname,"avatar_url":i.avatar_url},"content":b,"ups":[],"create_at":m}]});e.replies=r,t.setState({"topic":e})}),e.setState({"content":""}),c&&e.props.onClose()):a.default.showToast({"title":n.error_msg})}).catch(function(e){console.info(e)})}else this.setState({"hasErr":!0})}},{"key":"render","value":function render(){var e=this.state.hasErr;return i.default.createElement(l.View,{"className":"reply"},i.default.createElement(c.AtTextarea,{"id":"content","className":(0,f.default)({"text":1,"err":e}),"value":this.state.content,"onChange":this.handleChange,"type":"text","placeholder":"回复支持Markdown语法,请注意标记代码","rows":"8","class":"text"}),i.default.createElement(l.View,{"className":"button","onClick":this.addReply.bind(this)},"确定"))}}]),Reply}();t.default=(0,s.withUser)(m)},"41":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=_interopRequireDefault(n(0)),i=n(48),l=_interopRequireDefault(n(66)),u=_interopRequireDefault(n(52)),s=_interopRequireDefault(n(140)),c=_interopRequireDefault(n(49)),f=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5)),p=n(71),d=_interopRequireDefault(n(100)),h=n(9),m=_interopRequireDefault(n(83));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(131);var y=function(e){function Topic(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Topic);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Topic.__proto__||Object.getPrototypeOf(Topic)).apply(this,arguments));return e.config={"navigationBarTitleText":"主题"},e.getTopic=function(){var t=e.$router.params.id;e.setState({"topicId":t}),(0,h.get)({"url":"https://cnodejs.org/api/v1/topic/"+t}).then(function(t){var n=t.data;n&&n.data?e.setState({"topic":n.data}):e.setState({"noData":!0})})},e.state={"showMenu":!1,"topic":{"title":"","create_at":"","visit_count":0,"content":"","tab":"","good":!1,"top":!1,"reply_count":0,"author":{"avatar_url":"","loginname":""},"replies":[]},"noData":!1,"topicId":"","curReplyId":""},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Topic,o.Component),r(Topic,[{"key":"componentDidMount","value":function componentDidMount(){this.getTopic()}},{"key":"addReply","value":function addReply(e){this.setState({"curReplyId":e}),this.props.userInfo.userId}},{"key":"hideItemReply","value":function hideItemReply(){this.setState({"curReplyId":""})}},{"key":"upReply","value":function upReply(e,t){var n=this,r=this.props.userInfo,o=this.state.topic;r.userId?(0,h.post)({"url":"https://cnodejs.org/api/v1/reply/"+e.id+"/ups","data":{"accesstoken":r.token}}).then(function(a){var i=a.data;if(i.success){if("down"===i.action){var l=f.inArray(r.userId,e.ups);e.ups.splice(l,1)}else e.ups.push(r.userId);(0,d.default)(o.replies,function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{"value":n,"enumerable":!0,"configurable":!0,"writable":!0}):e[t]=n,e}({},t,{"$set":e})),n.setState({"topic":o})}}):f.navigateTo({"url":"/pages/login/index","params":{"redirect":encodeURIComponent(this.$router.fullUrl)}})}},{"key":"render","value":function render(){var e=this,t=this.state,n=t.noData,r=t.topicId,o=t.showMenu,p=t.curReplyId,d=t.topic,h=this.props.userInfo,y=function getLastTimeStr(e,t){return f.getLastTimeStr(e,t)},_=function getTabInfo(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments[2],r=arguments[3];return f.getTabInfo(e,t,n,r)},b=function updateReplies(t){t(d,e)},v=d.replies.map(function(t,n){return a.default.createElement(i.View,{"className":"li flex-wrp"},a.default.createElement(i.View,{"className":"user"},a.default.createElement(u.default,{"to":{"url":"/pages/user/index","params":{"loginname":t.author.loginname}}},a.default.createElement(i.Image,{"className":"head","src":t.author.avatar_url})),a.default.createElement(i.View,{"className":"info"},a.default.createElement(i.Text,{"className":"cl"},a.default.createElement(i.Text,{"className":"name"},t.author.loginname),a.default.createElement(i.Text,{"className":"name mt10"},a.default.createElement(i.Text,null),"发布于:",y(t.create_at,!0))),a.default.createElement(i.Text,{"className":"cr"},a.default.createElement(i.Text,{"className":(0,c.default)({"iconfont":1,"icon":1,"uped":function isUps(e){return e.includes((h||{}).userId)}(t.ups)}),"onClick":e.upReply.bind(e,t,n)},""),t.ups.length,a.default.createElement(i.Text,{"className":"iconfont icon","onClick":e.addReply.bind(e,t.id)},"")))),a.default.createElement(i.View,{"className":"reply_content","dangerouslySetInnerHTML":{"__html":t.content}}),h.userId&&p===t.id?a.default.createElement(s.default,{"topic":d,"updateReplies":b,"topicId":r,"replyId":t.id,"replyTo":t.author.loginname,"show":p,"onClose":e.hideItemReply.bind(e)}):"")});return a.default.createElement(i.View,{"className":"flex-wrp"},a.default.createElement(l.default,{"pageType":"主题","fixHead":!0,"needAdd":!0}),d.title?a.default.createElement(i.View,{"id":"page","className":(0,c.default)({"show-menu":o})},a.default.createElement(i.View,{"className":"topic-title"},d.title),a.default.createElement(i.View,{"className":"author-info"},a.default.createElement(u.default,{"to":{"url":"/pages/user/index","params":{"loginname":d.author.loginname}}},a.default.createElement(i.Image,{"className":"avatar","src":d.author.avatar_url})),a.default.createElement(i.View,{"className":"col"},a.default.createElement(i.Text,null,d.author.loginname),a.default.createElement(i.Text,{"className":"time"},"发布于:",y(d.create_at,!0))),a.default.createElement(i.View,{"className":"right"},a.default.createElement(i.Text,{"className":"tag "+_(d.tab,d.good,d.top,!0)},_(d.tab,d.good,d.top,!1)),a.default.createElement(i.Text,{"className":"name"},d.visit_count,"次浏览"))),a.default.createElement(i.View,{"className":"markdown-body topic-content","dangerouslySetInnerHTML":{"__html":d.content}}),a.default.createElement(i.View,{"className":"topic-reply"},a.default.createElement(i.Text,{"className":"strong"},d.reply_count)," 回复"),a.default.createElement(i.View,{"className":"reply-list"},a.default.createElement(i.View,{"className":"ul"},v)),a.default.createElement(m.default,null),h.userId?a.default.createElement(s.default,{"topic":d,"updateReplies":b,"topicId":r}):""):"",n?a.default.createElement(i.View,{"className":"no-data"},a.default.createElement("i",{"className":"iconfont icon-empty"},""),"该话题不存在!"):"")}},{"key":"componentDidShow","value":function componentDidShow(){}}]),Topic}();t.default=(0,p.withUser)(y,!0)},"52":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),a=n(1),i=_interopRequireDefault(a),l=n(48),u=_interopRequireDefault(n(0)),s=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(5));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var c=function(e){function Link(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Link);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Link.__proto__||Object.getPrototypeOf(Link)).apply(this,arguments));return e.goTo=function(e){var t=e.url,n=e.params;return i.default.navigateTo({"url":t+(n?"?"+s.param(n):"")}),!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Link,a.Component),o(Link,[{"key":"render","value":function render(){var e=this.props,t=r({},e,{"style":{"cursor":"pointer"}});return delete t.to,u.default.createElement(l.View,{"className":t.className,"style":t.style,"onClick":this.goTo.bind(this,e.to)},this.props.children)}}]),Link}();c.defaultProps={"to":{"url":"","params":""}},t.default=c},"57":function(e,t,n){},"59":function(e,t,n){},"61":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=(_interopRequireDefault(n(1)),_interopRequireDefault(n(0))),a=n(48),i=n(70);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}var l=function(e){function Drawer(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Drawer);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Drawer.__proto__||Object.getPrototypeOf(Drawer)).apply(this,arguments));return e.state={"animShow":!1,"show":e.props.show},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Drawer,i.AtDrawer),r(Drawer,[{"key":"onHide","value":function onHide(){this.setState({"show":!1}),this.props.onClose&&this.props.onClose()}},{"key":"animHide","value":function animHide(){var e=this,t=arguments;this.setState({"animShow":!1}),this.props.onStartHide&&this.props.onStartHide(),setTimeout(function(){e.onHide.apply(e,t)},300)}},{"key":"animShow","value":function animShow(){var e=this;this.setState({"show":!0}),setTimeout(function(){e.setState({"animShow":!0})},200)}},{"key":"onMaskClick","value":function onMaskClick(){this.animHide.apply(this,arguments)}},{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){var t=e.show;t!==this.props.show&&(t?this.animShow():this.animHide.apply(this,arguments))}},{"key":"render","value":function render(){var e=this.props,t=e.mask,n=(e.width,e.right),r=this.state,i=r.animShow,l=r.show,u=["at-drawer"],s={"display":t?"block":"none","opacity":i?1:0};return n?u.push("at-drawer--right"):u.push("at-drawer--left"),i&&u.push("at-drawer--show"),u=u.filter(function(e){return""!==e}),l&&o.default.createElement(a.View,{"className":u},o.default.createElement(a.View,{"className":"at-drawer__mask","style":s,"onClick":this.onMaskClick.bind(this)}),o.default.createElement(a.View,{"className":"at-drawer__content","style":{}},this.props.children))}}]),Drawer}();t.default=l},"63":function(e,t,n){},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=_interopRequireWildcard(n(54)),a=n(1),i=_interopRequireDefault(n(0)),l=n(48),u=_interopRequireDefault(n(52)),s=n(8),c=_interopRequireWildcard(n(7));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(63);var f=function(e){function UserInfo(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,UserInfo),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(UserInfo.__proto__||Object.getPrototypeOf(UserInfo)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(UserInfo,a.Component),r(UserInfo,[{"key":"componentWillReceiveProps","value":function componentWillReceiveProps(e){}},{"key":"componentWillMount","value":function componentWillMount(){this.props.authCheckState()}},{"key":"render","value":function render(){var e=this.props.userInfo;return i.default.createElement(l.View,{"className":"user-info"},e.loginname?i.default.createElement(u.default,{"className":"login-yes","to":{"url":"/pages/user/index","params":{"loginname":e.loginname}}},i.default.createElement(l.View,{"className":"avertar"},e.avatar_url?i.default.createElement(l.Image,{"class":"avertar","src":e.avatar_url}):""),i.default.createElement(l.View,{"className":"info"},e.loginname?i.default.createElement(l.Text,null,e.loginname):"")):i.default.createElement(u.default,{"className":"login-no","to":{"url":"/pages/login/index"}},i.default.createElement(l.View,{"className":"login"},i.default.createElement(l.View,null,"登录"))))}}]),UserInfo}();f=o.__decorate([(0,s.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authCheckState":function authCheckState(){e(c.authCheckState())}}})],f),t.default=f},"65":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=_interopRequireDefault(n(0)),i=n(48),l=_interopRequireDefault(n(64)),u=_interopRequireDefault(n(49)),s=_interopRequireDefault(n(61)),c=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(59);var f=function(e){function NvMenu(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,NvMenu),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(NvMenu.__proto__||Object.getPrototypeOf(NvMenu)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(NvMenu,o.Component),r(NvMenu,[{"key":"render","value":function render(){var e=this.props.showMenu,t=(0,u.default)({"nav-list":!0,"show":e});return a.default.createElement(i.View,{"id":"sideBar","className":t},a.default.createElement(s.default,{"mask":!1,"show":e},a.default.createElement(l.default,null),a.default.createElement(i.View,{"className":"list-ul"},a.default.createElement(c.default,{"className":"icon-quanbu iconfont item","to":{"url":"/pages/list/index?tab=all"}},"全部"),a.default.createElement(c.default,{"className":"icon-hao iconfont item","to":{"url":"/pages/list/index?tab=good"}},"精华"),a.default.createElement(c.default,{"className":"icon-fenxiang iconfont item","to":{"url":"/pages/list/index?tab=share"}},"分享"),a.default.createElement(c.default,{"className":"icon-wenda iconfont item","to":{"url":"/pages/list/index?tab=ask"}},"问答"),a.default.createElement(c.default,{"className":"icon-zhaopin iconfont item","to":{"url":"/pages/list/index?tab=job"}},"招聘"),a.default.createElement(c.default,{"className":"icon-xiaoxi iconfont item line","to":{"url":"/pages/message/index"}},"消息"),a.default.createElement(c.default,{"className":"icon-about iconfont item","to":{"url":"/pages/about/index"}},"关于"))))}}]),NvMenu}();t.default=f},"66":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=_interopRequireDefault(n(0)),i=_interopRequireDefault(n(49)),l=n(48),u=_interopRequireDefault(n(65)),s=_interopRequireDefault(n(52));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(57);var c=function(e){function Header(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Header);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Header.__proto__||Object.getPrototypeOf(Header)).apply(this,arguments));return e.openMenu=function(){e.setState({"show":!e.state.show})},e.showMenus=function(){e.setState({"show":!e.state.show})},e.state={"nickname":"","profileimgurl":"","show":!1},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Header,o.Component),r(Header,[{"key":"render","value":function render(){var e=this.state,t=e.show,n=e.nickname,r=e.profileimgurl,o=this.props,c=o.needAdd,f=o.pageType,p=o.fixHead,d=o.messageCount,h=(0,i.default)({"show":t&&p,"fix-header":p,"no-fix":!p});return a.default.createElement(l.View,{"className":"header"},t&&p?a.default.createElement(l.View,null,a.default.createElement(l.View,{"className":"page-cover","onClick":this.showMenus})):"",a.default.createElement(l.View,{"className":h,"id":"hd"},a.default.createElement(l.View,{"className":"nv-toolbar"},p?a.default.createElement(l.View,{"className":"toolbar-nav","onClick":this.openMenu}):"",a.default.createElement(l.Text,null,f),d>0?a.default.createElement(l.Text,{"className":"num"},d):"",c&&!d||d<=0?a.default.createElement(s.default,{"className":"iconfont add-icon","to":{"url":"/pages/add/index"}},""):"")),a.default.createElement(u.default,{"showMenu":t,"pageType":f,"nickName":n,"profileUrl":r}))}}]),Header}();c.defaultProps={"messageCount":0,"scrollTop":0},t.default=c},"71":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.withUser=t.Component=void 0;var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=function get(e,t,n){null===e&&(e=Function.prototype);var r=Object.getOwnPropertyDescriptor(e,t);if(void 0===r){var o=Object.getPrototypeOf(e);return null===o?void 0:get(o,t,n)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(n):void 0},a=n(1),i=_interopRequireDefault(a),l=_interopRequireWildcard(n(54)),u=(_interopRequireDefault(n(0)),n(8)),s=_interopRequireWildcard(n(7));function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t.Component=a.Component,t.withUser=function withUser(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=function(n){function WithUserHOC(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,WithUserHOC);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(WithUserHOC.__proto__||Object.getPrototypeOf(WithUserHOC)).apply(this,arguments));return e.props.authCheckState(),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(WithUserHOC,e),r(WithUserHOC,[{"key":"isSuperRender","value":function isSuperRender(){var e=this.props;return t||e.userInfo&&e.userInfo.userId}},{"key":"perform","value":function perform(){this.isSuperRender()||i.default.redirectTo({"url":"/pages/login/index"})}},{"key":"componentWillMount","value":function componentWillMount(){this.perform()}},{"key":"render","value":function render(){return this.isSuperRender()?o(WithUserHOC.prototype.__proto__||Object.getPrototypeOf(WithUserHOC.prototype),"render",this).call(this):null}}]),WithUserHOC}();return n=l.__decorate([(0,u.connect)(function(e){return{"userInfo":e.auth}},function(e){return{"authLogin":function authLogin(){return e(s.auth.apply(s,arguments))},"authCheckState":function authCheckState(){return e(s.authCheckState())}}})],n)}},"82":function(e,t,n){},"83":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),o=n(1),a=_interopRequireDefault(o),i=_interopRequireDefault(n(0)),l=n(48),u=n(79);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(82);var s=function(e){function BackTop(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BackTop);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BackTop.__proto__||Object.getPrototypeOf(BackTop)).apply(this,arguments));return e.handleScroll=function(){var t=e.componentScrollBox.scrollTop>=.5*document.body.clientHeight;e.setState({"show":t})},e.onPageScroll=function(t){var n=t.scrollTop>500;e.setState({"show":n})},e.goTop=function(){"WEB"==a.default.getEnv()?e.componentScrollBox.scrollTop=0:"WEAPP"==a.default.getEnv()&&a.default.pageScrollTo({"scrollTop":0})},e.state={"show":!1},"WEB"==a.default.getEnv()&&(e.componentScrollBox=document.documentElement),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BackTop,o.Component),r(BackTop,[{"key":"componentWillUnmount","value":function componentWillUnmount(){"WEB"==a.default.getEnv()&&window.removeEventListener("scroll",this.scrollbinding)}},{"key":"componentDidMount","value":function componentDidMount(){"WEB"==a.default.getEnv()&&(this.scrollbinding=(0,u.throttle)(300,this.handleScroll),window.addEventListener("scroll",this.scrollbinding))}},{"key":"render","value":function render(){var e=this.state.show;return i.default.createElement(l.View,null,e?i.default.createElement(l.View,{"className":"iconfont icon-top","onClick":this.goTop},""):"")}}]),BackTop}();t.default=s}}]);