Cloudflare D1 is a managed database that Cloudflare runs as a service. Its SQL follows SQLite's semantics, and the [D1 documentation](https://developers.cloudflare.com/d1/) describes querying it from Workers and Pages projects.

## Worth knowing

The pages read describe D1 as a service on Cloudflare's platform, with no installable form. Plan limits set the database size, the storage per account and the number of queries per Worker invocation. A database can be restricted to the European Union or to FedRAMP-compliant data centers; placement is automatic by default.
