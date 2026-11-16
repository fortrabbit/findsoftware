markdown-to-jsx compiles Markdown into components for React, React Native, SolidJS and Vue, or into an HTML string or back into Markdown. The default export is a React component that renders a Markdown string, and each target has its own entry point with a `compiler` and a `parser` that returns the syntax tree. Overrides replace the rendering of any HTML tag, and a `renderRule` hook changes how one kind of node is drawn, for example to highlight fenced code.

The library accepts GFM and CommonMark syntax and keeps raw HTML in the input as JSX elements. Its README says the component works in React Server Components as well as in client code, without a client directive.

## Worth knowing

Raw HTML is sanitized in every renderer. Function props on custom components stay as strings unless `evalUnserializableExpressions` is turned on, and the README discourages that option for user-written Markdown.
