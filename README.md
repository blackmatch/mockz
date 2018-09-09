# mockz

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]

随机获取中国的`省级`、`市级`、`县级`行政单位名称，灵感来自于[mockjs](https://github.com/nuysoft/Mock/tree/refactoring)。数据是从国家统计局获取的，目前的数据标准为：**[2017年统计用区划代码和城乡划分代码(截止2017年10月31日)](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2017/index.html)**。

## 使用方法

* 安装`mockz`

```shell
npm install mockz
```

* 使用示例

```js
const mockz = require('mockz');

// 全部数据
const all = mockz.all();
console.log(all[0]);

// 随机获取一个省级单位
const province = mockz.province();
console.log(province);  // 山西省

// 随机获取一个市级单位
const city = mockz.city();
console.log(city);  // 咸阳市

// 随机获取某个省的一个市级单位
const city2 = mockz.city('广东省');
console.log(city2);  // 潮州市

// 随机获取一个县级单位
const county = mockz.county();
console.log(county);  // 怀柔区

// 随机获取某个省的一个县级单位
const county2 = mockz.county('广东省');
console.log(county2);  // 蕉岭县

// 随机获取某个省某个市的一个县级单位
const county3 = mockz.county('广东省', '广州市');
console.log(county3);  // 天河区

// 随机获取一个地址
const address = mockz.address();
console.log(address); // 山西省晋中市昔阳县
```

## 声明

本项目仅用于学习研究，严禁用于其他非法用途。如果造成任何法律责任，与本人无关。

## 协议

MIT.

[npm-image]: https://img.shields.io/npm/v/mockz.svg?style=flat-square
[npm-url]: https://npmjs.org/package/mockz
[downloads-image]: http://img.shields.io/npm/dm/mockz.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/mockz
