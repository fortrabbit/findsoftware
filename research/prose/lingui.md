Lingui is an internationalization library for JavaScript and TypeScript. Messages are written in the source with compile-time macros, a CLI extracts them into catalogs, and the catalogs are compiled at build time.

The core package is framework-agnostic. React, Vue and SolidJS have official bindings, and Astro and Svelte are supported through community packages. The repository is a monorepo that also holds the CLI, the macro, Vite and SWC plugins, an ESLint plugin and the documentation site.

## Worth knowing

The macros need a build step: the README says they need Babel with the Lingui macro plugin or SWC with the Lingui SWC plugin. Lingui 6 packages are ESM-only. The installation guide asks for a recent Node.js, a build requirement because the library itself also runs in browsers.
