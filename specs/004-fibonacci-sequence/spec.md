# 004 — fibonacci sequence

## Goal

Provide `fibonacciSequence(count)`, the first `count` Fibonacci numbers, for callers that need the
whole sequence instead of a single term.

## Requirements

1. `fibonacciSequence(count)` is exported from `src/fibonacci.js` and returns an array of `count`
   `bigint` values: `[F(0), F(1), ..., F(count - 1)]`. `fibonacciSequence(0)` is `[]`.
2. `count` is validated like `fibonacciBig(n)`: `TypeError` when it is not an integer `number`,
   `RangeError` when it is below 0. It is also capped: `RangeError` when it is above 10000.
3. The sequence is built in a single pass, O(count). Calling `fibonacciBig` once per term
   (O(count²)) does not meet this requirement.
4. Every call returns a new array. A caller may sort, fill or truncate the array it received, and
   no later call returns a different result because of it. In particular, a module-level cache, if
   one is used, is never handed to the caller.
5. `fibonacciSequence(10000)` completes in under 100 ms on a current laptop.
6. `README.md` lists this spec and shows `fibonacciSequence` in the usage example.
