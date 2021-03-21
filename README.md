[![All dependencies](https://img.shields.io/librariesio/release/npm/global-time/1.4.0?style=flat-square "All dependencies of global-time@1.4.0")](https://libraries.io/npm/global-time/1.4.0)
[![Reported vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/global-time@1.4.0?style=flat-square "Reported vulnerabilities of global-time@1.4.0")](https://snyk.io/test/npm/global-time/1.4.0)
[![Commits](https://flat.badgen.net/github/commits/ArthurKa/global-time)](https://github.com/ArthurKa/global-time/commits/master)
[![NPM-version](https://img.shields.io/badge/npm-v1.4.0-blue.svg?style=flat-square&&logo=npm "Current NPM-version")](https://www.npmjs.com/package/global-time/v/1.4.0)
[![Total downloads](https://img.shields.io/npm/dt/global-time?style=flat-square "Total downloads for all the time")](https://npm-stat.com/charts.html?package=global-time)
[![Developed by](https://img.shields.io/badge/developed_by-ArthurKa-blueviolet.svg?style=flat-square "Have any questions? You are always welcome.")](https://github.com/ArthurKa/global-time/issues)\
[![Publish size](https://flat.badgen.net/packagephobia/publish/global-time@1.4.0?label=publish 'Publish size of global-time@1.4.0')](https://packagephobia.now.sh/result?p=global-time@1.4.0)
[![Install size](https://flat.badgen.net/packagephobia/install/global-time@1.4.0?label=install 'Install size of global-time@1.4.0')](https://packagephobia.now.sh/result?p=global-time@1.4.0)
[![Minified size](https://img.shields.io/bundlephobia/min/global-time@1.4.0?style=flat-square&label=minified "Minified size of global-time@1.4.0")](https://bundlephobia.com/result?p=global-time@1.4.0)
[![Minified + gzipped size](https://img.shields.io/bundlephobia/minzip/global-time@1.4.0?style=flat-square&label=minzipped "Minified + gzipped size of global-time@1.4.0")](https://bundlephobia.com/result?p=global-time@1.4.0)

# global-time@1.4.0

Gets UTC real time in milliseconds with 0.001 precision from http://worldtimeapi.org/api/timezone/Etc/UTC. \
From v1.3.0 no longer supports https://time.gov/actualtime.cgi due missing time value.

**It's completely not dependent on machine local time.**

## Installation
`global-time` is available via npm:
``` bash
$ npm i global-time@1.4.0
```

## Usage
```ts
const globalTime = require('global-time');

(async () => {
  const time = await globalTime();
  const date = new Date(time);

  console.log(time);  // 1560529986678.603
  console.log(date);  // 2019-06-14T16:33:06.678Z
})();
```

## Testing
``` bash
$ npm test
```

---

Your improve suggestions and bug reports [are welcome](https://github.com/ArthurKa/global-time/issues) any time.
