/** The largest n whose Fibonacci number stays below Number.MAX_SAFE_INTEGER. */
export const MAX_FIBONACCI_INPUT = 78;

function assertNonNegativeInteger(name, n) {
  if (!Number.isInteger(n)) throw new TypeError(`${name} expects an integer, got ${String(n)}`);
  if (n < 0) throw new RangeError(`${name} expects n >= 0, got ${n}`);
}

/**
 * F(n) for an integer n from 0 to 78 (specs/002-fibonacci, 003), computed iteratively in O(n).
 * @param {number} n
 * @returns {number}
 */
export function fibonacci(n) {
  assertNonNegativeInteger('fibonacci', n);
  if (n > MAX_FIBONACCI_INPUT) {
    throw new RangeError(`fibonacci expects n <= ${MAX_FIBONACCI_INPUT}, got ${n}; use fibonacciBig`);
  }
  let previous = 0;
  let current = 1;
  for (let i = 0; i < n; i += 1) [previous, current] = [current, previous + current];
  return previous;
}

/**
 * F(n) as a bigint for any integer n >= 0 (specs/003-fibonacci-validation-bigint), iterative, O(n).
 * @param {number} n
 * @returns {bigint}
 */
export function fibonacciBig(n) {
  assertNonNegativeInteger('fibonacciBig', n);
  let previous = 0n;
  let current = 1n;
  for (let i = 0; i < n; i += 1) [previous, current] = [current, previous + current];
  return previous;
}
