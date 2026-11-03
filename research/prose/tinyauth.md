Tinyauth puts a login screen in front of self-hosted applications and is an OpenID Connect certified server. It is written in Go and runs as one server process, started from a binary, a Docker container or a Helm chart on Kubernetes. Users are set in configuration as bcrypt-hashed passwords with optional TOTP secrets, and sign-in can go through OAuth providers or an LDAP directory. The [getting-started guide](https://tinyauth.app/docs/getting-started/) places it behind Traefik by default, and per-application labels restrict an app to chosen users or groups.

## Worth knowing

The about page says the project is not designed for production environments that need role-based access control and finer permissions, and recommends Authentik for advanced user management. The README says the project is maintained by a single person.
