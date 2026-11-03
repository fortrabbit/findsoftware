Imageflow is an image processing library and command-line tool for resizing, cropping and encoding images. The [README](https://github.com/imazen/imageflow) describes two ways to use it in this repository: `imageflow_tool` on the command line, for batch runs and JSON job files, and `libimageflow`, linked into a program in-process through language bindings. Binaries for Windows, Ubuntu and macOS are published with the releases, Docker images cover Linux, and a build from source needs a Rust toolchain and some C dependencies. Imazen LLC maintains the project.

This repository no longer contains an HTTP server. The README says the earlier imageflow_server was removed because the web framework it used is abandoned, and it points to Imageflow.Server, which lives in a separate repository.

## Worth knowing

The software is offered under the AGPLv3, and the project also offers commercial licenses for users who do not want the AGPL terms. The repository has no stable release: its newest release is a release candidate, and the README badge reads "release candidate".
