simpleParallax.js adds a scroll-driven parallax effect directly to img tags, with no background images. One npm package ships two builds, a React component and a vanilla JavaScript version. The project's site says the library started as a jQuery plugin, became a vanilla JavaScript library, and is now built for React, with the vanilla build still available.

## Worth knowing

The React build declares React as a peer dependency, so the application supplies the React it uses. Browsers that cannot parse the syntax the library ships do not run the script, and the README says such targets need the application to transpile it.
