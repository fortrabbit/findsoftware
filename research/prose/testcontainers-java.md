Testcontainers for Java is the Java build of the Testcontainers project, which gives tests throwaway instances of services running in Docker containers. The [Java docs](https://java.testcontainers.org/) cover its use with JUnit 4, JUnit 5 and Spock. It is added to a Maven or Gradle build as a test dependency, and each specialised module has a separate JAR.

## Worth knowing

Tests need a Docker environment. The docs name Docker as a prerequisite and name Testcontainers Cloud as one way to get a compatible runtime; Testcontainers Cloud is a separate product, and this software does not include it.
