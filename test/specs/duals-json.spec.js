import { mount } from '@vue/test-utils'
import test from 'ava'
const data5 = require('../../text-results/2020-01-04-duals.json');
const data6 = require('../../text-results/2020-01-26-duals.json');

test('spot check 1/4/20 duals event', (t) => {
  t.is(data5.info.date, '1/4/20');
  t.is(data5.info.format, 'duals');
  t.is(data5.info.numberOfSinglesRuns, undefined);
  t.is(data5.results.male.length, 33);
  t.is(data5.results.female.length, 26);
  t.is(data5.info.judges.length, 5);
});

test('spot check 1/26/20 duals event', (t) => {
  t.is(data6.info.date, '1/26/20');
  t.is(data6.info.format, 'duals');
  t.is(data6.info.numberOfSinglesRuns, undefined);
  t.is(data6.results.male.length, 23);
  t.is(data6.results.female.length, 25);
  t.is(data6.info.judges.length, 5);
});

