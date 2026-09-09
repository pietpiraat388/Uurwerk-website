import test from 'node:test';
import assert from 'node:assert/strict';
import { remainingHoursPlan } from '../src/lib/hours.mjs';

test('remaining hours and weekly target for a realistic working year', () => {
  assert.deepEqual(remainingHoursPlan(800, 17), {remaining:425,weekly:25,reached:false});
  assert.equal(remainingHoursPlan(0, 48).weekly, 1225/48);
});
test('zero remaining weeks does not produce infinity or a false eligibility claim', () => {
  assert.deepEqual(remainingHoursPlan(1200, 0), {remaining:25,weekly:null,reached:false});
  assert.deepEqual(remainingHoursPlan(1225, 0), {remaining:0,weekly:null,reached:true});
  assert.equal(remainingHoursPlan(1400, 4).remaining, 0);
});
test('invalid inputs do not become plausible totals', () => {
  for (const [hours,weeks] of [[NaN,10],[-1,10],[Infinity,10],[0,-1],[0,54],[0,NaN]]) {
    assert.throws(()=>remainingHoursPlan(hours,weeks), RangeError);
  }
});
