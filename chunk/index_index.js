(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"121":function(e,n,t){var o=t(122);"string"==typeof o&&(o=[[e.i,o,""]]);var r={"sourceMap":!0,"hmr":!0,"transform":void 0,"insertInto":void 0};t(3)(o,r);o.locals&&(e.exports=o.locals)},"122":function(e,n,t){(e.exports=t(2)(!0)).push([e.i,".index {\n  display: block;\n  background-color: #fff;\n  margin: 0 auto;\n  margin-top: 40%;\n}\n\n.index-subtitle {\n  text-align: center;\n  margin-top: 0.21333rem;\n  font-size: 0.68267rem;\n}\n\n","",{"version":3,"sources":["/home/travis/build/icai/taro-cnode/.temp/pages/index/index.scss"],"names":[],"mappings":"AAAE;EACE,eAAA;EACA,uBAAA;EACA,eAAA;EACA,gBAAA;CACH;;AAEC;EACE,mBAAA;EACA,uBAAA;EACA,sBAAA;CACH","file":"index.scss","sourcesContent":["  .index {\n    display: block;\n    background-color: #fff;\n    margin: 0 auto;\n    margin-top: 40%;\n  }\n\n  .index-subtitle {\n    text-align: center;\n    margin-top: 10px;\n    font-size: 32px;\n  }\n"],"sourceRoot":""}])},"123":function(e,n,t){e.exports=t.p+"static/images/index.png"},"57":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{"value":!0});var o=function(){function defineProperties(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}(),r=t(1),i=_interopRequireDefault(r),a=_interopRequireDefault(t(0)),u=t(65);function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}t(121);var s=function(e){function Index(){!function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,Index);var e=function _possibleConstructorReturn(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(Index.__proto__||Object.getPrototypeOf(Index)).apply(this,arguments));return e.config={"navigationBarTitleText":"首页"},e}return function _inherits(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{"constructor":{"value":e,"enumerable":!1,"writable":!0,"configurable":!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(Index,r.Component),o(Index,[{"key":"componentDidMount","value":function componentDidMount(){setTimeout(function(){i.default.navigateTo({"url":"/pages/list/index"})},1e3)}},{"key":"componentDidHide","value":function componentDidHide(){}},{"key":"render","value":function render(){return a.default.createElement(u.View,null,a.default.createElement(u.Image,{"className":"index","mode":"widthFix","src":t(123)}),a.default.createElement(u.View,{"className":"index-subtitle"},"Taro Cnode.js社区"))}}]),Index}();n.default=s}}]);