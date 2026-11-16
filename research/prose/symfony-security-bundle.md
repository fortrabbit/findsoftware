SecurityBundle is the Symfony bundle that connects the Security component to the framework. It comes with authenticators for form login, JSON login, HTTP basic, login links, X.509 client certificates and remote users, plus custom authenticators, and the docs cover access tokens through OpenID Connect, OAuth 2.0 token introspection and CAS 2.0. Firewalls and access control rules in the security configuration govern requests.

Users are loaded by a user provider: a Doctrine entity, an LDAP server, a memory configuration or a chain of these. The bundle also provides password hashing, and the docs cover CSRF protection and Remember Me.

## Worth knowing

For social login through providers such as Google, Facebook or Twitter, the docs point to a community bundle and an OAuth client package.
