yst is a command-line tool that generates a static website by filling string templates with data from YAML or CSV files, or from SQLite3 databases. It is written in Haskell and installed with `cabal install yst`. Running `yst` writes the site to a `site` directory. The README describes templates written as Markdown with pandoc extensions, which yst converts to HTML with pandoc.

## Worth knowing

A SQLite3 build needs the `builtin-sqlite3` flag when the sqlite3 library is missing. The [README](https://raw.githubusercontent.com/jgm/yst/master/README.markdown) covers the commands and template syntax.
