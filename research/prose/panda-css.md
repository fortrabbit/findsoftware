Panda CSS is a styling engine that reads the style calls in a project's TypeScript source and writes plain atomic CSS when the build runs, so the browser receives a stylesheet and computes no styles itself. Codegen writes a styled-system folder that the code imports from, and the build extracts the CSS for the styles the source uses. The project installs it as an npm development dependency and runs the Panda CLI in the build.

## Worth knowing

Values have to be visible in the source for the build to emit their CSS. Styles that exist only at runtime need the dynamic-styles route the docs describe.
