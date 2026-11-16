MDX lets authors write JSX inside Markdown documents, and the MDX compiler turns each document into JavaScript. The repository holds the core compiler and the integrations that connect it to bundlers and to JSX runtimes. A project adds an integration for its bundler, or uses the core compiler on its own, and the [getting-started guide](https://mdxjs.com/docs/getting-started/) describes both routes.

## Worth knowing

The homepage says MDX has no runtime and that all compilation occurs during the build stage. The getting-started guide says MDX is a programming language, so the people who write it need to be trusted, and that the packages are ESM only.
