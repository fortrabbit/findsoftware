Doors is a Go framework for reactive web applications in which the interactive state stays on the server. Its templates are written in GoX, a Go language extension with its own language server, parser and editor plugins.

The application is a Go program that hands its handler to Go's HTTP server and runs it, and the framework is added with go get. The tutorial asks for Go 1.25.1 or newer, and the application runs on a stateful server, so it is a long-running process rather than files or a script per request.
