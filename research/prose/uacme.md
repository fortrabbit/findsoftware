uacme is a command-line client for the ACMEv2 protocol described in RFC 8555. It asks an ACME certificate authority for a certificate and renews it when needed, and its README describes running it as a cron job that renews the certificate when needed. It installs from source with the configure and make steps, or from the distribution packages the project lists.

## Worth knowing

The README says not to expect uacme to set up the web server to use the certificates it obtains, so configuring the web server is left to the user.
