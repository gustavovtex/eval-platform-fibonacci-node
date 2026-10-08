# 002 — fibonacci

## Goal

Provide `fibonacci(n)`, the n-th Fibonacci number, with `F(0) = 0`, `F(1) = 1` and
`F(n) = F(n - 1) + F(n - 2)`.

## Requirements

1. `fibonacci(n)` is exported from `src/fibonacci.js`.
2. For an integer `n` from 0 to 78, `fibonacci(n)` returns `F(n)` as a `number`. F(78) is the
   largest Fibonacci number below `Number.MAX_SAFE_INTEGER`.
3. The computation is iterative and runs in O(n) time: no recursion, no exponential blow-up.
4. `README.md` lists the new function in its specs table and shows a usage example.

## Out of scope

Input validation and values above F(78). They come in a later spec.
