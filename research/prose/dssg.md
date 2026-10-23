DSSG is a static site generator written in the D programming language. Each page is one TOML file of key-value pairs that hold both metadata and content, and a key whose name ends in `_md` is read as Markdown and converted to HTML. Content may also be pure HTML, and a project can use several Mustache templates.

The README describes creating a project with `dssg new`, then `dssg build` and `dssg serve`. The software is a downloaded binary.

## Worth knowing

The README names only Ubuntu 16.04 and Windows 10 binaries.
