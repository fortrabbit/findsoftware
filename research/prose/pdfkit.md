PDFKit is a JavaScript library that generates PDF documents for Node and the browser. A document is built with chained calls: text, images, vector paths, tables and annotations are added to a document object, and its output is piped to a file or an HTTP response. In the browser the output is collected as a Blob instead. The package is installed with npm, and a prebuilt standalone file is distributed with the releases. The [programming guide](https://pdfkit.org/docs/getting_started.html) covers the API with examples.

## Worth knowing

A bundle that inlines PDFKit must keep its standard-font metrics and sRGB profile beside it, or register the standard fonts in code, because the Node build loads them from files next to the built file. The browser build has no file system access, so fonts and images are passed to it as data.
