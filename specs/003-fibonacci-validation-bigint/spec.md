# 003 — fibonacci: input validation and BigInt

## Goal

Make `fibonacci(n)` refuse bad input the same way `factorial(n)` does, and add `fibonacciBig(n)`
for Fibonacci numbers beyond F(78).

## Requirements

1. `fibonacci(n)` keeps its behavior for integers from 0 to 78, and now throws:
   - `TypeError` when `n` is not an integer `number` (for example `1.5`, `'3'`, `NaN`, `10n`).
   - `RangeError` when `n` is an integer below 0 or above 78.
2. `fibonacciBig(n)` is exported from `src/fibonacci.js` and returns `F(n)` as a `bigint` for any
   integer `n >= 0`. It accepts `n` as a `number` only.
3. `fibonacciBig(n)` throws `TypeError` and `RangeError` under the same rules as item 1, except that
   there is no upper bound.
4. For every `n` from 0 to 78, `fibonacciBig(n) === BigInt(fibonacci(n))`.
5. Both functions stay iterative and O(n).
6. `README.md` lists this spec and shows `fibonacciBig` in the usage example.
