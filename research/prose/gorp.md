gorp is a Go library that binds struct fields to table columns, by tag or by API, and generates the insert, update, delete and get statements for them. It runs on `database/sql`, so a program supplies its own driver, and each database has a dialect that produces the statements in that database's syntax. Raw SQL can be bound to structs and slices, with positional or named parameters, and registered structs can create their tables for unit tests.

## Worth knowing

The README says its author hesitates to call gorp an ORM, because gorp does not know the relationships between structs. It also says development is not very active right now, and that Oracle and SQL Server support is not covered by CI.
