---
outline: deep
---

# What is `chroma.js`?
`chroma.js` is a [small-ish](https://bundlephobia.com/result?p=chroma-js) zero-dependency JavaScript library (13.5kB) for all kinds of color conversions and color scales.

## Quick-start
Here are a couple of things chroma.js can do for you:

- read colors from a wide range of formats
- analyze and manipulate colors
- convert colors into wide range of formats
- linear and bezier interpolation in different color spaces

Here's an example for a simple read / manipulate / output chain:

```ts
chroma('pink').darken().saturate(2).hex() // "#ff6d93"
```

Aside from that, chroma.js can also help you generate nice colors using various methods, for instance to be used in color palette for maps or data visualization.

```ts
chroma.scale(['#fafa6e', '#2A4858']).mode('lch').colors(6)
// ['#fafa6e','#9cdf7c','#4abd8c','#00968e','#106e7c','#2a4858']
```

chroma.js has a lot more to offer, but that's the gist of it.

## Installation

For Node.js: Install the `chroma-js` npm module using your favorite package manager:

::: code-group

```sh [npm]
$ npm install chroma-js
```

```sh [yarn]
$ yarn add chroma-js
```

```sh [pnpm]
$ pnpm add chroma-js
```

:::

Then import the module into your JavaScript:

```ts
import chroma from 'chroma-js'
```

If you just want to use parts of `chroma.js` and not bundle the entire package, you can import directly from `chroma-js/src/*` to benefit from treeshaking.

For instance, the following import would only result in a [1.24kB bundle increase](https://bundlejs.com/?q=chroma-js%2Fsrc%2Futils%2Fdelta-e.js&treeshake=%5B*+as+default%5D&config=%7B%22analysis%22%3A%22treemap%22%7D):

```ts
import deltaE from 'chroma-js/src/utils/deltaE.js'
```

And for browsers, download [`chroma.min.js`](https://unpkg.com/chroma-js/dist/chroma.min.cjs) or use the [hosted version on unpkg.com](https://unpkg.com/chroma-js/dist/chroma.min.cjs).

You can also just import chroma.js as ES module, as demonstrated in this [StackBlitz](https://stackblitz.com/edit/stackblitz-starters-axiqsz?description=HTML/CSS/JS%20Starter&file=script.js,styles.css&terminalHeight=10&title=Static%20Starter).

To use chroma.js in [Observable notebooks](https://observablehq.com/), you can import it like this:

```ts
import { chroma } from '@gka/chroma-js'
```
