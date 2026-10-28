react-md is an accessible React component library whose styles are generated from Sass. The install page adds the `@react-md/core` package and the `sass` compiler, then has the project compile one stylesheet through an `@use` rule, so theme colors and spacing are set as Sass variables at build time. The components follow the Material Design specifications and the W3C ARIA authoring practices for keyboard and screen reader behavior.

## Worth knowing

Sass is a build-time requirement: the project compiles its styles, and a project that skips the Sass step has no styles. The install page also names React as a requirement, so the library runs only inside a React application.
