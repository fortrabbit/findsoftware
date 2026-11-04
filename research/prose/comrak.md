Comrak is a parser and renderer for CommonMark and GitHub Flavored Markdown, written in Rust. It runs as a command-line program that converts files to HTML, XML or CommonMark, and as a Rust library that parses a document into a tree, lets a program change the tree, and formats it again. A Rust project adds the library as a Cargo dependency.

None of Comrak's own extensions, such as footnotes, math and alerts, are enabled until a parse turns them on. Other languages bind to the library, among them the Ruby gem Commonmarker. The project is developed by a community of contributors.

## Worth knowing

Raw HTML and potentially dangerous links are removed by default. The unsafe option allows them, and the README recommends a sanitisation library configured for the application when that option is set.

The Disallowed Raw HTML extension, a GitHub Flavored Markdown feature, has been removed from Comrak, and the README says it should not be used.
