Mox is a mail server that sends and receives email over SMTP and IMAP4, with a webmail interface and an admin web interface. It is written in Go and ships as a single binary that the install guide runs as a service on Linux. Applications can send transactional mail through the HTTP/JSON webapi.

## Worth knowing

The source is MIT-licensed. The Public Suffix List it bundles is under MPL-2.0. Stored messages are individual files, with an embedded index database beside them.
