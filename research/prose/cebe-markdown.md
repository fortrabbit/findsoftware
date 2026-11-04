cebe/markdown is a PHP library that parses Markdown text to HTML. It has one parser class per flavor: traditional Markdown, GitHub-flavored Markdown and Markdown Extra. The README describes Markdown Extra as not fully supported.

It runs inside a PHP application and is installed with Composer. The README names the Yii Framework's API documentation and guide among the projects that use it.

## Worth knowing

The parser reads PHPDoc annotations to find the Markdown elements it handles, so a PHP opcache has to keep comments in the code. The README lists extensions to the library written by others.
