mdsvex brings Markdown into Svelte projects. It is added as a preprocessor to a Svelte build with rollup or webpack, which then passes `.svx` files through it, or its compile function turns a document into Svelte code without hooking into the Svelte compiler. The docs say it supports all Svelte syntax and almost all Markdown syntax, so a Markdown document can import and use Svelte components. Parsing runs on unified, remark and rehype, and remark and rehype plugins can be passed in as options.

The repository is a monorepo that also holds packages for working with Svelte syntax trees.

## Worth knowing

A code block indented by four spaces does nothing in mdsvex, since indentation is common in XML-based languages.
