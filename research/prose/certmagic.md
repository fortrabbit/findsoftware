CertMagic is a Go library that obtains and renews TLS certificates from ACME certificate authorities for Go programs. The Caddy web server uses the same library for its automatic HTTPS, and the README describes it as the library Caddy uses.

Its author is Matthew Holt, and the project is licensed under Apache-2.0. It is installed with go get and has no process of its own: it runs inside the Go program that imports it.

## Worth knowing

Because CertMagic is a library, a site served through it runs as the Go program that embeds it, not as a separate service. The module file names a newer Go toolchain than the README's requirements section does.
