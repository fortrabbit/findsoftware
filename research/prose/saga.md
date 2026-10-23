Saga is a static site generator written in Swift, in which the site pipeline is Swift code rather than a configuration file. The [installation guide](https://getsaga.dev/docs/installation/) adds Saga as a Swift Package Manager dependency, and the `saga` command line tool can be installed with Homebrew. `saga dev` builds the site and starts a development server.

The [deployment guide](https://getsaga.dev/docs/deploying/) describes the output as a pure static website, written to a `deploy` folder by default, that can be published to a static host. Templates use Swim, and the README says commercial support is available from Loopwerk.

## Worth knowing

Building a site needs a Swift toolchain. The published site is static files, so the live site needs no Swift.
