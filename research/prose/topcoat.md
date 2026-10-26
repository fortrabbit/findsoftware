Topcoat is a Rust framework for full-stack web apps that renders all of its markup on the server. Async components produce the HTML and can query the database directly, and a `$(...)` expression is translated to JavaScript so that some interactions re-run in the browser without a WebAssembly bundle or a separate client build step.

Routes can be inferred from the module tree, and the `view!` macro writes HTML inside Rust. The `topcoat` CLI creates an app, and its recommended preset includes a todo example backed by Toasty and SQLite; `topcoat dev` starts the development server. The component library, Topcoat UI, is copied into the project so that its components can be edited there.

## Worth knowing

The README calls the project early-stage and experimental and says to expect breaking changes. The roadmap lists deployment docs, static export and pre-rendering as planned rather than built.
