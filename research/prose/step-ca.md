step-ca is a certificate authority that signs X.509 and SSH certificates and works as an ACME server, so ACME clients can request TLS certificates for web servers from it. Its ACME basics page notes that any web server can answer the http-01 challenge by serving the response as a static file. The README describes it as the server counterpart to the step command-line client, and OIDC single sign-on tokens are one way to authorize a certificate request.

Packages are published for several operating systems, along with a Homebrew formula, Winget and Scoop packages, binaries and a Docker image. The production documentation describes running the server under systemd.

## Worth knowing

The README points to a commercial certificate authority from the same company for needs such as multiple certificate authorities and active revocation.
