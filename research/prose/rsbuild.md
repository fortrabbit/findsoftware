Rsbuild is a build tool for web applications, built on Rspack, the bundler the project's homepage names as its base. It supports React, Vue, Svelte and other frameworks and is set up either with the create-rsbuild scaffolder or by adding the @rsbuild/core package to an existing project. The development server runs locally, and the build writes the application's HTML, JavaScript and CSS to a dist directory.

## Worth knowing

Rsbuild does not ship server-side rendering by default. Its SSR guide says framework developers build SSR on its low-level APIs and recommends full-stack frameworks built on Rsbuild. The deployment guide says HTML files usually need to be deployed on a server, while static assets can also go to a CDN.
