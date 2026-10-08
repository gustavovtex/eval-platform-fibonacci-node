/** The largest n whose factorial stays below Number.MAX_SAFE_INTEGER. */
export const MAX_FACTORIAL_INPUT = 18;

/**
 * n! for an integer n from 0 to 18 (specs/001-factorial).
 * @param {number} n
 * @returns {number}
 */
export function factorial(n) {
  if (!Number.isInteger(n)) throw new TypeError(`factorial expects an integer, got ${String(n)}`);
  if (n < 0 || n > MAX_FACTORIAL_INPUT) {
    throw new RangeError(`factorial expects 0 <= n <= ${MAX_FACTORIAL_INPUT}, got ${n}`);
  }
  let result = 1;
  for (let i = 2; i <= n; i += 1) result *= i;
  return result;
}
