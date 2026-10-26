Erupt generates an admin page for each JPA entity class annotated with @Erupt, so the annotations on a Java class define the admin interface. It runs on Java with Spring Boot and is added to a Maven project through the erupt-spring-boot-starter dependency, or run from a Docker image.

Each annotated entity is also exposed as a REST endpoint. Users, roles and menus come built in, and the project names OAuth2, LDAP and SSO as sign-in options.

## Worth knowing

The core modules are Apache-2.0. Commercial Chart, Flow, Tenant and Cube modules are sold as add-ons beside the core, and the project links a pricing page for them.
