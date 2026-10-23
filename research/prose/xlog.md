XLog is a static site generator for digital gardens and personal wikis, written in Go. It serves a folder of Markdown files as a website, stores nothing in a database, and can build the same files into static HTML. Pages are edited in the user's own text editor.

Running the binary in a folder starts an HTTP server on port 3000 with a live preview. The installation page lists installation with go install, pre-built binaries, Docker and the AUR, and the README describes built-in extensions for backlinks, hashtags and search.

## Worth knowing

The live server is a process that keeps running and answers requests, so a site served that way needs a host that runs it. The HTML written by the build step needs only static hosting.
