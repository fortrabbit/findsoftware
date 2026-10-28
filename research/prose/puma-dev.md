puma-dev is a development server for macOS and Linux that runs Rack and Rails apps under local domains, such as `.test`, and serves them over HTTPS. An app is added by symlinking its directory into the puma-dev directory, and the server starts it on demand and shuts it down when it is idle. It is installed with Homebrew from a tap, or from a binary the project publishes, and its source is in Go.

Apps are reached through their names as subdomains, and a proxy entry can point a name at another port or host. On Linux, the root certificate and name resolution need extra setup steps that the README describes.

## Worth knowing

On Linux the server does not start in the background by itself. The apps it serves each need the puma gem in their Gemfile.
