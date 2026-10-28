Theme UI is a library for building themeable React interfaces whose colors, typography and layout come from one theme object. A project installs it with npm together with @emotion/react, wraps the application in a ThemeUIProvider that receives the theme, and styles elements with the sx prop, which takes its values from the theme. The library also ships built-in layout, grid, form and button components, and it is built with Emotion for scoped styles. The documentation is at theme-ui.com.

## Worth knowing

The README calls Theme UI the next evolution of Styled System. The sx prop is enabled in a file by a JSX import source comment, or for a project by a setting in the Babel config.
