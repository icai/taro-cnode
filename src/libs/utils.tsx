import Taro from "@tarojs/taro";


export const isH5 = () => {
  return Taro.getEnv() === Taro.ENV_TYPE.WEB;
}

export const isWeapp = () => {
  return Taro.getEnv() === Taro.ENV_TYPE.WEAPP;
}

export const isAlipay = () => {
  return Taro.getEnv() === Taro.ENV_TYPE.ALIPAY;
}


export const updateObject = (oldObject, updatedProperties) => {
  return {
    ...oldObject,
    ...updatedProperties
  };
};


export const typeOf = (obj) => {
  return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase()
}


export const isObject = (obj) => {
  return typeOf(obj) === "object";
}

export const navigateTo = ({ url, params, ...rest }: { url: string, params?: Object }) => {
  if (url.indexOf('?') !== -1 && /[\u4e00-\u9fa5]/.test(url)) {
    url = encodeURI(url)
  }
  let uri = params ? '?' + param(params) : ''
  if (Taro.getCurrentPages().length === 5) {
    Taro.redirectTo({
      url: url + uri,
      ...rest
    })
  } else {
    Taro.navigateTo({
      url: url + uri,
      ...rest
    })
  }
}

export const redirectTo = ({ url, params, ...rest }: { url: string, params?: Object }) => {
  if (url.indexOf('?') !== -1 && /[\u4e00-\u9fa5]/.test(url)) {
    url = encodeURI(url)
  }
  let uri = params ? '?' + param(params) : ''
  Taro.redirectTo({
    url: url + uri,
    ...rest
  })
}



let getCheck = {
  checkEmail(val) {
    var filter = /^([a-zA-Z0-9_\\.\\-])+\\@(([a-zA-Z0-9\\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (filter.test(val)) {
      return true;
    } else {
      return false;
    }
  },
  checkPhone(val) {
    var filter = /^1\d{10}$/;

    if (filter.test(val)) {
      return true;
    } else {
      return false;
    }
  }
};

const uniq = x => [...new Set(x)];

/**
 * 从文本中提取出@username 标记的用户名数组
 * @param {String} text 文本内容
 * @return {Array} 用户名数组
 */
const fetchUsers = text => {
  if (!text) {
    return [];
  }

  var ignoreRegexs = [
    /```.+?```/g, // 去除单行的 ```
    /^```[\s\S]+?^```/gm, // ``` 里面的是 pre 标签内容
    /`[\s\S]+?`/g, // 同一行中，`some code` 中内容也不该被解析
    /^.*/gm, // 4个空格也是 pre 标签，在这里 . 不会匹配换行
    /\b\S*?@[^\s]*?\..+?\b/g, // somebody@gmail.com 会被去除
    /\[@.+?\\]\(\/.+?\)/g // 已经被 link 的 username
  ];

  ignoreRegexs.forEach(ignoreRegex => {
    text = text.replace(ignoreRegex, "");
  });

  var results = text.match(/@[a-z0-9\-_]+\b/gim);
  var names = [] as any;
  if (results) {
    for (var i = 0, l = results.length; i < l; i++) {
      var s = results[i];
      // remove leading char @
      s = s.slice(1);
      names.push(s);
    }
  }
  names = uniq(names);
  return names;
};

/**
 * 根据文本内容，替换为数据库中的数据
 * @param {String} text 文本内容
 * @param {Function} callback 回调函数
 */
const linkUsers = text => {
  var users = fetchUsers(text);
  for (var i = 0, l = users.length; i < l; i++) {
    var name = users[i];
    text = text.replace(
      new RegExp("@" + name + "\\b(?!\\])", "g"),
      "[@" + name + "](/user/" + name + ")"
    );
  }
  return text;
};

/**
 *   对Date的扩展，将 Date 转化为指定格式的String
 *   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 *   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *   例子：
 *   (new Date()).Format('yyyy-MM-dd hh:mm:ss.S') ==> 2006-07-02 08:09:04.423
 *   (new Date()).Format('yyyy-M-d h:m:s.S')      ==> 2006-7-2 8:9:4.18
 */
const fmtDate = (date, fmt) => {
  // author: meizz
  var o = {
    "M+": date.getMonth() + 1, // 月份
    "d+": date.getDate(), // 日
    "h+": date.getHours(), // 小时
    "m+": date.getMinutes(), // 分
    "s+": date.getSeconds(), // 秒
    "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
    S: date.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length)
      );
    }
  }
  return fmt;
};

function timeAgo(dateString) {
  const date = new Date(dateString.replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '').replace(/(-)/g, '/'));
  const now = new Date().getTime();
  const seconds = Math.floor((now - date.getTime()) / 1000);

  const intervals = {
    年: 31536000,
    个月: 2592000,
    周: 604800,
    天: 86400,
    小时: 3600,
    分钟: 60,
    秒: 1
  };

  for (const interval in intervals) {
    const value = Math.floor(seconds / intervals[interval]);
    if (value >= 1) {
      return `${value} ${interval}前`;
    }
  }
  return '刚刚';
}

/**
 * 调用Timeago库显示到现在的时间
 */
export const MillisecondToDate = time => {
  var str = "";
  if (time !== null && time !== "") {
    str = timeAgo(time);
  }
  return str;
};


export const inArray = (str, arr) => {
  return arr.indexOf(str);
}


export const getContentHtml = (v) => {
  let dom = document.createElement('div');
  dom.className = "markdown-text";
  dom.innerHTML = v;
  return dom.outerHTML;
};

/**
 * 格式化日期或时间
 * @param {string} time 需要格式化的时间
 * @param {bool} friendly 是否是fromNow
 */
export const getLastTimeStr = (time, friendly) => {
  if (friendly) {
    return MillisecondToDate(time);
  } else {
    return fmtDate(new Date(time), "yyyy-MM-dd hh:mm");
  }
};

/**
 * 获取不同tab的信息
 * @param  {[type]}  tab     [tab分类]
 * @param  {[type]}  good    [是否是精华]
 * @param  {[type]}  top     [是否置顶]
 * @param  {Boolean} isClass [是否是样式]
 * @return {[type]}          [返回对应字符串]
 */
export const getTabInfo = (tab, good, top, isClass) => {
  let str = "";
  let className = "";
  if (top) {
    str = "置顶";
    className = "top";
  } else if (good) {
    str = "精华";
    className = "good";
  } else {
    switch (tab) {
      case "share":
        str = "分享";
        className = "share";
        break;
      case "ask":
        str = "问答";
        className = "ask";
        break;
      case "job":
        str = "招聘";
        className = "job";
        break;
      default:
        str = "暂无";
        className = "default";
        break;
    }
  }
  return isClass ? className : str;
};

/**
 * 配置节流函数
 * @param  {[Function]}  fn     [要执行的函数]
 * @param  {[Number]}  delay    [延迟执行的毫秒数]
 * @param  {[Number]}  mustRun  [至少多久执行一次]
 * @return {[Function]}         [节流函数]
 */
export const throttle = (fn, wait, mustRun) => {
  let timeout;
  let startTime = new Date().getTime();
  return function () {
    let context = this;
    let args = arguments;
    let curTime = new Date().getTime();

    clearTimeout(timeout);
    // 如果达到了规定的触发时间间隔，触发 handler
    if (curTime - startTime >= mustRun) {
      fn.apply(context, args);
      startTime = curTime;
      // 没达到触发间隔，重新设定定时器
    } else {
      timeout = setTimeout(fn, wait);
    }
  };
};

export { linkUsers, fetchUsers, getCheck, fmtDate };





export const trim = (v) => {
  var re = /^\s+|\s+$/g;
  return v.replace(re, "");
}

export const param = function (a) {
  var s = [];
  var add = function (k, v) {
    v = typeof v === "function" ? v() : v;
    v = v === null ? "" : v === undefined ? "" : v;
    // @ts-ignore
    s[s.length] = encodeURIComponent(k) + "=" + encodeURIComponent(v);
  };
  var buildParams = function (prefix, obj) {
    var i, len, key;

    if (prefix) {
      if (Array.isArray(obj)) {
        for (i = 0, len = obj.length; i < len; i++) {
          buildParams(
            prefix +
            "[" +
            (typeof obj[i] === "object" && obj[i] ? i : "") +
            "]",
            obj[i]
          );
        }
      } else if (String(obj) === "[object Object]") {
        for (key in obj) {
          buildParams(prefix + "[" + key + "]", obj[key]);
        }
      } else {
        add(prefix, obj);
      }
    } else if (Array.isArray(obj)) {
      for (i = 0, len = obj.length; i < len; i++) {
        add(obj[i].name, obj[i].value);
      }
    } else {
      for (key in obj) {
        buildParams(key, obj[key]);
      }
    }
    return s;
  };

  return buildParams("", a).join("&");
};
