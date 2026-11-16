PhotoSwipe is a JavaScript image gallery and lightbox. It opens the images of a gallery on the page in a dialog, loads larger images as a visitor zooms, and handles touch gestures. The script is an ES module with no build step, and the core and the lightbox are separate files, so a page can load the core only when a visitor opens an image.

The CSS is one file with no external assets, because the icons are generated in JavaScript. The [getting started guide](https://photoswipe.com/getting-started/) covers initialization, the options and the events, and it has pages for using the library with React, Vue and Svelte.

## Worth knowing

Each image needs its width and height set in advance, and the docs say the library is not designed for very large images. A tiling plugin for very large images is marked experimental. The docs say the library works only in browsers that support ES modules, and suggest a link to the image as the fallback for other browsers.

The current major removed the history API, social sharing, the fullscreen button, captions and inline galleries from the core, and some of these are or will be plugins.
