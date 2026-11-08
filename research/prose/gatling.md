Gatling runs load tests whose scenarios, called simulations, are written as code. Simulations run on the JVM, and build plugins for Maven, Gradle and sbt start them from a project. The README says the same simulation can run on a developer's machine or in CI, and each run produces an HTML report. This repository is the Community Edition.

## Worth knowing

Gatling Enterprise Edition is a commercial product built on the same engine, with team features and managed or private load generators, and the terms page describes its console as a SaaS. The report generation module in the repository has its own license, which forbids modifying or reusing the module code. The gRPC, MQTT, GraphQL and JDBC components are separate dependencies under the Gatling Enterprise Component License, and the Community Edition limits them to 5 concurrent users and 5 minute tests.
