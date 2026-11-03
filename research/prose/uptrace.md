Uptrace is an open source application performance monitoring server. It collects OpenTelemetry traces, metrics and logs and shows them in one web interface. Telemetry is stored in ClickHouse, and users, projects and alerts are stored in PostgreSQL. The [install guide](https://uptrace.dev/get/hosted/install) lists DEB and RPM packages, a pre-compiled binary, and the Docker, Helm and Ansible deployment guides.

The DEB and RPM packages enable the Uptrace service, which starts only after the databases hold every migration. Uptrace Cloud is a hosted version that runs in German data centers with backups in Finland.

## Worth knowing

The Community Edition is licensed under AGPL-3.0. The self-hosted Starter, Team, Business and Enterprise editions are paid and run on a license, and the binary checks the license key of its edition. The paid tiers add features the Community Edition lacks, including SAML single sign-on, role-based access, alert routing, audit logs and Kafka.

Single sign-on with OpenID Connect is part of the open source version, according to the README.
