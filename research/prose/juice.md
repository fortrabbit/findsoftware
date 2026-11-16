Juice is a JavaScript library that moves CSS rules into the style attribute of the HTML elements they match, for HTML emails and for embedding HTML in third-party websites. It takes an HTML string, a file or a cheerio document, and an options object controls how media queries, font faces, table attributes and template code blocks are handled. A command-line tool does the same for HTML files and whole directories.

The default module runs on Node.js. A separate browser entry exposes the inlining functions for code bundled for the browser, without the file and remote-resource functions. The project site hosts a web client for trying the library on a page of HTML.

## Worth knowing

Rules that use pseudo-classes such as :hover cannot be inlined, so they stay in a style tag.
