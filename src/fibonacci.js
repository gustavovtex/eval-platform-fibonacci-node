/** The largest n whose Fibonacci number stays below Number.MAX_SAFE_INTEGER. */
export const MAX_FIBONACCI_INPUT = 78;

/**
 * F(n) for an integer n from 0 to 78 (specs/002-fibonacci), computed iteratively in O(n).
 * @param {number} n
 * @returns {number}
 */
export function fibonacci(n) {
  let previous = 0;
  let current = 1;
  for (let i = 0; i < n; i += 1) [previous, current] = [current, previous + current];
  return previous;
}
