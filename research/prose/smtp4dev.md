smtp4dev is a fake SMTP server for development and testing. Applications are configured to send mail to it over SMTP, and the messages appear in a web interface where they can be inspected, composed, relayed or deleted. IMAP and POP3 access lets mail clients read the stored messages, and a REST API documented with OpenAPI lets automated tests and external applications work with them. It runs on Windows, Linux and Mac OS X on .NET and is installed with winget, Docker, the dotnet global tool or a downloaded binary, and the installation guide also covers running it as a Windows service. The README compares it with MailHog and MailDev, among other fake SMTP servers.

## Worth knowing

The Docker image publishes the web interface and the SMTP port on the host, and the project's Docker security guidelines warn that an instance can be exposed to the public by accident.
