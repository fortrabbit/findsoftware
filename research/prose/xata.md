Xata is an open-source platform that runs many PostgreSQL instances on Kubernetes, with copy-on-write branching and scale-to-zero. The homepage describes it as running vanilla PostgreSQL. The [repository README](https://github.com/xataio/xata) describes it as a platform for self-hosting many Postgres instances, and the [project's open-source pages](https://xata.io/open-source/xata-core) say it ships as Helm charts for a Kubernetes cluster. The README also describes a local setup with kind and Tilt.

The company also runs Xata Cloud, a fully managed service billed by usage, and sells a bring-your-own-cloud deployment in which Xata installs the data plane in the customer's Kubernetes cluster.

## Worth knowing

The README advises against the platform for a single Postgres instance and against offering it as a public Postgres-as-a-Service to end customers. The sign-in with an identity provider uses OpenID Connect, and SAML is not supported out of the box.
