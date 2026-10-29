froxlor is a server management panel for administering hosting on a server: domains, customers, e-mail, FTP accounts and MySQL databases are managed from a browser interface. The panel is written in PHP and uses MySQL or MariaDB. It is installed from a Debian or Ubuntu package, from a tarball, or from a git clone, and its design can be customized with Twig templates. The web server serves the panel per request, and a cron service runs the tasks froxlor creates. Accounts are admins, resellers and customers, and each account has its own interface language. The project is maintained by Michael Kaufmann.

## Worth knowing

The default branch of the repository is a rewrite that its README says is in very early development and not meant for production, so releases come from a different line. The cron service is required and is installed whether or not the operator selects it.
