# eval-platform-fibonacci-node

Small number utilities in plain Node.js, with no dependencies.

This repository is a fixture for the [eval platform](https://github.com/vtex/eval-platform): its
pull requests are small, each one carries its own spec under `specs/`, and the whole test suite
runs in under a second. That makes it a cheap way to check that an evaluation works end to end,
locally and in production. It is not meant to tell models apart: the tasks are too easy for that.

A twin repository, `eval-platform-fibonacci-python`, has the same history in Python.

## Usage

```js
import { factorial } from './src/factorial.js';
import { fibonacci, fibonacciBig, fibonacciSequence } from './src/fibonacci.js';

factorial(5); // 120
fibonacci(10); // 55
fibonacciBig(100); // 354224848179261915075n
fibonacciSequence(5); // [0n, 1n, 1n, 2n, 3n]
```

## Tests

```sh
npm test
```

Node.js 20 or newer. No `npm install` is needed: the tests use the built-in `node:test` runner.

## Specs

Every change starts with a spec in `specs/NNN-name/spec.md`.

| Spec | Feature |
|---|---|
| [001-factorial](specs/001-factorial/spec.md) | `factorial(n)` |
| [002-fibonacci](specs/002-fibonacci/spec.md) | `fibonacci(n)` |
| [003-fibonacci-validation-bigint](specs/003-fibonacci-validation-bigint/spec.md) | input validation, `fibonacciBig(n)` |
| [004-fibonacci-sequence](specs/004-fibonacci-sequence/spec.md) | `fibonacciSequence(count)` |
