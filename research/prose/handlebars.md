Handlebars is a JavaScript templating engine. A program passes a template string to `Handlebars.compile`, which returns a function; calling that function with a data object produces the rendered output. Templates can also be precompiled ahead of time, which reduces the runtime a page has to load. The [installation guide](https://handlebarsjs.com/guide/installation/) describes the npm, CDN and download routes. The engine is designed for any ECMAScript 2020 environment, including Node.js and current browsers. It is largely compatible with Mustache templates.

## Worth knowing

The project calls Handlebars a pure rendering engine. It has no built-in event handling, backend access or incremental DOM updates, so a page that needs those pairs it with other code or a framework. The installation guide notes that the downloadable browser builds are not meant for production use, and it recommends a build tool for browser projects.
