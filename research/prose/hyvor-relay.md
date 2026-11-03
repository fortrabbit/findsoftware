Hyvor Relay is an email API for developers. An application sends a message to the API over REST, and the server delivers it over SMTP from the IP addresses and domains the operator configures. The server is a PHP API with Go workers, a built-in SMTP server, a DNS server and a webhook worker, shipped as one Docker image and started with Docker Compose or Docker Swarm. It keeps its data in PostgreSQL and signs administrators and users in through an external OpenID Connect provider. Bounces and complaints arrive on its SMTP server, and its DNS server manages the DNS records for the instance domain.

## Worth knowing

The project offers an enterprise license beside the AGPL-3.0 license, and its own pages say both carry the same features. The official cloud instance is not open for public signups, according to the [product docs](https://relay.hyvor.com/docs). A self-hosted server needs a static IPv4 address, with more for additional queues, and accepts incoming mail on port 25.
