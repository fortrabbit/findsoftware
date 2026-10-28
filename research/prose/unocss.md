UnoCSS is an atomic CSS engine. It generates utility classes on demand and ships no utilities of its own: every feature comes from presets. A project adds it to its build, for example through the Vite integration, installing the `unocss` npm package. A command line interface runs it on a developer's machine, and a runtime build loaded from a CDN runs the engine in the browser.

Presets supply the utilities. Shortcuts alias utilities, attributify groups them in attributes, pure CSS icons are available, and CSS directives such as `@apply` reuse utilities. Anthony Fu maintains the project.
