const debug = require('debug')('test');
const chai = require('chai');

const should = chai.should();

const mockz = require('../src/index');

describe('全部数据', () => {
  it('#all', () => {
    const all = mockz.all();
    debug(all[0]);
    all.should.be.an('array');
  });
});

describe('省级', () => {
  it('#province', () => {
    const prov = mockz.province();
    debug(prov);
    prov.should.be.a('string');
  });
});

describe('市级', () => {
  it('#city', () => {
    const city = mockz.city();
    debug(city);
    city.should.be.a('string');
  });

  it('#city(\'北京市\')', () => {
    const city = mockz.city('北京市');
    debug(city);
    city.should.be.a('string');
  });

  it('#city(\'广西壮族自治区\')', () => {
    const city = mockz.city('广西壮族自治区');
    debug(city);
    city.should.be.a('string');
  });
});

describe('县级', () => {
  it('#county', () => {
    const county = mockz.county();
    debug(county);
    county.should.be.a('string');
  });

  it('#county(\'北京市\')', () => {
    const county = mockz.county('北京市');
    debug(county);
    county.should.be.a('string');
  });

  it('#county(\'广西壮族自治区\', \'贵港市\')', () => {
    const county = mockz.county('广西壮族自治区', '贵港市');
    debug(county);
    county.should.be.a('string');
  });
});

describe('地址', () => {
  it('#address', () => {
    const addr = mockz.address();
    debug(addr);
    addr.should.be.a('string');
  });
});
