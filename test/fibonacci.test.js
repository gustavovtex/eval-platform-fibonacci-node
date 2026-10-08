import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fibonacci, MAX_FIBONACCI_INPUT } from '../src/fibonacci.js';

test('fibonacci of 0 and 1', () => {
  assert.equal(fibonacci(0), 0);
  assert.equal(fibonacci(1), 1);
});

test('the first Fibonacci numbers', () => {
  const expected = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55];
  assert.deepEqual(expected.map((_, n) => fibonacci(n)), expected);
});

test('fibonacci of the largest accepted input', () => {
  assert.equal(MAX_FIBONACCI_INPUT, 78);
  assert.equal(fibonacci(78), 8944394323791464);
  assert.ok(Number.isSafeInteger(fibonacci(78)));
});

test('fibonacci rejects non-integers with TypeError', () => {
  for (const value of [1.5, '3', NaN, null, undefined, 10n]) {
    assert.throws(() => fibonacci(value), TypeError);
  }
});

test('fibonacci rejects out-of-range integers with RangeError', () => {
  assert.throws(() => fibonacci(-1), RangeError);
  assert.throws(() => fibonacci(79), RangeError);
});
