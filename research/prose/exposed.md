Exposed is a Kotlin SQL library with two access styles: a typesafe DSL for building queries and a DAO API for working with entities. Its modules are added to an existing Gradle or Maven project from Maven Central and run on the JVM. An application needs the core module and one transport module, JDBC or R2DBC, and the database access modules are optional layers on top of the core.

## Worth knowing

The R2DBC modules and the Spring modules need a newer JDK than the minimum on the record, which covers the other modules. The DAO API works only with the JDBC transport. Its R2DBC variant is an experimental preview, and its API may change between releases.
