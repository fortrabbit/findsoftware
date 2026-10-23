Velite is a content layer library that reads Markdown, MDX, YAML and JSON files from a content folder, checks each entry against a Zod schema declared in a config file, and writes the result as typed data an application imports. Image and file references inside the content are resolved at build time, and image optimization is part of the built-in asset processing. The author is Lei Wang.

The package is installed as a development dependency and run with the `velite` command, optionally in watch mode during development. The [quick start](https://velite.js.org/guide/quick-start) covers the config file and the content folder layout.

## Worth knowing

Velite is an ESM-only package, so it cannot be loaded with `require()`, and the nearest `package.json` needs `"type": "module"` or the config file needs a module extension.

The introduction says the documentation "is not yet complete".
