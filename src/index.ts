import fetch from 'node-fetch';

const url = 'http://worldtimeapi.org/api/timezone/Etc/UTC';
let ip: string;

interface Timezone {
  utc_datetime: string;
  client_ip: string;
}

export default async function globalTime() {
  let obj: Timezone;
  try {
    obj = await fetch(url).then(e => e.json());
  } catch(e: any) {
    if(e.code === 'ENOTFOUND') {
      throw new Error(`"${url}" is currently unavailable.`);
    } else if(e.type === 'invalid-json') {
      throw new Error(`Too many requests for "${url}"${ip ? ` from ip "${ip}"` : ''}. Try a bit later.`);
    }
    throw e;
  }
  ip = obj.client_ip;

  const [, tail = ''] = obj.utc_datetime.match(/:\d+.\d{3}(\d*)\+/) || [];
  const time = +`${+new Date(obj.utc_datetime)}.${tail}`;

  return time;
}
