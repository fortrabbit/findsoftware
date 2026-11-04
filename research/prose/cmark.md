cmark is the C reference implementation of CommonMark, the Markdown syntax that has a written specification. It is both a shared library, libcmark, and a command-line program. The library parses CommonMark into an abstract syntax tree, lets a program change the tree, and renders it as HTML, groff man, LaTeX, CommonMark or an XML form of the tree. It has no external dependencies and is built with cmake, or with make, which calls cmake. The [README](https://github.com/commonmark/cmark/blob/master/README.md) names wrapper libraries that let other languages call libcmark, among them Go, Ruby, Python, Lua and PHP.

## Worth knowing

By default the library removes raw HTML and links that use the javascript, vbscript, data or file schemes. The unsafe option turns that off, and the README recommends an HTML sanitizer for that case.
