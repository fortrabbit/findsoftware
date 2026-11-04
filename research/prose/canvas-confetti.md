Canvas Confetti is a JavaScript library that draws confetti animations on an HTML canvas. The npm package is imported into a bundled client build, or loaded from a CDN, where it is exposed as a global `confetti` function. Each call launches particles from an origin point and returns a promise, where the browser supports promises, that resolves when the animation finishes. Calls made before an animation ends share one promise and draw on the same canvas.

## Worth knowing

The README says the package is a client component and will not run in Node, so it is used in the browser only.
