Kong Gateway is an API gateway that routes traffic to APIs and applies security, authentication, transformation and analytics through plugins. It is built on NGINX, and its source code is written in Lua. Docker images and deb and rpm packages are the install routes the current docs name. Once installed, the data plane serves traffic continuously, and PostgreSQL is the database the docs name. A web interface, Kong Manager, is available for managing it.

## Worth knowing

The source is Apache-2.0, but Kong also sells an Enterprise edition, which needs a Kong Gateway license key supplied through an environment variable when it starts. Kong Konnect is the vendor's SaaS platform for running the gateway without any infrastructure to manage.
