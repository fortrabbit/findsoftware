Symfony Webpack Encore is a wrapper around webpack, with a smaller API for bundling JavaScript modules and for pre-processing and compiling CSS and JavaScript assets. A Symfony application installs it with a Composer bundle, which adds the Node dependencies, an assets directory and a webpack.config.js file; any other project installs the npm package and writes the same configuration by hand. The configuration calls the Encore API, and the example build writes its output to public/build, where the web server serves it. Symfony maintains Encore.

## Worth knowing

Encore is in low-maintenance mode: the project takes bug fixes, security patches and peer dependency updates only. The README recommends Symfony Reprise for projects that need a bundler and names the Symfony AssetMapper component as a simpler alternative that runs entirely in PHP.
