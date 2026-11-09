html2canvas is a JavaScript library that renders a page, or part of it, to a canvas element so the result can be captured as a screenshot. It reads the DOM and the styles applied to its elements and builds the image in the visitor's browser, so no server renders it. Ready builds are downloaded from the [GitHub releases page](https://github.com/niklasvh/html2canvas/releases). Niklas von Hertzen created it.

## Worth knowing

The image is built from the DOM rather than captured from pixels, so it may differ from the page as shown. Images must be on the same origin as the page unless a proxy is used. The README calls the library experimental and says it is not suitable for Node.js.
