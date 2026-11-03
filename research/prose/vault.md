HashiCorp Vault is a server that stores secrets and encrypts data, controls access to them through authentication methods and policies, and audits all activity. People and applications reach it through an HTTP API, a CLI or a web interface, and the project's documentation shows applications calling the API from their own code. Clients can authenticate with OIDC, LDAP or SAML, among other methods.

The server is a Go binary that runs as a process answering API requests. It encrypts data at rest and persists it in integrated Raft storage, which the documentation recommends, or in other storage backends, including PostgreSQL and MySQL.

## Worth knowing

Current releases are under the Business Source License 1.1, which allows production use but bars offering Vault to third parties in competition with the vendor's paid versions. Earlier releases were under MPL-2.0. SAML authentication needs a Vault Enterprise license applied to the cluster.

HCP Vault Dedicated is a managed offering that runs Vault in the cloud using the same binary as self-managed Vault Enterprise.
