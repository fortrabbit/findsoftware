jsbundling-rails is a Rails gem that runs a JavaScript bundler inside a Rails application and places the bundled output where the asset pipeline can serve it. The installer sets up one of Bun, esbuild, rollup.js or Webpack. The bundled files go to app/assets/builds, a directory the installer keeps out of source control by default.

During development the bundler runs in watch mode in a terminal, alongside the Rails server. For production, its build task attaches to asset precompilation, so the bundle is built when assets are precompiled.

## Worth knowing

Node.js must be installed for the esbuild, rollup.js and Webpack installers, and the Bun installer needs the Bun runtime. For Webpack features such as code splitting and hot module reloading, the README points to shakapacker, a fork of webpacker.
