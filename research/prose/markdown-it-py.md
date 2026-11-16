markdown-it-py parses Markdown into a stream of tokens and renders the tokens to HTML. It follows the CommonMark spec for the base syntax, and its rules can be extended or replaced in code. Syntax beyond CommonMark comes from plugins that are added to a parser object with `use`, and a plugin such as the table syntax is switched on with `enable`.

It is a Python port of markdown-it, the JavaScript parser, and changes as little of the JavaScript code structure as possible. The package also installs a command-line tool, `markdown-it`, which reads files or standard input and writes HTML to standard output.

## Worth knowing

Tables are off by default, as in CommonMark, so a document that uses table syntax needs the table option or the command-line flag to render it as a table.
