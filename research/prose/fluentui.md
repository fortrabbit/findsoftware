Fluent UI React is the React component library of the Fluent UI design system, which Microsoft publishes from a monorepo on GitHub. Its components come in the @fluentui/react-components package, and the quick start wraps an application in a FluentProvider that takes a theme and supplies the style renderer. The components are styled with CSS in JS, and design tokens carry updates to the Fluent design language.

The same repository holds the React v8 packages and the web components, which this record does not cover. Microsoft publishes the package, and the docs source sits in the repository's public docs app.

## Worth knowing

The quick start notes known strict mode bugs with React 18 and suggests turning strict mode off for Next.js hydration. The root README encourages users of the v8 packages to migrate to v9.
