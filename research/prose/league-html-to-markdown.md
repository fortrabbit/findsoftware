HTML To Markdown for PHP converts an HTML document or fragment into Markdown text. A converter object takes the HTML string and returns Markdown. Options strip tags, remove nodes, keep comments and set how line breaks, links and bold or italic text are written. Tables are converted only after a table converter is added to the environment. The library reads HTML through PHP's DOM and XML extensions.

The README links league/commonmark and three other libraries for the opposite direction, Markdown to HTML.

## Worth knowing

By default the library keeps HTML tags that have no Markdown equivalent, such as span, div, iframe and script, in the output. The strip_tags and remove_nodes options change that.
