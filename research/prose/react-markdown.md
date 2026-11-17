react-markdown renders a Markdown string as React elements. It is a unified pipeline, with remark parsing the markdown and rehype handling the HTML, and it takes plugins that change how markdown is transformed and components that replace the normal HTML elements.

It follows CommonMark by default, and GitHub-flavored syntax comes from the remark-gfm plugin. The package is ESM only, so it loads with `import` and not `require`.

## Worth knowing

The [README](https://github.com/remarkjs/react-markdown#readme) says the plugins and components you use may be insecure, and recommends rehype-sanitize for content that must be completely safe.
