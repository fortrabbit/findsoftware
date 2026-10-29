lego is an ACME client and library written in Go. It obtains, renews and revokes certificates from ACME servers such as Let's Encrypt and ZeroSSL, runs as a command line tool, and offers a Go library for programs that call the same client. Users download a binary, pull the goacme/lego Docker image, install a package or run `go install` against the source. The project maintains only the AUR and Snap packages, and the other packages come from their communities. The tips page describes renewal from a cron job or a systemd timer.

## Worth knowing

The project lists the DNS-01, HTTP-01, TLS-ALPN-01 and DNS-PERSIST-01 challenges and more than 200 DNS providers. Building from source needs Go 1.25 or newer. The project asks for support through a sponsorship page and a donate link.
