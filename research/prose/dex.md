Dex is an OpenID Connect provider written in Go and shipped as a single binary. Applications use Dex as an OpenID Connect or OAuth 2.0 provider, while Dex authenticates users against upstream sources such as LDAP, SAML, GitHub, Google and Microsoft. Its state lives in SQLite3, Postgres or MySQL, and the storage page also lists etcd and Kubernetes custom resources as backends. The project distributes a container image and a reference Helm chart, and the [getting started page](https://dexidp.io/docs/getting-started/) also describes building from source. The Kubernetes guide deploys Dex as a deployment with a config map and a node port service. Dex is developed under the Cloud Native Computing Foundation.

## Worth knowing

The README marks the SAML 2.0 connector as unmaintained and likely vulnerable to authentication bypasses.
