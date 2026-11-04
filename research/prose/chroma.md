Chroma is a syntax highlighter library written in Go. It takes source code and other structured text and turns it into highlighted HTML or ANSI-colored text. The project says it is based heavily on Pygments and includes translators for Pygments lexers and styles.

A Go program imports the module and selects a lexer, a style and a formatter from the registries the packages hold. The [README](https://github.com/alecthomas/chroma/blob/v2.27.0/README.md) also describes a command-line interface, installed from release binaries, that can act as a preprocessor for less.
