Infisical stores application secrets, certificates and cryptographic keys in one platform, and applications fetch secrets from it on demand through language SDKs. The [self-hosting overview](https://infisical.com/docs/self-hosting/overview) describes the server running as a single container, a Docker Compose stack, a Helm chart on Kubernetes, a Linux package, or an AWS or Google Cloud template, with PostgreSQL and Redis alongside it. Each instance has a server admin console for instance-wide settings and user management.

## Worth knowing

The repository is MIT-licensed apart from its `ee` directories, which hold enterprise features that need a license key. The [enterprise licensing page](https://infisical.com/docs/self-hosting/ee) says those features are paid, and an instance running with a license key communicates with the vendor's license server to validate it. The self-hosting overview names Infisical Cloud as the hosted alternative.
