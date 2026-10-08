import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fibonacci, fibonacciBig, MAX_FIBONACCI_INPUT } from '../src/fibonacci.js';

test('fibonacciBig returns bigint', () => {
  assert.equal(fibonacciBig(0), 0n);
  assert.equal(fibonacciBig(1), 1n);
  assert.equal(typeof fibonacciBig(10), 'bigint');
});

test('fibonacciBig agrees with fibonacci up to F(78)', () => {
  for (let n = 0; n <= MAX_FIBONACCI_INPUT; n += 1) {
    assert.equal(fibonacciBig(n), BigInt(fibonacci(n)));
  }
});

test('fibonacciBig goes beyond F(78)', () => {
  assert.equal(fibonacciBig(79), 14472334024676221n);
  assert.equal(fibonacciBig(100), 354224848179261915075n);
});

test('fibonacciBig validates input with no upper bound', () => {
  for (const value of [1.5, '3', NaN, 10n]) assert.throws(() => fibonacciBig(value), TypeError);
  assert.throws(() => fibonacciBig(-1), RangeError);
  assert.doesNotThrow(() => fibonacciBig(1000));
});
