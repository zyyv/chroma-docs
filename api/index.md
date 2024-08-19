---
outline: deep
---

# chroma <sub>(color)</sub>
The first step is to get your color into chroma.js. That's what the generic constructor `chroma()` does. This function attempts to guess the format of the input color for you. For instance, it will recognize any named color from the W3CX11 specification:

```ts
chroma('hotpink') // #ff69b4
```

If there's no matching named color, chroma.js checks for a **hexadecimal string**. It ignores case, the `#` sign is optional, and it can recognize the shorter three letter format as well. So, any of these are valid hexadecimal representations: <span class="c-#ff3399">#ff3399</span>, <span class="c-#FF3399">FF3399</span>, <span class="c-#f39">#f39</span>, etc.

```ts
chroma('#ff3399') // #ff3399
chroma('F39') // #ff3399
```
In addition to hex strings, hexadecimal numbers (in fact, just any number between `0` and `16777215`) will be recognized, too.

```ts
chroma(0xFF3399) // #ff3399
```

You also can pass RGB values individually. Each parameter must be within `0..255`. You can pass the numbers as individual arguments or as an array.

```ts
chroma(0xFF, 0x33, 0x99) // #ff3399
chroma(255, 51, 153) // #ff3399
chroma([255, 51, 153]) // #ff3399
```
You can construct colors from different color spaces by passing the name of color space as the last argument. Here we define the same color in HSL by passing the *hue* angle (0-360) and percentages for *saturation* and *lightness*:

```ts
chroma(330, 1, 0.6, 'hsl') // #ff3399
```

**New (since 2.0)**: you can also construct colors by passing an plain JS object with attributes corresponding to a color space supported by chroma.js:

```ts
chroma({ h: 120, s: 1, l: 0.75 }) // #80ff80
chroma({ l: 80, c: 25, h: 200 }) // #85d4d5
chroma({ c: 1, m: 0.5, y: 0, k: 0.2 }) // #0066cc
```
## chroma.valid
Also new: you can use `chroma.valid` to try if a color argument can be correctly parsed as color by chroma.js:

```ts
chroma.valid('red') // true
chroma.valid('bread') // false
chroma.valid('#F0000D') // true
chroma.valid('#FOOOOD') // false
```

## chroma.hsl (hue, saturation, lightness)
Alternatively, every color space has its own constructor function under the **chroma** namespace. For a list of all supported color spaces, check the appendix.

```ts
chroma.hsl(330, 1, 0.6) // #ff3399
```

## chroma.hsv(hue, saturation, value)

## chroma.lab(Lightness, a, b)
CIE Lab color space. To calculate the lightness value of a color, the CIE Lab color space uses a reference white point. This reference white point defines what is considered to be "white" in the color space. By default chroma.js is using the D65 reference point.

```ts
chroma.lab(40, -20, 50) // #536600
chroma.lab(50, -20, 50) // #6e7f15
chroma.lab(80, -20, 50) // #c0cf66
```

## chroma.setLabWhitePoint(whitePoint)

Sets the current CIE Lab white reference point.

Possible values:

| Value | Description |
| --- | --- |
| `D50` | Represents the color temperature of daylight at 5000K. |
| `D55` | Represents mid-morning or mid-afternoon daylight at 5500K. |
| `D65` | Represents average daylight at 6500K. |
| `A` | Represents the color temperature of a typical incandescent light bulb at approximately 2856K. |
| `B` | Represents noon daylight with a color temperature of approximately 4874K. |
| `C` | Represents average or north sky daylight; it's a theoretical construct, not often used in practical applications. |
| `F2` | Represents cool white fluorescent light. |
| `F7` | This is a broad-band fluorescent light source with a color temperature of approximately 6500K. |
| `F11` | This is a narrow tri-band fluorescent light source with a color temperature of approximately 4000K. |
| `E` | Represents an equal energy white point, where all wavelengths in the visible spectrum are equally represented. |

```ts
chroma('hotpink').lab() // [65.49,64.24,-10.65]
chroma.setLabWhitePoint('F2')
chroma('hotpink').lab() // [66.28,61.45,-8.62]
```

## chroma.getLabWhitePoint
Returns the name of the currently set CIE Lab white reference point.

```ts
chroma.getLabWhitePoint() // "D65"
```

## chroma.lch(Lightness, chroma, hue)
The range for `lightness` and `chroma` depend on the hue, but go roughly from 0..100-150. The range for `hue` is 0..360.

```ts
chroma.lch(80, 40, 130) // #aad28c
chroma(80, 40, 130, 'lch') // #aad28c
```

## chroma.hcl(hue, chroma, lightness)
You can use **hcl** instead of Lch. Lightness and hue channels are switched to be more consistent with HSL.

```ts
chroma.hcl(130, 40, 80) // #aad28c
chroma(130, 40, 80, 'hcl') // #aad28c
```

## chroma.oklab(Lightness, a, b)
[Oklab color space](https://bottosson.github.io/posts/oklab/)

```ts
chroma.oklab(0.4, -0.2, 0.5) // #624400
chroma.oklab(0.5, -0.2, 0.5) // #806100
chroma.oklab(0.8, -0.2, 0.5) // #d9c500
```

## chroma.oklch(Lightness, chromacity, hue)

```ts
chroma.oklch(0.5, 0.2, 240) // #0069c7
chroma(0.8, 0.12, 60, 'oklch') // #f6ab6b
```

## chroma.cmyk(cyan, magenta, yellow, black)
Each between 0 and 1.

```ts
chroma.cmyk(0.2, 0.8, 0, 0) // #cc33ff
chroma(0.2, 0.8, 0, 0, 'cmyk') // #cc33ff
```

## chroma.gl(red, green, blue, [alpha])
**GL** is a variant of RGB(A), with the only difference that the components are normalized to the range of `0..1`.

```ts
chroma.gl(0.6, 0, 0.8) // #9900cc
chroma.gl(0.6, 0, 0.8, 0.5) // #9900cc80
chroma(0.6, 0, 0.8, 'gl') // #9900cc
```

## chroma.temperature(K)
Returns a color from the [color temperature](http://www.zombieprototypes.com/?p=210) scale. Based on [Neil Bartlett's implementation](https://github.com/neilbartlett/color-temperature).

```ts
chroma.temperature(2000) // candle light // #ff8b14
chroma.temperature(3500) // sunset // #ffc38a
chroma.temperature(6500) // daylight // #fffafe
```

The effective temperature range goes from `0` to about `30000` Kelvin,

```ts
f = function (i) {
  return chroma.temperature(i * 30000) // todo
}
```

## chroma.mix(color1, color2, ratio=0.5, mode='lrgb')
Mixes two colors. The mix ratio is a value between 0 and 1.

```ts
chroma.mix('red', 'blue') // #b400b4
chroma.mix('red', 'blue', 0.25) // #dd0080
chroma.mix('red', 'blue', 0.75) // #8000dd
```

The color mixing produces different results based the color space used for interpolation.

```ts
chroma.mix('red', 'blue', 0.5, 'rgb') // #800080
chroma.mix('red', 'blue', 0.5, 'hsl') // ff00ff
chroma.mix('red', 'blue', 0.5, 'lab') // #ca0088
chroma.mix('red', 'blue', 0.5, 'lch') // #fa0080
chroma.mix('red', 'blue', 0.5, 'lrgb') // #b400b4
```

## chroma.average(colors, mode='lrgb', weights=[])
Similar to `chroma.mix`, but accepts more than two colors. Simple averaging of R,G,B components and the alpha channel.

```ts
colors = ['#ddd', 'yellow', 'red', 'teal'] // ['#dddddd','#ffff00','#ff0000','#008080']
chroma.average(colors) // lrgb // #d3b480
chroma.average(colors, 'rgb') // #b79757
chroma.average(colors, 'lab') // #d3a96a
chroma.average(colors, 'lch') // #ef9e4e
```

Also works with alpha channels.

```ts
chroma.average(['red', 'rgba(0,0,0,0.5)']).css() // "rgb(180 0 0 / 0.75)"
```

As of version 2.1 you can also provide an array of `weights` to
compute a `weighted average` of colors.

```ts
colors = ['#ddd', 'yellow', 'red', 'teal'] // ['#dddddd','#ffff00','#ff0000','#008080']
chroma.average(colors, 'lch') // unweighted #ef9e4e
chroma.average(colors, 'lch', [1, 1, 2, 1]) // #f98841
chroma.average(colors, 'lch', [1.5, 0.5, 1, 2.3]) // #ae9e52
```

## chroma.blend(color1, color2, mode)
Blends two colors using RGB channel-wise blend functions. Valid blend modes are multiply, darken, lighten, screen, overlay, burn, and dodge.

```ts
chroma.blend('4CBBFC', 'EEEE22', 'multiply') // #47af22
chroma.blend('4CBBFC', 'EEEE22', 'darken') // #4cbb22
chroma.blend('4CBBFC', 'EEEE22', 'lighten') // #eeeefc
```

## chroma.random()
Creates a random color by generating a [random hexadecimal string](https://github.com/gka/chroma.js/blob/master/src/generator/random.coffee#L3-L7).

```ts
chroma.random()
chroma.random()
chroma.random()
```

## chroma.contrast(color1, color2)
Computes the WCAG contrast ratio between two colors. A minimum contrast of 4.5:1 [is recommended](http://www.w3.org/TR/WCAG20-TECHS/G18.html) to ensure that text is still readable against a background color.

```ts
// contrast smaller than 4.5 = too low
chroma.contrast('pink', 'hotpink') // 1.721
// contrast greater than 4.5 = high enough
chroma.contrast('pink', 'purple') // 6.124
```

## chroma.distance(color1, color2, mode='lab')
Computes the [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance#Three_dimensions) between two colors in a given color space (default is Lab).

```ts
chroma.distance('#fff', '#ff0', 'rgb') // 255
chroma.distance('#fff', '#f0f', 'rgb') // 255
chroma.distance('#fff', '#ff0') // 96.948
chroma.distance('#fff', '#f0f') // 122.163
```

## chroma.deltaE(color1, color2, Kl=1, Kc=1, Kh=1)
Computes [color difference](https://en.wikipedia.org/wiki/Color_difference#CIEDE2000) as developed by the International Commission on Illumination (CIE) in 2000. The implementation is based on the formula from [Bruce Lindbloom](http://www.brucelindbloom.com/index.html?Eqn_DeltaE_CIE2000.html). Resulting values range from 0 (no difference) to 100 (maximum difference), and are a metric for how the human eye percieves color difference. The optional parameters Kl, Kc, and Kh may be used to adjust weightings of lightness, chroma, and hue.

```ts
chroma.deltaE('#ededee', '#ededee') // 0
chroma.deltaE('#ededee', '#edeeed') // 1.321
chroma.deltaE('#ececee', '#eceeec') // 2.602
chroma.deltaE('#e9e9ee', '#e9eee9') // 6.221
chroma.deltaE('#e4e4ee', '#e4eee4') // 11.598
chroma.deltaE('#e0e0ee', '#e0eee0') // 15.391
chroma.deltaE('#000000', '#ffffff') // 100
```

## chroma.brewer
chroma.brewer is an map of [ColorBrewer palettes](http://colorbrewer2.org/) that are included in chroma.js for convenience. chroma.scale uses the colors to construct.

```ts
chroma.brewer.OrRd
// ['#fff7ec','#fee8c8','#fdd49e','#fdbb84','#fc8d59','#ef6548','#d7301f','#b30000','#7f0000']
```

Note that chroma.js only includes the 9-step versions of the palettes (11 steps for the diverging palettes). So, for instance, if you use chroma.js to construct a 5-color palette, they will be different from the "official" 5-color palettes in ColorBrewer (which have lower contrast).

```ts
chroma.scale('RdBu').colors(5); // ['#67001f','#e58368','#f7f7f7','#6bacd1','#053061']
// offical 5-color RdBu:
['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0']
```

One way to compensate for this would be to "slice off" the extreme colors:

```ts
chroma
  .scale(chroma.brewer.RdBu.slice(1, -1))
  .colors(5) // ['#b2182b','#f4a582','#f7f7f7','#92c5de','#2166ac']
```

Of course you can also just construct the scale from the official 5-step colors that you can copy and paste from [colorbrewer2.org](https://colorbrewer2.org/#type=diverging&scheme=RdBu&n=5):

```ts
chroma.scale(['#ca0020', '#f4a582', '#f7f7f7', '#92c5de', '#0571b0'])
```
You can access a list of all available palettes via `Object.keys(chroma.brewer)`:

```ts
Object.keys(chroma.brewer)
// ['OrRd', 'PuBu', 'BuPu', 'Oranges', 'BuGn', 'YlOrBr', 'YlGn', 'Reds', 'RdPu', 'Greens', 'YlGnBu', 'Purples', 'GnBu', 'Greys', 'YlOrRd', 'PuRd', 'Blues', 'PuBuGn', 'Viridis', 'Spectral', 'RdYlGn', 'RdBu', 'PiYG', 'PRGn', 'RdYlBu', 'BrBG', 'RdGy', 'PuOr', 'Set2', 'Accent', 'Set1', 'Set3', 'Dark2', 'Paired', 'Pastel2', 'Pastel1']
```

## chroma.limits(data, mode, n)
A helper function that computes class breaks for you, based on data. It supports the modes equidistant (e), quantile (q), logarithmic (l), and k-means (k). Let's take a few numbers as sample data.

```ts
const data = [2.0, 3.5, 3.6, 3.8, 3.8, 4.1, 4.3, 4.4, 4.6, 4.9, 5.2, 5.3, 5.4, 5.7, 5.8, 5.9, 6.2, 6.5, 6.8, 7.2, 8]
```

**equidistant** breaks are computed by dividing the total range of the data into _n_ groups of equal size.

```ts
chroma.limits(data, 'e', 4) // [2,3.5,5,6.5,8]
```

In the **quantile** mode, the input domain is divided by quantile ranges.

```ts
chroma.limits(data, 'q', 4) // [2,4.1,5.2,5.9,8]
```

**logarithmic** breaks are equidistant breaks but on a logarithmic scale.

```ts
chroma.limits(data, 'l', 4) // [2,2.83,4,5.66,8]
```

**k-means** break is using the 1-dimensional [k-means clustering](https://en.wikipedia.org/wiki/K-means_clustering) algorithm to find (roughly) _n_ groups of "similar" values. Note that this k-means implementation does not guarantee to find exactly _n_ groups.

```ts
chroma.limits(data, 'k', 4) // [2,8]
```
