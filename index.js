'use strict';

const fetch = require('node-fetch');
const XMLParser = require('xml-parser');

const url = 'https://time.gov/actualtime.cgi';

async function globalTime() {
  let xml;
  try {
    xml = await (await fetch(url)).text();
  } catch(e) {
    if(e.code === 'ENOTFOUND') {
      throw new Error(`"${url}" is currently unavailable`);
    } else {
      throw e;
    }
  }

  const obj = XMLParser(xml);
  let time;
  try {
    time = obj.root.attributes.time / 1000;
  } catch(e) {
    if(e.name === 'TypeError') {
      throw new Error(`"${url}" returned wrong XML format`);
    } else {
      throw e;
    }
  }

  return time;
}

module.exports = globalTime;
