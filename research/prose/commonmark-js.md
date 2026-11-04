commonmark.js is the JavaScript reference implementation of CommonMark, a specified form of Markdown. It parses a document into a syntax tree that code can inspect or change, and renders the tree to HTML or to an XML representation. The package is installed from npm, and a single-file distribution is available for client-side use.

## Worth knowing

The library does not sanitize link attributes or raw HTML. For untrusted input, the README recommends its safe option or an HTML sanitizer on the output.
