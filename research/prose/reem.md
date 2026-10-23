Reem is a static site generator written in JavaScript. It reads a source directory into a tree, runs the tree through plugins and middleware, and writes the result to an output directory. Templates go through consolidate.js, so the template language is the developer's choice.

A site is configured in a reemfile.js file and built with the reem command in the site folder. Plugins such as reem-markdown, which converts Markdown to HTML, are separate npm packages.

## Worth knowing

The README says Reem keeps changes backwards-compatible until a v1.0.0 release.
