# global-time@1.3.6

[![Dependencies](https://img.shields.io/librariesio/release/npm/global-time/1.3.6)](https://libraries.io/npm/global-time/1.3.6)
[![Vulnerabilities](https://snyk.io/test/npm/global-time/1.3.6/badge.svg)](https://snyk.io/test/npm/global-time/1.3.6)
[![Install size](https://packagephobia.now.sh/badge?p=global-time@1.3.6)](https://packagephobia.now.sh/result?p=global-time@1.3.6)
[![NPM-version](https://img.shields.io/badge/npm-v1.3.6-blue.svg)](https://www.npmjs.com/package/global-time/v/1.3.6)
[![Total downloads](https://img.shields.io/npm/dt/global-time?label=total%20downloads)](https://npm-stat.com/charts.html?package=global-time)

Gets UTC real time in milliseconds with 0.001 precision from http://worldtimeapi.org/api/timezone/Etc/UTC.\
No longer supports https://time.gov/actualtime.cgi due missing time value.

**It's completely not dependent on local time.**

## Installation
`global-time` is available via npm:
``` bash
$ npm i global-time@1.3.6
```

## Usage
``` js
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

Your improve suggestions and bug reports are welcome any time.
