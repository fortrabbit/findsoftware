RonyKit is a Go toolkit for building API servers in which one handler can serve both REST and RPC (WebSocket) calls. The scaffolding tool `ronyup` is a separate module in the repository, installed with Homebrew or the Go toolchain, while the `rony` package is added to a project with go get. The [getting-started guide](https://github.com/clubpay/ronykit/blob/main/docs/getting-started.md) covers installation, a first server and core concepts. A server runs until it receives a shutdown signal. The documentation lives in the repository's docs folder, and no separate website is named.

## Worth knowing

The README of the repository's `ee` package states a higher Go requirement than the getting-started guide.
