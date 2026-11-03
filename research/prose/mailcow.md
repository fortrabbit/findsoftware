mailcow is an open source groupware and e-mail suite based on Docker. The [install guide](https://docs.mailcow.email/getstarted/install/) starts with a git clone of the repository, and the stack is then started with Docker Compose. Each container in the stack runs one application, such as a mail transfer agent, an IMAP server or a spam filter, with MariaDB storing user information.

Administration happens in the mailcow web interface, where domain administrators and mailbox users get separate permissions. Logins can come from an LDAP server or an OIDC identity provider.

## Worth knowing

The project's pages show mail relayed from servers in the same network, not from websites or applications, so it is unclear whether it fits the scope of this index.
