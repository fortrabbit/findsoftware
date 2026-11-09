goqu is a Go SQL builder that builds SELECT, INSERT, UPDATE and DELETE statements from a query DSL and can execute them. Each database has a dialect that the program imports to register it, and the dialect controls the SQL a dataset generates; a package-level default dialect can be set once at startup. The dialects that ship with goqu cover MySQL, PostgreSQL, SQLite and SQL Server.

## Worth knowing

The README says goqu is not intended to be used as an ORM when a program needs associations or hooks, and it points to ORM libraries for those features.
