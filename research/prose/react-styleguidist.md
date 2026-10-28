React Styleguidist runs React components in isolation. It starts a hot reloaded dev server where each component can be viewed with all its variants, and it builds a style guide from the components' props and from Markdown files that hold live, editable usage examples. The style guide is meant to be shared with a team, designers included.

The package is installed into a project as a development dependency and started from the command line or from a package.json script. The [getting started guide](https://react-styleguidist.js.org/docs/getting-started) shows the server and build commands. The build writes the style guide as static HTML, so the output can be published to any web space.

## Worth knowing

The guide asks users to install webpack themselves unless their project uses Create React App, which the homepage says works out of the box. The dev server and the build are run from the command line on a developer's machine.
