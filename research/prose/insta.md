insta is a snapshot testing library for Rust. A test compares a value against a reference snapshot that the library stores and manages, either in separate snapshot files or inline in the source file, and the companion cargo-insta tool reviews the snapshots that have changed. A VS Code extension in the same repository lets snapshots be reviewed from the editor.

The [quickstart](https://insta.rs/docs/quickstart/) says tests run with cargo test as usual, and that insta behaves differently in CI environments.
