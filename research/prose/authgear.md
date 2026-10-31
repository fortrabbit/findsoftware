Authgear is a login and identity service that a team runs on its own servers or uses as the hosted Authgear Cloud. The server is written in Go and depends on PostgreSQL and Redis, as the [local deployment guide](https://docs.authgear.com/deployment/local) states. Applications connect through OpenID Connect and SAML single sign-on, and through SDKs for Swift, Kotlin, Flutter and React Native. A Helm chart covers Kubernetes installs, and [Authgear ONCE](https://docs.authgear.com/authgear-once/install-authgear-once-on-a-vm) packages an easy-install version for a Linux server under a one-time license that is purchased.

An admin portal sits on top of the server. The homepage says everything the portal does is also available through the Admin API.

## Worth knowing

The pricing page lists an EU data region for Authgear Cloud as coming soon.
