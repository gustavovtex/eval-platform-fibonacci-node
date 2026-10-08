# 001 — factorial

## Goal

Provide `factorial(n)`, the product of all positive integers up to `n`.

## Requirements

1. `factorial(n)` is exported from `src/factorial.js`.
2. `factorial(0)` is `1`.
3. For an integer `n` from 1 to 18, `factorial(n)` returns `n!` as a `number`. 18! is the largest
   factorial below `Number.MAX_SAFE_INTEGER`.
4. Any other input throws:
   - `TypeError` when `n` is not an integer `number` (for example `1.5`, `'3'`, `NaN`).
   - `RangeError` when `n` is an integer below 0 or above 18.

## Out of scope

Factorials above 18 (they need `BigInt`).
