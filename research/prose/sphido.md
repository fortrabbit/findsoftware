Sphido is a static site generator for Node.js, published as a set of npm packages from one repository. The core package exposes two functions: getPages(), which reads a content folder, and allPages(), which walks the pages it found. Extender packages add behavior such as Markdown rendering, frontmatter, sitemaps and feeds.

Templates are JavaScript template literals. The build is a Node script that writes the generated site into a public folder.

## Worth knowing

The install docs point to a scaffolder, create-sphido, which is a separate package from the core.
