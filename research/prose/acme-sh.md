acme.sh is an ACME protocol client written in POSIX shell. It requests and renews TLS certificates from certificate authorities that support the ACME protocol. It is installed with a script fetched by curl, with a git clone, or with a Docker image from the GitHub Container Registry. The client runs from a daily cron job that the installer creates, which checks certificates and renews them when needed. It runs in a POSIX shell with curl or wget.

## Worth knowing

The project's homepage is run by ZeroSSL, which sponsors and maintains acme.sh and sells the hosted certificate services that the homepage advertises. ZeroSSL is the default certificate authority, and the README also lists Let's Encrypt, SSL.com, Google Public CA and Actalis.
