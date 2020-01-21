[![All dependencies](https://img.shields.io/librariesio/release/npm/global-time/1.3.9?style=flat-square "All dependencies of global-time@1.3.9")](https://libraries.io/npm/global-time/1.3.9)
[![Reported vulnerabilities](https://img.shields.io/snyk/vulnerabilities/npm/global-time@1.3.9?style=flat-square "Reported vulnerabilities of global-time@1.3.9")](https://snyk.io/test/npm/global-time/1.3.9)
[![NPM-version](https://img.shields.io/badge/npm-v1.3.9-blue.svg?style=flat-square "Current NPM-version")](https://www.npmjs.com/package/global-time/v/1.3.9)
[![Install size](https://flat.badgen.net/packagephobia/install/global-time@1.3.9?label=size 'Install size of global-time@1.3.9')](https://packagephobia.now.sh/result?p=global-time@1.3.9)
[![Total downloads](https://img.shields.io/npm/dt/global-time?style=flat-square "Total downloads for all the time")](https://npm-stat.com/charts.html?package=global-time)

# global-time@1.3.9

Gets UTC real time in milliseconds with 0.001 precision from http://worldtimeapi.org/api/timezone/Etc/UTC. \
From v1.3.0 no longer supports https://time.gov/actualtime.cgi due missing time value.

**It's completely not dependent on machine local time.**

## Installation
`global-time` is available via npm:
``` bash
$ npm i global-time@1.3.9
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
