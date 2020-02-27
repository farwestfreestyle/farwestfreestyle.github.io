import { mount } from '@vue/test-utils'
import test from 'ava'
const data1 = require('../../text-results/2020-01-03-singles.json');
const data2 = require('../../text-results/2020-01-04-singles.json');
const data3 = require('../../text-results/2020-01-25-singles.json');
const data4 = require('../../text-results/2020-01-26-singles.json');

test('spot check 1/3/20 singles event', (t) => {
  t.is(data1.info.date, '1/3/20');
  t.is(data1.info.format, 'singles');
  t.is(data1.info.numberOfSinglesRuns, 2);
  t.is(data1.results.male.length, 40);
  t.is(data1.results.female.length, 34);
  t.is(data1.info.judges.length, 5);
});

test('spot check 1/4/20 singles event', (t) => {
  t.is(data2.info.date, '1/4/20');
  t.is(data2.info.format, 'singles');
  t.is(data2.info.numberOfSinglesRuns, 1);
  t.is(data2.results.male.length, 33);
  t.is(data2.results.female.length, 31);
  t.is(data2.info.judges.length, 5);
});

test('spot check 1/25/20 singles event', (t) => {
  t.is(data3.info.date, '1/25/20');
  t.is(data3.info.format, 'singles');
  t.is(data3.info.numberOfSinglesRuns, 2);
  t.is(data3.results.male.length, 30);
  t.is(data3.results.female.length, 34);
  t.is(data3.info.judges.length, 4);
});

test('spot check 1/26/20 singles event', (t) => {
  t.is(data4.info.date, '1/26/20');
  t.is(data4.info.format, 'singles');
  t.is(data4.info.numberOfSinglesRuns, 1);
  t.is(data4.results.male.length, 29);
  t.is(data4.results.female.length, 28);
  t.is(data4.info.judges.length, 5);
});
