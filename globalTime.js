'use strict';

const fetch = require('node-fetch');

const url = 'http://worldtimeapi.org/api/timezone/Etc/UTC';

let ip;
async function globalTime() {
  let obj;
  try {
    obj = await (await fetch(url)).json();
  } catch(e) {
    if(e.code === 'ENOTFOUND') {
      throw new Error(`"${url}" is currently unavailable.`);
    } else if(e.type === 'invalid-json') {
      throw new Error(`Too many requests for "${url}"${ip ? ` from ip "${ip}"` : ''}. Try a bit later.`);
    } else {
      throw e;
    }
  }
  ip = obj.client_ip;

  const tail = (obj.utc_datetime.match(/:\d+.\d{3}(\d*)\+/) || [, ''])[1];
  const time = +`${+new Date(obj.utc_datetime)}.${tail}`;
  return time;
}

module.exports = globalTime;