Parsedown converts Markdown text into HTML with PHP, as a single class file with no dependencies. Its [README](https://github.com/erusev/parsedown/blob/master/readme.md) calls its parsing approach line based: it reads the lines to recognise blocks, then the special characters to recognise inline elements.

## Worth knowing

The README says to turn on safe mode when processing untrusted user input, and warns that its markup escaping setting is not safe from XSS. It says the parser passes most CommonMark tests, not all of them.
