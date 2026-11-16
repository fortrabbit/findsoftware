MD4C is a Markdown parser library written in C. It parses a whole document and calls callback functions provided by the application at the start and end of every block and span, without building a large document tree. A separate module converts Markdown to HTML.

The parser is the files `md4c.c` and `md4c.h`, which an application can link as a library or compile into its own code. It passes the CommonMark compliance tests, and flags switch on extensions such as tables, footnotes, task lists and strikethrough.

Martin Mitáš maintains it.

## Worth knowing

The README names desktop and office applications among the software that uses MD4C, and it describes no use in a website or web app.
