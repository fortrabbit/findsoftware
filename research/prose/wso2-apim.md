WSO2 API Manager is an API management platform for designing, publishing, securing and analyzing APIs. Its classic gateway routes API traffic, and the Management Console, the API Publisher and the Developer Portal are the web portals the product serves.

The product runs on a Java Virtual Machine. Its docs name a zip archive, Helm charts, Docker Compose and Puppet modules as ways to install it, and the Helm, Docker and Puppet routes each point to a repository WSO2 publishes. By default it stores its data in an embedded H2 database. Single sign-on uses OIDC by default, and tenants let separate organizational units share one deployment, each one logically isolated.

## Worth knowing

The docs describe a distributed Enterprise package beside the all-in-one package. The docs recommend Oracle, PostgreSQL, MySQL or MS SQL over the embedded database for production, and they describe running the product as a service started from a boot script.
