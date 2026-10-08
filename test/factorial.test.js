import { test } from 'node:test';
import assert from 'node:assert/strict';
import { factorial, MAX_FACTORIAL_INPUT } from '../src/factorial.js';

test('factorial of 0 and 1 is 1', () => {
  assert.equal(factorial(0), 1);
  assert.equal(factorial(1), 1);
});

test('factorial of small integers', () => {
  assert.equal(factorial(5), 120);
  assert.equal(factorial(10), 3628800);
});

test('factorial of the largest accepted input', () => {
  assert.equal(MAX_FACTORIAL_INPUT, 18);
  assert.equal(factorial(18), 6402373705728000);
});

test('factorial rejects non-integers with TypeError', () => {
  for (const value of [1.5, '3', NaN, null, undefined]) {
    assert.throws(() => factorial(value), TypeError);
  }
});

test('factorial rejects out-of-range integers with RangeError', () => {
  assert.throws(() => factorial(-1), RangeError);
  assert.throws(() => factorial(19), RangeError);
});
