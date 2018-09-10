import { IStore } from "../../interfaces/store";
import Taro from "@tarojs/taro";

class Store implements IStore {
  constructor() {}
  getItem(key) {
    return Taro.getStorageSync(key);
  }
  setItem(key, value) {
    return Taro.setStorageSync(key, value);
  }
}

module.exports = Store;



