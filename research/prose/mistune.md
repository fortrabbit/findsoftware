Mistune is a Python library that turns Markdown text into HTML. A caller creates a parser with create_markdown and passes it the Markdown text, and the library ships renderers and plugins alongside the parser. It is installed with pip and maintained by Hsiaoming Yang. The [documentation](https://mistune.lepture.com/en/latest/) is the project's own site.

## Worth knowing

create_markdown() escapes raw HTML by default. The legacy mistune.html() helper enables raw HTML and several plugins, and the README says to use it only for trusted input or to sanitize its output elsewhere.
