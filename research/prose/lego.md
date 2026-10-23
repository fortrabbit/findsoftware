lego is a static site generator for Node.js that builds optimised websites from Nunjucks or Liquid templates. It is installed under its scope with `npm i -g @astronomersiva/lego`, and `lego build` writes the optimised build. `lego serve` runs a local server during development.

The build output is static, and the build copies a CNAME file into the build folder so that the site works with GitHub Pages.

## Worth knowing

The unscoped npm name lego belongs to another project, so the install command uses the scoped package.
