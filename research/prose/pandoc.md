Pandoc is a Haskell library for converting from one markup format to another, and a command-line tool that uses this library. The [installation page](https://pandoc.org/installing.html) lists installers, package managers, Docker images and binary archives for each platform. Pandoc can also run as a web server or as a CGI program, a mode the [pandoc-server page](https://pandoc.org/pandoc-server.html) describes. The project's COPYRIGHT file names John MacFarlane as the copyright holder.

## Worth knowing

The pandoc-server mode is a build option. The statically linked binaries provided by the project cannot load Lua filters that use C modules, which the installation page describes.
