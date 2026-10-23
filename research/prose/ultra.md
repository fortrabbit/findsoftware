Ultra is a server-side rendering framework for React that runs on Deno. It renders pages on the server with React Suspense and serves ES modules to the browser, using import maps in place of a bundler.

The build step, `build.ts`, transpiles TypeScript and JSX to plain JavaScript, vendors the dependencies and versions the source and public files. It writes two production import maps, one for the client and one for the server. The production server runs from the `.ultra` output folder.

## Worth knowing

The Deno Deploy page states that Deno Deploy does not currently support dynamic imports, which affects use of `lazy` for that target. The Dockerfile deployment builds the app and runs the production server inside a container.
