FAST is Microsoft's library for building Web Components, the W3C standards for custom HTML elements. Its core package, FAST Element, extends the standard Web Component APIs, and the [quick-start guide](https://fast.design/docs/3.x/getting-started/quick-start/) installs it with npm for a TypeScript project built with a bundler. The project does not add a component model of its own, and it can be used with any framework or without one.

Templates are written either as JavaScript tagged template literals or as declarative HTML elements. The declarative form lets any server technology render the initial HTML, which the browser then hydrates, while the FAST runtime itself stays browser-only.

## Worth knowing

Ready-made components built on FAST Element, such as Fluent UI's web components, are separate packages that the README names. They are not part of this record.
