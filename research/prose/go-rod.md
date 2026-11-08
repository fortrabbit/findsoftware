Rod is a Go library that drives a browser through the Chrome DevTools Protocol, for web automation and scraping. The library can connect to a browser that is running, or find a local browser or download one that matches its own revision. The README describes a high-level layer with low-level packages underneath, so a program can call either. The [get-started guide](https://github.com/go-rod/go-rod.github.io/blob/main/get-started/README.md) shows a first program that imports the module and runs it with go run.

## Worth knowing

The compatibility notes say the auto-downloaded browser may not work on every platform, and that some platforms need the browser installed by hand. Each Rod version works with one browser revision, named in its launcher package. The notes recommend a Docker-based launcher for running Rod on a server.
