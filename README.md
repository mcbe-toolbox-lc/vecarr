# @mcbe-toolbox-lc/vecarr

[![NPM Version](https://img.shields.io/npm/v/%40mcbe-toolbox-lc%2Fvecarr)](https://www.npmjs.com/package/@mcbe-toolbox-lc/vecarr)
[![GitHub Tag](https://img.shields.io/github/v/tag/mcbe-toolbox-lc/vecarr)](https://github.com/mcbe-toolbox-lc/vecarr/tags)

MCBE's `Vector3` type looks like this: `{x,y,z}`

Popular vector libraries (like [glMatrix](https://glmatrix.net/)) use an array type that looks like this: `[x,y,z]`

Uh oh, **type mismatch...** :broken_heart:

So I created this package, which contains **small utilities to convert** `{x,y,z}` to `[x,y,z]`
and vice versa. :thumbsup:

I also added a **hybrid class** that can behave as both `{x,y,z}` and `[x,y,z]` with one instance,
and it feels so good to use. :weary:

## Usage

Run the following command in your project directory to install vecarr:

```bash
npm install @mcbe-toolbox-lc/vecarr --save-dev
```

Also, I highly recommend [builder](https://github.com/mcbe-toolbox-lc/builder) as a build tool. :hammer_and_wrench:
