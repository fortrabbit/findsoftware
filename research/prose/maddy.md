Maddy is a mail server written in Go. It sends and accepts mail over SMTP, stores messages for IMAP access, and implements DKIM, SPF, DMARC, DANE and MTA-STS in one daemon. The [setup tutorial](https://maddy.email/tutorials/setting-up/) describes the pre-built tarball, which includes a systemd unit, and the [Docker page](https://maddy.email/docker/) describes the official image. The FAQ compares it with MailCow and Mail-in-a-Box, which bundle other software, where Maddy is one program.

Its own pages show mail submitted to the Submission endpoint by Mailman 3, a mailing list manager, with authentication and TLS. SQLite and PostgreSQL hold the mail index, and LDAP can verify passwords.

## Worth knowing

The README calls IMAP storage beta. The project has no admin web interface and no webmail; the FAQ says administration is done with the command-line utility.
