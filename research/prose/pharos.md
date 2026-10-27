Pharos is the design system JSTOR uses for its products. The library is a set of web components that the application registers under a scoping prefix, so more than one copy of the library can run on a page. React applications use wrapper components from the same package, and the package also carries design tokens, typography styles and an icon set.

## Worth knowing

The README says the components rely on class names that a bundler's minifier would otherwise rename, and it asks for a bundler setting that keeps them. The scoped custom element registries proposal is not finalized, so the README asks for a polyfill to use the components.
