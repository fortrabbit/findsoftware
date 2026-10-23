wbsx is a command-line program that transforms XML and HTML content with XSLT stylesheets to build websites and web apps. `wbsx run` maps a stylesheet and an input file to an output file, and `wbsx serve` starts an HTTP server that reads a server configuration file. The README lists Markdown rendering, asset bundling and localization among its features.

## Worth knowing

The homepage says the software is under active development and that breaking changes can come between releases. Building from source needs C libraries for XML, XSLT, ICU and HTML parsing, with a C or C++ compiler for the cgo bindings, on top of the Go toolchain. The repository is hosted on Codeberg.
