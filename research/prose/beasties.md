Beasties is a Node module that inlines the critical CSS of a page into its HTML and lazy-loads the rest of the stylesheets. It reads the markup and the CSS and keeps the rules that match, without rendering the page in a headless browser. According to its README, this means it inlines every CSS rule the document uses, not only the rules needed above the fold.

It is installed as a development dependency and called from a build step. The same repository publishes [beasties-webpack-plugin](https://github.com/danielroe/beasties/tree/main/packages/beasties-webpack-plugin) for webpack and vite-plugin-beasties for Vite, which run the module inside those builds. The README also describes a split into a build-time compiler and a runtime processor for server-rendered pages, where the processor is created once and reused.

Beasties is a maintained fork of critters. The preload strategy for the deferred stylesheets is one of its options.

## Worth knowing

The README offers `data-beasties-container` attributes to limit the markup it evaluates.
