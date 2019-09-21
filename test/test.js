'use strict';

const assert = require('assert');
const globalTime = require('..');

const sleep = s => new Promise(res => setTimeout(res, s*1000));

describe('global-time', () => {
  it('should be a function', () => {
    assert.equal(typeof globalTime, 'function');
  });

  it('should not throw an exception', async () => {
    let result = true;
    try {
      await globalTime();
    } catch(e) {
      result = false;
    }
    assert.ok(result);
  });

  it('should return a promise', () => {
    assert.ok(globalTime() instanceof Promise);
  });

  it('result should be a number', async () => {
    assert.equal(typeof await globalTime(), 'number');
  });

  it('should have 0.001 precision', async () => {
    const getTime = async () => String(await globalTime() * 1000).replace(/\..*$/, '');

    const strTimes = await Promise.all(new Array(2).fill().map(() => getTime()));
    assert.ok(strTimes.some(e => !e.endsWith('000')));
  });

  it('probably works correct', async () => {
    const testingTime1 = await globalTime();
    const realTime1 = Date.now();

    await sleep(0.5);

    const testingTime2 = await globalTime();
    const realTime2 = Date.now();

    const diffTesting = Math.round(testingTime2 - testingTime1);
    const diffReal = Math.round(realTime2 - realTime1);
    const diff = Math.abs(diffTesting - diffReal);
    assert.ok(diff <= 50);
  });
});
