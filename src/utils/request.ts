import Taro from "@tarojs/taro";
import * as utils from "../libs/utils";


export const post = (options, data?) => {
  if (typeof options == 'string') {
    options = {
      url: options
    }
  }
  if (utils.isObject(data)) {
    options.data = data;
  }
  return Taro.request({
    header: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    },
    ...options,
    data: utils.param(options.data),
    method: "POST"
  });
}

export const get = (options, data?) => {
  if (typeof options == 'string') {
    options = {
      url: options
    }
  }
  if (utils.isObject(data)) {
    options.data = data;
  }
  return Taro.request({ ...options, method: "GET" });
}
