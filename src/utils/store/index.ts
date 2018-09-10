let Store;

// https://nervjs.github.io/taro/docs/native-api.html#%E6%95%B0%E6%8D%AE%E7%BC%93%E5%AD%98

if (process.env.TARO_ENV === "weapp") {
  Store = require("./wx");
} else if (process.env.TARO_ENV === "h5") {
  Store = require("./web");
}

const instance = new Store();
export default instance;


