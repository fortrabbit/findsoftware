BunkerWeb is a web application firewall that sits in front of web services as a reverse proxy. It is built on NGINX and is installed from a Docker image, Linux packages, a Kubernetes autoconf controller or a Terraform provider. Settings are kept in one of four supported databases, and an optional web UI manages the instances with admin, writer and reader roles.

Multisite mode lets one instance serve and protect several web applications. It is off by default.

## Worth knowing

The PRO edition is a paid tier: its features are marked in the documentation, and a license key from the vendor's panel enables them. BunkerWeb Cloud is the same company's managed SaaS offering, for users who do not want to run the instances themselves. The Swarm integration is marked deprecated in the integrations guide.
