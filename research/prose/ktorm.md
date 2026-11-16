Ktorm is an object-relational mapping framework for Kotlin that works directly on JDBC. Queries are written in a strongly typed SQL DSL, and the framework generates the SQL from them, which exposes low-level bugs at compile time. Entity sequence APIs let a program write queries with sequence functions such as filter and map, in the style of Kotlin's native collections.

## Worth knowing

The core module supports standard SQL only. Features specific to a database come from a dialect module for that database. The Spring Support page describes integration with Spring JDBC.
