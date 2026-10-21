Harp is a static web server with built-in preprocessing. It compiles Markdown, EJS, Jade, LESS, Sass, Stylus and CoffeeScript into HTML, CSS and JavaScript as the browser needs them. Layouts and partials are supported, and metadata is read from a _data.json file. The same tool can write the compiled output to a flat folder for any static host, or run as the web server itself.

The [quick start](https://harp.sh/docs/quick-start) covers installing the npm package, serving a project and compiling it.

## Worth knowing

Harp does not reload the browser when a file changes. The quick start says to refresh the page by hand.

The [Harp Platform](https://harp.sh/docs/deployment/harp-platform) is a hosted service for Harp apps through Dropbox.
