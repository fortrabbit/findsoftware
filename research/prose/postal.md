Postal is a mail delivery platform for websites and web applications, run on the operator's own server. Its installation helper, a small Bash script, generates the configuration and starts the software as Docker containers, and its web interface manages mail servers and shows mail logs. Applications send mail through its HTTP API, which takes JSON POST requests authenticated with a key issued for each mail server. Postal can also post incoming mail and delivery events to an HTTP endpoint that the application provides. Messages and other configuration are kept in a MariaDB database that Postal provisions for each mail server, and sign-in can be delegated to an OpenID Connect provider.

## Worth knowing

Three processes must keep running for an installation to work, so Postal needs a server that stays up. MariaDB is required, and MySQL is not supported in its place.
