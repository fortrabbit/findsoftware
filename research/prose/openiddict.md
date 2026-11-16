OpenIddict adds OAuth 2.0 and OpenID Connect support to .NET applications. It has three stacks: a server stack for an authorization server, a validation stack for APIs that accept its tokens, and a client stack for signing in to a remote server. The stacks can be used together or on their own. The project natively supports Entity Framework Core, Entity Framework 6 and MongoDB stores, and custom stores can be written for other providers. The [getting-started guide](https://documentation.openiddict.com/guides/getting-started/) describes each stack.

## Worth knowing

The project describes itself as a framework rather than a turnkey identity provider: a server needs custom code, typically at least an authorization controller, before it works. The README says developers should run the OpenID conformance tests against their own deployments, since the project is a poor candidate for certification.
