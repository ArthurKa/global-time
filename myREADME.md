<header>

Gets UTC real time in milliseconds with 0.001 precision from http://worldtimeapi.org/api/timezone/Etc/UTC. \
From v1.3.0 no longer supports https://time.gov/actualtime.cgi due missing time value.

**It's completely not dependent on machine local time.**

<installation>

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

<testing>

<suggestions>
