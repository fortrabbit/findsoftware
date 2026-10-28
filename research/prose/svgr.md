SVGR takes a raw SVG file and produces a React component from it. The project is a monorepo of packages: a Node.js core package, a command line tool that transforms a file or a directory, and integrations for webpack, Rollup.js, Parcel and Next.js. The core package installs with npm and is released under the MIT license, and the README names Greg Bergé as the copyright holder. The [getting started guide](https://react-svgr.com/docs/getting-started/) directs readers to the integration that fits their build.

## Worth knowing

The command line tool is installed into a project as a development dependency or run with npx, so the React components it writes are the output a site receives. The webpack and Node.js integrations run inside the build, not in the visitor's browser.
