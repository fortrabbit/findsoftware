---
description: The deployed software runs on the Java virtual machine on the server.
lead: Needs a server that runs Java.
---

Java here means the production server runs the software on a Java virtual machine, as a standalone process or inside a servlet container. The host has to provide a Java runtime and enough memory for it, which is often more than a small PHP or Node.js app uses. A record carries this value when its documentation requires a Java runtime on the production server. The matching install requirement is [Java VM](/runtimes/jvm/) under runtime. Keycloak and Spring Boot are examples.
