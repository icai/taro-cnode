# taro-cnode

<!-- [![Greenkeeper badge](https://badges.greenkeeper.io/icai/taro-cnode.svg)](https://greenkeeper.io/) -->
[![](https://travis-ci.org/icai/taro-cnode.svg?branch=master)](https://travis-ci.org/icai/taro-cnode)
[![](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)


## 这是什么？

这是一个Taro 开发的多端客户端

你也可以把他看成是Taro开发指南， 
你也可把他看成React开发教程，  
你还可以把他看成是Vue和React的比较开发教程。   
因为UI和代码基本参照 [https://github.com/shinygang/Vue-cnodejs](https://github.com/shinygang/Vue-cnodejs)，  
你基本上可以找到跟 [https://github.com/shinygang/Vue-cnodejs](https://github.com/shinygang/Vue-cnodejs) 一对一的目录结构。




## 起步

```bash

git clone --depth 50 -b master --single-branch https://github.com/icai/taro-cnode.git && cd taro-cnode

npm install -g @tarojs/cli

npm install

npm run dev:h5

```



## 预览效果

- h5预览地址

http://taro.w3cub.com/

<img src="https://user-images.githubusercontent.com/1061012/45255911-2542e080-b3c1-11e8-90bf-4be7cd765516.png" width="200" height="200"/>

- 小程序地址

还在调试中，待定



taro 完整程序可以参考：


https://github.com/cpitax/taro-tax



## 声明

本程序一开始存在一个错误的兼容方向。按照Taro的设计原理，应该先兼容小程序再兼容其他端。
本工程本来基于 https://github.com/shinygang/Vue-cnodejs 开发而来，所以一开始是兼容H5为主， 
但是到了后续Taro的升级，存在各种Taro API向小程序靠拢的迹象， 很多ES6，React的屏蔽。 
所以假如要用Taro开发，建议先以**小程序**为主端，向多端扩散。

基于 https://github.com/shinygang/Vue-cnodejs 和 taro-cli 实现



## LICENSE

Copyright (c) 2018 Terry Cai. Licensed under the MIT license.
