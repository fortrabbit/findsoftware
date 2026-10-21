Coralite is a static site generator built around HTML modules. Components are native custom elements, and a `server` block in each component runs during the build and writes static HTML files. Components that need interactivity are hydrated in the browser, and an element marked `no-hydration` is rendered without client-side hydration. The README also says the framework is designed for single-page applications and dynamic websites. The source is on Codeberg, and the [guide](https://coralite.dev/docs/guide/index.html) covers installation.

## Worth knowing

The `server` block runs only at build time, and using browser APIs such as `window` or `localStorage` inside it makes the build fail. Top-level imports in a component's script block are server-only unless the client block uses them.
