Apache ShenYu is an API gateway written in Java and published by The Apache Software Foundation. The gateway ships as a bootstrap distribution, and a separate ShenYu Admin console manages its plugins, selectors and routing rules. The [deployment guide](https://shenyu.apache.org/docs/deployment/deployment-docker/) describes running the bootstrap and the admin console as Docker containers, and the [binary guide](https://shenyu.apache.org/docs/deployment/deployment-quick/) describes running the bootstrap from its tarball.

The admin console keeps its data in an external database, which the deployment guide sets up for MySQL, PostgreSQL or Oracle. The [docker-compose guide](https://shenyu.apache.org/docs/deployment/deployment-docker-compose/) starts a deployment from a compose file.

## Worth knowing

The gateway runs on Java 17 or later. The admin console and the gateway are published as separate distributions.
