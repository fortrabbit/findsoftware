Markdoc is a Markdown syntax and a JavaScript toolchain for building documentation sites. Content goes through three steps: `parse` turns the source into a tree, `transform` turns the tree into renderable content, and a renderer produces HTML or React output. Authors can add their own tags and nodes, and the library has built-in validation for checking content before it renders.

Stripe created Markdoc for its own documentation. The repository also holds a Next.js integration, a separate package that builds a documentation site from Markdoc content.

## Worth knowing

The React renderer needs React installed, and the public renderer types need `@types/react` even when only the parser or the HTML renderer is used.
