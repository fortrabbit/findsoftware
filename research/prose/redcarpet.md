Redcarpet parses Markdown into HTML or XHTML from Ruby code. Its renderers, the HTML and XHTML classes, a table-of-contents variant and a plain-text renderer, are called through the Ruby API, and custom renderers inherit from a built-in renderer and override the methods for individual elements.

## Worth knowing

Installing the gem builds some native extensions, though the README says the parser is standalone and requires no installed libraries.
