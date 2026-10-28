grass is a Sass compiler written in Rust that turns Sass stylesheets into plain CSS. It is offered as a library for Rust code and as a binary that stands in for the Sass command-line executable. The README says the project aims for complete feature parity with dart-sass, the reference implementation, and that a deviation counts as a bug except in error messages and error spans. It names `@forward` and more complex uses of `@use` as its rough edges, and tracks its known gaps in one issue.

## Worth knowing

grass is not a drop-in replacement for libsass. A stylesheet moved from libsass may need the same changes it would need for dart-sass.
