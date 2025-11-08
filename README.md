# @mcbe-toolbox-lc/vecarr

[![NPM Version](https://img.shields.io/npm/v/%40mcbe-toolbox-lc%2Fvecarr)](https://www.npmjs.com/package/@mcbe-toolbox-lc/vecarr)
[![GitHub Tag](https://img.shields.io/github/v/tag/mcbe-toolbox-lc/vecarr)](https://github.com/mcbe-toolbox-lc/vecarr/tags)

Recently I discovered [glMatrix](https://glmatrix.net/), an awesome matrix and vector calculation library for JavaScript.
I wanted to use it in MCBE scripts, but I've encountered a big issue!

MCBE's `Vector3` type looks like this: `{ x: number; y: number; z: number; }`

But glMatrix's `vec3` type looks like this: `[number, number, number]`

**TYPE MISMATCH!!!**

So I created this package, which contains small utilities to convert `Vector3` to `vec3` and vice versa.
