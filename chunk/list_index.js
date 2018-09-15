(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"142":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.TopicsList=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(4),i=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0)),a=n(69),s=n(143);n(90);var c=function(e){function TopicsList(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,TopicsList),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(TopicsList.__proto__||Object.getPrototypeOf(TopicsList)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(TopicsList,r.Component),o(TopicsList,[{"key":"render","value":function render(){var e=this.props.topics.map(function(e){return i.default.createElement(s.Topic,{"key":e.id,"topic":e})});return i.default.createElement(a.View,{"className":"topic-list"},e)}}]),TopicsList}();c.defaultProps={"topics":[]},t.TopicsList=c},"143":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.Topic=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(4),i=_interopRequireDefault(n(0)),a=n(69),s=_interopRequireDefault(n(74)),c=function _interopRequireWildcard(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(n(6));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(90);var l=function(e){function Topic(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Topic),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Topic.__proto__||Object.getPrototypeOf(Topic)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Topic,r.Component),o(Topic,[{"key":"getTabInfo","value":function getTabInfo(e,t,n,o){return c.getTabInfo(e,t,n,o)}},{"key":"render","value":function render(){var e=this.props.topic,t=e.title,n=e.tab,o=e.good,r=e.top,l=e.author,u=e.visit_count,f=e.reply_count,p=e.create_at,A=e.last_reply_at,d=e.id,m="stitle "+this.getTabInfo(n,o,r,!0),h=this.getTabInfo(n,o,r,!1);return i.default.createElement(s.default,{"className":"topic","to":{"url":"/pages/topic/index?id="+d}},i.default.createElement("h3",{"className":m,"title":h},t),i.default.createElement(a.View,{"className":"content"},i.default.createElement(a.View,null,i.default.createElement(a.Image,{"src":l.avatar_url,"className":"avatar"})),i.default.createElement(a.View,{"className":"info"},i.default.createElement(a.View,null,i.default.createElement(a.View,{"className":"name"},l.loginname),f>0?i.default.createElement(a.Text,{"className":"status"},i.default.createElement("b",null,f),"/ ",i.default.createElement(a.Text,null,u)):""),i.default.createElement(a.View,null,i.default.createElement(a.Text,{"className":"time"},c.getLastTimeStr(p,!0)),i.default.createElement(a.Text,{"className":"time"},c.getLastTimeStr(A,!0))))))}}]),Topic}();t.Topic=l},"144":function(e,t,n){(e.exports=n(2)(!0)).push([e.i,".topic {\n  display: -webkit-flex;\n  display: flex;\n  padding: 0.32rem;\n  border-bottom: 0.02133rem solid #f1f1f1;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n\n.info {\n  display: -webkit-flex;\n  display: flex;\n}\n\n.info .author {\n  font-size: 0.59733rem;\n}\n\n.bold {\n  font-size: 0.68267rem;\n  font-weight: bold;\n}\n\n.avatar {\n  max-width: 65Px;\n  max-height: 65Px;\n  border-radius: 50%;\n  margin-right: 10Px;\n}\n\n.middle {\n  -webkit-flex: 1;\n          flex: 1;\n  display: -webkit-flex;\n  display: flex;\n  margin-left: 0.21333rem;\n  -webkit-flex-direction: column;\n          flex-direction: column;\n}\n\n.mr10 {\n  margin-right: 0.21333rem;\n}\n\n.info .replies {\n  font-size: 0.42667rem;\n  color: darkgray;\n}\n\n.node {\n  float: right;\n}\n\n.node .tag {\n  font-size: 0.512rem;\n  padding: 0.10667rem 0.32rem;\n  float: right;\n  background-color: #eeeeee;\n  border-radius: 0.10667rem;\n}\n\n.title {\n  margin-top: 0.21333rem;\n  font-size: 0.64rem;\n}\n\n","",{"version":3,"sources":["/home/travis/build/icai/taro-cnode/.temp/components/topic/index.scss"],"names":[],"mappings":"AAAA;EACE,sBAAA;EAAA,cAAA;EACA,iBAAA;EACA,wCAAA;EACA,+BAAA;UAAA,uBAAA;CACD;;AAED;EACE,sBAAA;EAAA,cAAA;CACD;;AAKD;EACE,sBAAA;CAFD;;AAKD;EACE,sBAAA;EACA,kBAAA;CAFD;;AAKD;EACE,gBAAA;EACA,iBAAA;EACA,mBAAA;EACA,mBAAA;CAFD;;AAKD;EACE,gBAAA;UAAA,QAAA;EACA,sBAAA;EAAA,cAAA;EACA,wBAAA;EACA,+BAAA;UAAA,uBAAA;CAFD;;AAKD;EACE,yBAAA;CAFD;;AAKD;EACE,sBAAA;EACA,gBAAA;CAFD;;AAKD;EACE,aAAA;CAFD;;AAKD;EACE,oBAAA;EACA,4BAAA;EACA,aAAA;EACA,0BAAA;EACA,0BAAA;CAFD;;AAKD;EACE,uBAAA;EACA,mBAAA;CAFD","file":"index.scss","sourcesContent":[".topic {\n  display: flex;\n  padding: 15px;\n  border-bottom: 1px solid #f1f1f1;\n  flex-direction: column;\n}\n\n.info {\n  display: flex;\n  // height: 65px;\n  // margin-bottom: 5px;\n  // margin-top: 5px;\n}\n\n.info .author {\n  font-size: 28px;\n}\n\n.bold {\n  font-size: 32px;\n  font-weight: bold;\n}\n\n.avatar {\n  max-width: 65Px;\n  max-height: 65Px;\n  border-radius: 50%;\n  margin-right: 10Px;\n}\n\n.middle {\n  flex: 1;\n  display: flex;\n  margin-left: 10px;\n  flex-direction: column;\n}\n\n.mr10 {\n  margin-right: 10px;\n}\n\n.info .replies {\n  font-size: 20px;\n  color: darkgray;\n}\n\n.node {\n  float: right;\n}\n\n.node .tag {\n  font-size: 24px;\n  padding: 5px 15px;\n  float: right;\n  background-color: #eeeeee;\n  border-radius: 5px;\n}\n\n.title {\n  margin-top: 10px;\n  font-size: 30px;\n}\n"],"sourceRoot":""}])},"145":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0}),t.default=void 0;var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(69),i=n(4),a=function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}(n(0)),s=n(75);n(146);var c=function(e){function Loading(){return function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,Loading),function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(Loading.__proto__||Object.getPrototypeOf(Loading)).apply(this,arguments))}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(Loading,i.Component),o(Loading,[{"key":"render","value":function render(){var e=this.props.height,t=void 0===e?"8rem":e;return a.default.createElement(r.View,{"className":"loading2","style":{"minHeight":t,"height":t}},a.default.createElement(s.AtActivityIndicator,{"color":"#9d8352"}))}}]),Loading}();t.default=c},"146":function(e,t,n){var o=n(147);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!0,"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(o,r);o.locals&&(e.exports=o.locals)},"147":function(e,t,n){(e.exports=n(2)(!0)).push([e.i,".loading2 {\n  width: 100%;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-align-items: center;\n          align-items: center;\n  -webkit-justify-content: center;\n          justify-content: center;\n}\n\n","",{"version":3,"sources":["/home/travis/build/icai/taro-cnode/.temp/components/loading2/index.scss"],"names":[],"mappings":"AAAA;EACE,YAAA;EACA,sBAAA;EAAA,cAAA;EACA,4BAAA;UAAA,oBAAA;EACA,gCAAA;UAAA,wBAAA;CACD","file":"index.scss","sourcesContent":[".loading2 {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n"],"sourceRoot":""}])},"148":function(e,t,n){var o=n(149);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!0,"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(o,r);o.locals&&(e.exports=o.locals)},"149":function(e,t,n){(e.exports=n(2)(!0)).push([e.i,"","",{"version":3,"sources":[],"names":[],"mappings":"","file":"index.scss","sourceRoot":""}])},"64":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),i=n(4),a=_interopRequireDefault(i),s=_interopRequireDefault(n(0)),c=n(69),l=n(142),u=_interopRequireDefault(n(72)),f=(n(76),_interopRequireDefault(n(82))),p=n(11),A=_interopRequireDefault(n(145));function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}n(148);var d=function(e){function List(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,List);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(List.__proto__||Object.getPrototypeOf(List)).apply(this,arguments));return e.config={"navigationBarTitleText":"全部"},e.getScrollData=function(){},e.mergeTopics=function(t){e.setState({"topics":[].concat(_toConsumableArray(e.state.topics),_toConsumableArray(t))})},e.onReachBottom=function(){e.state.scroll&&e.setState(function(e){return{"scroll":!1,"loading":!0,"searchKey":o({},e.searchKey,{"page":e.searchKey.page+1})}},function(){e.getTopics()})},e.state={"scroll":!0,"topics":[],"index":{},"searchKey":{"page":1,"limit":20,"tab":"all","mdrender":!0},"loading":!0,"searchDataStr":""},e.index={},e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(List,i.Component),r(List,[{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"componentDidShow","value":function componentDidShow(){var e=this;this.$router.params&&this.$router.params.tab?this.setState(function(t){Object.assign(t.searchKey,{"tab":e.$router.params.tab})},function(){e.getTopics()}):this.getTopics()}},{"key":"getTitleStr","value":function getTitleStr(e){var t="";switch(e){case"share":t="分享";break;case"ask":t="问答";break;case"job":t="招聘";break;case"good":t="精华";break;default:t="全部"}return t}},{"key":"getTopics","value":function getTopics(){var e=this,t=this.state.searchKey;try{(0,p.get)({"url":"https://cnodejs.org/api/v1/topics","data":t}).then(function(t){var n=t.data;e.setState({"scroll":!0,"loading":!1}),n&&n.data&&e.mergeTopics(n.data)})}catch(e){a.default.showToast({"title":"载入远程数据错误"})}}},{"key":"render","value":function render(){var e=this.state,t=e.searchKey,n=e.topics,o=e.loading;return s.default.createElement(c.View,{"className":"flex-wrp"},s.default.createElement(u.default,{"pageType":this.getTitleStr(t.tab),"fixHead":!0,"needAdd":!0}),s.default.createElement(c.View,{"id":"page"},s.default.createElement(c.View,{"className":"posts-list"},s.default.createElement(l.TopicsList,{"topics":n,"loading":o})),o&&t.page>1&&s.default.createElement(A.default,{"height":"20vh"})),s.default.createElement(f.default,null))}}]),List}();t.default=d},"76":function(e,t,n){"use strict";function throttle(e,t,n,o){var r,i=0;return"boolean"!=typeof t&&(o=n,n=t,t=void 0),function wrapper(){var a=this,s=Number(new Date)-i,c=arguments;function exec(){i=Number(new Date),n.apply(a,c)}o&&!r&&exec(),r&&clearTimeout(r),void 0===o&&s>e?exec():!0!==t&&(r=setTimeout(o?function clear(){r=void 0}:exec,void 0===o?e-s:e))}}Object.defineProperty(t,"__esModule",{"value":!0}),t.throttle=throttle,t.debounce=function debounce(e,t,n){return void 0===n?throttle(e,t,!1):throttle(e,n,!1!==t)}},"82":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{"value":!0});var o=function(){function defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,n){return t&&defineProperties(e.prototype,t),n&&defineProperties(e,n),e}}(),r=n(4),i=_interopRequireDefault(r),a=_interopRequireDefault(n(0)),s=n(69),c=n(76);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}n(83);var l=function(e){function BackTop(){!function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,BackTop);var e=function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(BackTop.__proto__||Object.getPrototypeOf(BackTop)).apply(this,arguments));return e.handleScroll=function(){var t=e.componentScrollBox.scrollTop>=.5*document.body.clientHeight;e.setState({"show":t})},e.onPageScroll=function(t){var n=t.scrollTop>500;e.setState({"show":n})},e.goTop=function(){"WEB"==i.default.getEnv()?e.componentScrollBox.scrollTop=0:"WEAPP"==i.default.getEnv()&&i.default.pageScrollTo({"scrollTop":0})},e.state={"show":!1},"WEB"==i.default.getEnv()&&(e.componentScrollBox=document.documentElement),e}return function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(BackTop,r.Component),o(BackTop,[{"key":"componentWillUnmount","value":function componentWillUnmount(){"WEB"==i.default.getEnv()&&window.removeEventListener("scroll",this.scrollbinding)}},{"key":"componentDidMount","value":function componentDidMount(){"WEB"==i.default.getEnv()&&(this.scrollbinding=(0,c.throttle)(300,this.handleScroll),window.addEventListener("scroll",this.scrollbinding))}},{"key":"render","value":function render(){var e=this.state.show;return a.default.createElement(s.View,null,e?a.default.createElement(s.View,{"className":"iconfont icon-top","onClick":this.goTop},""):"")}}]),BackTop}();t.default=l},"83":function(e,t,n){var o=n(84);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!0,"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(o,r);o.locals&&(e.exports=o.locals)},"84":function(e,t,n){(e.exports=n(2)(!0)).push([e.i,".icon-top {\n  position: fixed;\n  right: 0.21333rem;\n  bottom: 1.70667rem;\n  font-size: 48PX;\n  z-index: 9999;\n  color: #42b983;\n}\n\n","",{"version":3,"sources":["/home/travis/build/icai/taro-cnode/.temp/components/backtotop/index.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,cAAA;EACA,eAAA;CACD","file":"index.scss","sourcesContent":[".icon-top {\n  position: fixed;\n  right: 10px;\n  bottom: 80px;\n  font-size: 48PX;\n  z-index: 9999;\n  color: #42b983;\n}\n"],"sourceRoot":""}])},"90":function(e,t,n){var o=n(144);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!0,"hmr":!0,"transform":void 0,"insertInto":void 0};n(3)(o,r);o.locals&&(e.exports=o.locals)}}]);