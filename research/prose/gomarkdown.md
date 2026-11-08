gomarkdown is a Go library that parses Markdown text and renders it as HTML. A parser turns the text into a syntax tree defined in its ast package, an HTML renderer writes the tree out, and a Markdown renderer writes a tree back to Markdown. A CommonMark mode builds the same tree, so custom renderers and tree transforms still apply. The HTML renderer has flags for untrusted input that limit what it keeps. The repository also contains a command-line tool, mdtohtml, that converts a Markdown file to HTML.

## Worth knowing

The project is a fork of the v2 line of [Blackfriday](https://github.com/russross/blackfriday), with its API split into separate ast, parser and html packages. The repository has no release objects or tags, and the README names no version.
