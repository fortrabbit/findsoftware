EJS is a templating language that writes HTML with plain JavaScript. Templates hold JavaScript between scriptlet tags, and output tags insert values escaped or unescaped. The library compiles a template to a JavaScript function, which it caches, and runs on Node.js or in the browser. In the browser, a prebuilt script compiles and renders template strings, while loading template files needs the Node.js entry point. EJS installs from npm, ships a command-line tool, and complies with the Express view system, so an Express app can use it as its view engine.

## Worth knowing

The README states that EJS is effectively a JavaScript runtime, so giving end users unrestricted access to the render method is an unsafe way to use it. Escaping covers HTML content and quoted attributes by default, and the README says other output contexts need their own escape function.
