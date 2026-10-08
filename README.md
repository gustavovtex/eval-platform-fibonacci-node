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

factorial(5); // 120
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
