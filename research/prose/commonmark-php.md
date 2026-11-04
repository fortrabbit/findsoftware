league/commonmark is a PHP library that parses Markdown text to HTML. Its default converter follows the CommonMark specification, and a second converter class adds the GitHub-Flavored Markdown features: autolinks, disallowed raw HTML, strikethrough, tables and task lists. A PHP application calls the converter from its own code once Composer has installed the package.

The [documentation](https://commonmark.thephpleague.com/) covers configuration and customization. Colin O'Dell created the library and, according to the README, is its primary maintainer.

## Worth knowing

Raw HTML and unsafe links pass through by default. The README advises setting the html_input and allow_unsafe_links options for untrusted input, and filtering raw HTML further when it is allowed. Only UTF-8 and ASCII input is supported, so other encodings need converting first.
