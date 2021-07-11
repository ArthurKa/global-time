<header>

Gets UTC real time in milliseconds with 0.001 precision from http://worldtimeapi.org/api/timezone/Etc/UTC. \
From v1.3.0 no longer supports https://time.gov/actualtime.cgi due missing time value.

**It's completely not dependent on machine local time.**

<installation>

## Usage
```ts
import globalTime from './global-time/src';

(async () => {
  const time = await globalTime();
  const date = new Date(time);

  console.log(time);  // 1616323147279.481
  console.log(date);  // 2021-03-21T10:39:07.279Z
})();
```

<testing>

<suggestions>
