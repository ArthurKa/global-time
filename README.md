Gets real time in milliseconds with 0.001 precision from https://time.gov in UTC.

**It's completely not dependent on your system or local time.**

## Installation
`global-time` is available via npm:
``` bash
$ npm i global-time
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
