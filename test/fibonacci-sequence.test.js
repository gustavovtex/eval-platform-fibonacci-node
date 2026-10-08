import { test } from 'node:test';
import assert from 'node:assert/strict';
import { fibonacciBig, fibonacciSequence, MAX_SEQUENCE_LENGTH } from '../src/fibonacci.js';

test('fibonacciSequence of 0 is empty', () => {
  assert.deepEqual(fibonacciSequence(0), []);
});

test('fibonacciSequence starts with the first Fibonacci numbers', () => {
  assert.deepEqual(fibonacciSequence(8), [0n, 1n, 1n, 2n, 3n, 5n, 8n, 13n]);
});

test('every term matches fibonacciBig', () => {
  const sequence = fibonacciSequence(200);
  assert.equal(sequence.length, 200);
  sequence.forEach((term, n) => assert.equal(term, fibonacciBig(n)));
});

test('fibonacciSequence accepts the cap and rejects beyond it', () => {
  assert.equal(MAX_SEQUENCE_LENGTH, 10000);
  assert.equal(fibonacciSequence(10000).length, 10000);
  assert.throws(() => fibonacciSequence(10001), RangeError);
});

test('fibonacciSequence validates count', () => {
  for (const value of [1.5, '3', NaN, 10n]) assert.throws(() => fibonacciSequence(value), TypeError);
  assert.throws(() => fibonacciSequence(-1), RangeError);
});
