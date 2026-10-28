dehydrated is a command-line ACME client that requests and renews TLS certificates from Let's Encrypt, ZeroSSL and other ACME certificate authorities. The [homepage](https://dehydrated.io/) describes it as a client for signing certificates with an ACME server, and the [README](https://github.com/dehydrated-io/dehydrated) describes a bash script that uses the openssl utility for keys and certificates and cURL for requests to the server. The repository's man page says certificates are requested and renewed on a regular basis, through a cron job or a timer, and it stores the certificates on the host it runs on.

## Worth knowing

The project's pages name two different maintainers: the README says the repository is officially maintained by ZeroSSL, and the homepage says it is maintained by an individual developer.
