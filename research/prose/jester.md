Jester is a web framework for Nim, described by its repository as a sinatra-like framework that provides a DSL for quickly creating web applications in Nim. Routes are declared in Nim code, and an application is compiled to a native binary that the [README](https://github.com/dom96/jester/blob/master/readme.markdown) runs with a compile-and-run command. The project has no website of its own, so the GitHub repository is its only home.

## Worth knowing

The README says applications should run behind a reverse proxy before production use, and that the library is not yet hardened against HTTP security exploits, so it should not be exposed to the public internet.
