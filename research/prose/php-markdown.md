PHP Markdown converts Markdown text to HTML. The package holds two parsers: Markdown, which handles the Markdown syntax, and MarkdownExtra, which adds the Markdown Extra syntax for footnotes, attribute blocks and fenced code blocks. Each parser has a static call that uses the default settings, and can be instantiated to change settings such as the prefix of footnote IDs or a function that rewrites link URLs.

The [configuration page](https://michelf.ca/projects/php-markdown/configuration/) lists the settings for both parsers. The README calls the parser a PHP port of the Markdown program that John Gruber wrote.

## Worth knowing

The README says an empty result can mean the PCRE backtrack limit is too low, and that it may need raising above one million. The package does not include the classic version, which has a plugin interface for WordPress; the README says that package is separate.
