react-markdown renders a Markdown string as React elements. It uses unified, with remark for markdown and rehype for HTML, and takes plugins that change how markdown is transformed and components that replace the normal HTML elements.

It follows CommonMark by default, and GitHub-flavored syntax comes from the remark-gfm plugin. The package is ESM only, so it loads with `import` and not `require`.

## Worth knowing

Plugins and custom components run inside the pipeline and can reintroduce risks that the default leaves out. The [README](https://github.com/remarkjs/react-markdown#readme) recommends rehype-sanitize for content that must be completely safe.
