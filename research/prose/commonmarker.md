Commonmarker is a Ruby gem that converts Markdown to HTML and parses it into a tree a program can walk and change. The gem wraps the comrak Rust library, so a Ruby program calls compiled Rust code through methods such as Commonmarker.to_html. Parsed documents can also be turned back into CommonMark with to_commonmark.

The strikethrough, table, autolink and task list extensions from the GitHub Flavored Markdown specification are on by default, as are shortcodes and a syntax highlighter for fenced code blocks. Setting an extension option to false turns it off, and the syntax highlighter is disabled by setting its plugin to nil.

## Worth knowing

The gem's README states that it can currently only generate HTML. Building the gem from source compiles the Rust extension, and the README's developer section points to the comrak dependency instructions when that step fails.
