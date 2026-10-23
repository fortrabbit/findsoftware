Gostatic is a static site generator written in Go that re-renders only the pages affected by a change. Its configuration uses Makefile-style syntax, its templates are Go templates, and site sources are files in a `src` directory. The [README](https://github.com/sansolovyov/gostatic/blob/master/README.md) describes a single binary with no run-time dependencies, downloaded from the releases page, and gives `go get` as the way to compile it from source.

## Worth knowing

The README also describes an HTTP server and watcher that render changes instantly. The generated content is what gets deployed.
