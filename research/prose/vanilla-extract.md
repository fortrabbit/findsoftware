vanilla-extract lets a project write its styles in TypeScript, which a bundler evaluates at build time into static CSS files. Class names are scoped locally, and CSS variables are available from the same code. The `@vanilla-extract/css` package is installed with npm and connected to the project's bundler through an integration package for Vite, Webpack, Next.js, Astro and other bundlers listed in the [getting started guide](https://vanilla-extract.style/documentation/getting-started/). Sprinkles, Recipes and Dynamic CSS are optional packages in the same repository, and Sprinkles is built on top of vanilla-extract.

## Worth knowing

The package needs a bundler configured to handle CSS before any style file works.
