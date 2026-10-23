mdBook is a command-line tool, written in Rust, that builds a book from Markdown files. The contents of the src directory are included in the output. The default renderer uses Handlebars templates, and the build produces a directory that any web server can host. The Third Party Plugins wiki page lists community preprocessors. It is installed with cargo install mdbook or from a pre-compiled binary on the GitHub Releases page, and it is released under the Mozilla Public License, version 2.0.

## Worth knowing

The serve command starts a local webserver for writing and rebuilds the book as the files change. The directory that the build produces is the one that goes live.
