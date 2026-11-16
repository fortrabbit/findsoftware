Squirrel is a Go library that builds SQL queries from composable parts. Its README shows SELECT and INSERT statements assembled step by step, with ToSql returning the query text and its arguments. The README says Squirrel is not an ORM and points to a separate table-struct mapper for that job. It can also run the queries it builds against a database handle, and it offers a statement cache and a placeholder format setting for PostgreSQL-style numbered placeholders.

## Worth knowing

The README opens with a maintenance statement: the maintainers call Squirrel complete, say bug fixes will still be merged slowly, and do not promise to respond to bug reports. The README gives only an import path and no install command.
