Fabric.js is a JavaScript library that puts an interactive object model on top of an HTML5 canvas element, with serialization and SVG-to-canvas conversion. A page loads it with a script tag from a CDN. Under Node.js it uses node-canvas for the canvas and jsdom for the window.

## Worth knowing

The Node.js route depends on node-canvas, which has its own limits and bugs. Canvas features cannot be transpiled or polyfilled, so older browsers may lack some of them even after the code is transpiled.
