mkcert is a Go command that creates certificates for the host names a developer passes to it, and makes them trusted on the local machine. It installs a local certificate authority in the system trust store and signs the certificates with it. Install routes are Homebrew, MacPorts, Chocolatey, Scoop, the Arch Linux package, a prebuilt binary or a build from source with go build. The copyright line names The mkcert Authors, and the source is on GitHub.

## Worth knowing

The README says mkcert is meant for development purposes, not production, and says it should not be used on end users' machines. On Linux, certutil must be installed first.
