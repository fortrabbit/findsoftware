docsify fetches Markdown files and renders them as a documentation site inside the reader's browser, so a project has no HTML build output. A site is an `index.html` that loads docsify from a CDN, and `docsify-cli` scaffolds and previews one. The README lists "No statically built HTML files" among its features. The [quick start](https://github.com/docsifyjs/docsify/blob/develop/docs/quickstart.md) covers both setups.

## Worth knowing

The README describes serving a site from a static web server or GitHub Pages. The configuration docs say hash-based routing suits statically deployed sites.
