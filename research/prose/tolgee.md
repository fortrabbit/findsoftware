Tolgee is a localization platform for software strings. Translators and developers work on translations in a web app, and developers can edit a translation in place inside the running application. The server is a Java application that the [self-hosting guide](https://docs.tolgee.io/platform/self_hosting/running_with_docker) runs with Docker Compose or from a release jar, and it keeps its data in PostgreSQL. The project is maintained by Tolgee s.r.o., a Czech company, and Tolgee Cloud is the hosted version.

## Worth knowing

The repository holds two licenses. Code outside the ee directory is Apache-2.0; the ee directory uses the Tolgee EE License, which allows non-commercial use only and bars offering the software as a hosted service. Advanced features on a self-hosted instance, such as SSO and granular permissions, need a licensed plan.
