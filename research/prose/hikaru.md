Hikaru is a static site generator that builds routes from the directory layout of its source files. Pages are Markdown files with front matter, kept in a source directory. The build writes static files, and the README includes a live server step for previewing. Themes are added as separate repositories, and the default theme is ARIA. The command line program is installed into the site's own directory and run with npx, and the setup steps add feed, sitemap and search generators beside the core package.

The [docs site](https://hikaru.alynx.one/) covers the install, theme and configuration steps.

## Worth knowing

Hikaru supports the Node.js LTS and current release lines and does not support versions that have reached end of life, as the README states.

A site depends on a theme repository being cloned into the themes directory or added as a submodule, so the theme is a separate dependency from the core package.
