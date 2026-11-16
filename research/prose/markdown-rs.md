markdown-rs parses Markdown into events and then compiles them to HTML or to a syntax tree in the mdast format, with a position for each node. A Rust program calls `to_html` for a string of Markdown, or `to_html_with_options` with an `Options` value to switch on GFM, MDX, frontmatter and math. Its parser is a state machine built on alloc without the standard library, and it accounts for every byte of the input.

The README names micromark, a JavaScript Markdown parser, as a sibling project, and mdxjs-rs wraps this crate to compile MDX to JavaScript.

## Worth knowing

HTML output is safe by default: dangerous HTML and protocols are encoded or dropped unless `allow_dangerous_html` or `allow_dangerous_protocol` is turned on. MDX syntax errors come back as an error value from `to_html_with_options`, and the README advises capping the size of untrusted input before parsing it.
