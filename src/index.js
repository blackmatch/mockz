const _ = require('lodash');
const allData = require('./data.json');

// 全部数据
const all = () => allData;

// 省级
const province = () => {
  const idx = _.random(allData.length - 1);
  return allData[idx].name;
};

// 市级
const city = (provName) => {
  const pidx = _.random(allData.length - 1);
  let prov = allData[pidx];
  const pArr = _.filter(allData, { name: provName });
  if (pArr.length > 0) {
    [prov] = pArr;
  }

  const cidx = _.random(prov.children.length - 1);

  return prov.children[cidx].name;
};

// 县级
const county = (provName, cityName) => {
  const pidx = _.random(allData.length - 1);
  let prov = allData[pidx];
  const pArr = _.filter(allData, { name: provName });
  if (pArr.length > 0) {
    [prov] = pArr;
  }
  const cidx = _.random(prov.children.length - 1);
  let ct = prov.children[cidx];
  const cArr = _.filter(prov.children, { name: cityName });
  if (cArr.length > 0) {
    [ct] = cArr;
  }

  const idx = _.random(ct.children.length - 1);

  return ct.children[idx].name;
};

// 地址
const address = () => {
  const pidx = _.random(allData.length - 1);
  const prov = allData[pidx];
  const cidx = _.random(prov.children.length - 1);
  const ct = prov.children[cidx];
  const cyidx = _.random(ct.children.length - 1);
  const cy = ct.children[cyidx];

  return `${prov.name}${ct.name}${cy.name}`;
};

module.exports = {
  all,
  province,
  city,
  county,
  address,
};
