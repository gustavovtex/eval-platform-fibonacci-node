/** The largest n whose Fibonacci number stays below Number.MAX_SAFE_INTEGER. */
export const MAX_FIBONACCI_INPUT = 78;

/** The longest sequence fibonacciSequence builds (specs/004-fibonacci-sequence). */
export const MAX_SEQUENCE_LENGTH = 10000;

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

/** Module-level cache holding [F(0), ..., F(length - 1)]. */
const sequenceCache = [];

/**
 * [F(0), ..., F(count - 1)] as bigints, built in one pass (specs/004-fibonacci-sequence).
 * The terms are kept in a module-level cache that grows on demand; the cache array itself is
 * returned to the caller.
 * @param {number} count
 * @returns {bigint[]}
 */
export function fibonacciSequence(count) {
  assertNonNegativeInteger('fibonacciSequence', count);
  if (count > MAX_SEQUENCE_LENGTH) {
    throw new RangeError(`fibonacciSequence expects count <= ${MAX_SEQUENCE_LENGTH}, got ${count}`);
  }
  if (sequenceCache.length < 2) {
    sequenceCache.length = 0;
    sequenceCache.push(0n, 1n);
  }
  while (sequenceCache.length < count) {
    const length = sequenceCache.length;
    sequenceCache.push(sequenceCache[length - 1] + sequenceCache[length - 2]);
  }
  sequenceCache.length = count;
  return sequenceCache;
}
