Gentics Mesh is a headless CMS written in Java. Its content is kept in a relational database that the server reaches through a JDBC connector. The [administration guide](https://www.gentics.com/mesh/docs/administration-guide/) describes an Elasticsearch installation that the server starts by default, and the [getting-started guide](https://www.gentics.com/mesh/docs/getting-started/) names MariaDB as the production example and an in-memory HSQLDB image for trying it out. Content is served through REST and GraphQL APIs, and a web user interface covers editing. Roles are assigned to groups, and the software supports multiple languages and localisation.

The server runs from a JAR file on a Java runtime, or from the Docker image, which ships an empty server without content. Vert.x is the core framework in the software stack the documentation lists. Gentics Software GmbH, based in Vienna, maintains the project and publishes it under the Apache 2.0 license.

## Worth knowing

The administration guide says production servers must be run on Linux. The README describes an Enterprise Edition next to the open-source version, and the documentation lists commercial plugins that come from a commercial repository and must match the server's major and minor version.
