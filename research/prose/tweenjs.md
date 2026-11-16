tween.js changes properties of a JavaScript object from a start value to a target over a duration, and applies an easing curve to the progress. The easing functions come from Robert Penner's equations and can be reused outside a tween, and custom easing functions are accepted too.

It does one thing: it tweens the properties of an object. It does not add CSS units, does not interpolate colors and does not run its own animation loop. The caller passes a time value from whatever loop the page uses, and the update callback writes the new values somewhere, such as a CSS transform on an element. The [user guide](https://github.com/tweenjs/tween.js/blob/main/docs/user_guide.md) covers the API in more detail.

## Worth knowing

The README marks two install routes as deprecated: the global variable from a CDN, which uses a UMD file, and the CommonJS build. The README says the UMD file will be removed in a future major version, so the ES module build is the route it recommends.
